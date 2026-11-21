/**
 * FlightBot Wallet Crypto & PWA Module
 * Implementa cifrado real en el cliente mediante Web Crypto API (PBKDF2-SHA256 + AES-256-GCM)
 * y registro resiliente del Service Worker para funcionamiento genuino en modo avión.
 */
(function (globalScope) {
  'use strict';

  const VAULT_STORAGE_KEY = 'fb_wallet_vault_v1';
  const LEGACY_PLAIN_KEY = 'fb_wallet_docs';
  const PBKDF2_ITERATIONS = 150000;

  function getCryptoApi() {
    if (typeof globalScope !== 'undefined' && globalScope.crypto && globalScope.crypto.subtle) {
      return globalScope.crypto;
    }
    return null;
  }

  // Convierte Uint8Array a Base64 estándar sin desbordar la pila de llamadas
  function bytesToBase64(bytes) {
    let binary = '';
    const chunkSize = 0x8000;
    for (let i = 0; i < bytes.length; i += chunkSize) {
      binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunkSize));
    }
    return btoa(binary);
  }

  // Convierte Base64 estándar a Uint8Array
  function base64ToBytes(base64Str) {
    const binary = atob(base64Str);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  // Deriva una clave AES-256-GCM a partir del PIN del usuario y un salt único
  async function deriveAesKey(pin, saltBytes, iterations) {
    const cryptoApi = getCryptoApi();
    if (!cryptoApi) {
      throw new Error('Web Crypto API no disponible en este navegador o contexto inseguro.');
    }
    const encoder = new TextEncoder();
    const keyMaterial = await cryptoApi.subtle.importKey(
      'raw',
      encoder.encode(String(pin)),
      'PBKDF2',
      false,
      ['deriveKey']
    );
    return cryptoApi.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: saltBytes,
        iterations: iterations || PBKDF2_ITERATIONS,
        hash: 'SHA-256'
      },
      keyMaterial,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt', 'decrypt']
    );
  }

  // Valida que el PIN cumpla requisitos mínimos de seguridad
  function validatePin(pin) {
    const normalized = String(pin || '').trim();
    return normalized.length >= 4 && normalized.length <= 32;
  }

  // Cifra el arreglo de documentos con AES-256-GCM generando salt e IV frescos en cada guardado
  async function encryptVault(docsArray, pin) {
    if (!validatePin(pin)) {
      throw new Error('El PIN debe tener entre 4 y 32 caracteres.');
    }
    const cryptoApi = getCryptoApi();
    if (!cryptoApi) {
      throw new Error('Tu navegador no soporta cifrado Web Crypto API.');
    }

    const salt = cryptoApi.getRandomValues(new Uint8Array(16));
    const iv = cryptoApi.getRandomValues(new Uint8Array(12));
    const aesKey = await deriveAesKey(pin, salt, PBKDF2_ITERATIONS);

    const plaintextBytes = new TextEncoder().encode(JSON.stringify(docsArray || []));
    const encryptedBuffer = await cryptoApi.subtle.encrypt(
      { name: 'AES-GCM', iv: iv },
      aesKey,
      plaintextBytes
    );

    const envelope = {
      version: 1,
      alg: 'AES-GCM',
      kdf: 'PBKDF2-SHA256',
      iterations: PBKDF2_ITERATIONS,
      salt: bytesToBase64(salt),
      iv: bytesToBase64(iv),
      ciphertext: bytesToBase64(new Uint8Array(encryptedBuffer))
    };

    return JSON.stringify(envelope);
  }

  // Descifra una bóveda AES-256-GCM y retorna el arreglo de documentos
  async function decryptVault(vaultJsonString, pin) {
    if (!validatePin(pin)) {
      throw new Error('PIN inválido.');
    }
    let envelope;
    try {
      envelope = JSON.parse(vaultJsonString);
    } catch (_e) {
      throw new Error('Formato de bóveda corrupto.');
    }
    if (!envelope || envelope.version !== 1 || !envelope.salt || !envelope.iv || !envelope.ciphertext) {
      throw new Error('Estructura de bóveda no reconocida.');
    }

    const cryptoApi = getCryptoApi();
    if (!cryptoApi) {
      throw new Error('Web Crypto API no disponible.');
    }

    const salt = base64ToBytes(envelope.salt);
    const iv = base64ToBytes(envelope.iv);
    const ciphertext = base64ToBytes(envelope.ciphertext);
    const iterations = Number(envelope.iterations) || PBKDF2_ITERATIONS;
    const aesKey = await deriveAesKey(pin, salt, iterations);

    try {
      const decryptedBuffer = await cryptoApi.subtle.decrypt(
        { name: 'AES-GCM', iv: iv },
        aesKey,
        ciphertext
      );
      const parsed = JSON.parse(new TextDecoder().decode(decryptedBuffer));
      return Array.isArray(parsed) ? parsed : [];
    } catch (_err) {
      throw new Error('PIN incorrecto o datos alterados.');
    }
  }

  function isSupported() {
    return Boolean(getCryptoApi());
  }

  function hasEncryptedVault() {
    try {
      return Boolean(localStorage.getItem(VAULT_STORAGE_KEY));
    } catch (_e) {
      return false;
    }
  }

  // Registra el Service Worker de FlightBot y notifica estado online/offline en tiempo real
  async function registerPwaServiceWorker(onStatusChange) {
    const notify = typeof onStatusChange === 'function' ? onStatusChange : () => {};

    const emitNetworkState = (swReady) => {
      const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
      notify({ isOnline, swReady: Boolean(swReady) });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('online', () => emitNetworkState(true));
      window.addEventListener('offline', () => emitNetworkState(true));
    }

    if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('/sw.js', { scope: '/' });
        emitNetworkState(true);
      } catch (_err) {
        emitNetworkState(false);
      }
    } else {
      emitNetworkState(false);
    }
  }

  const WalletCrypto = {
    VAULT_STORAGE_KEY,
    LEGACY_PLAIN_KEY,
    isSupported,
    validatePin,
    encryptVault,
    decryptVault,
    hasEncryptedVault,
    registerPwaServiceWorker
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = WalletCrypto;
  } else {
    globalScope.WalletCrypto = WalletCrypto;
  }
})(typeof window !== 'undefined' ? window : globalThis);
