# Solana-encryption

This module can be used to encrypt, decrypt, sign and verify messages using solana keys

## Installation

```bash
npm install solana-encryption
or
yarn add solana-encryption
```

## Usage

```js
const { encrypt, decrypt, nonce } = require('solana-encryption');

const noce =  nonce();
const encrypted = encrypt(message, nonce, publicKey_receiver, privateKey_sender);
console.log('encrypted: ', encrypted);
```

## Encrypt and Decrypt

The encryptDecrypt.js module can be used to encrypt and decrypt a message using solana keypairs.

This code can be tested in the index.js file.

## Sign and Verify

The Sign and Verify module can be used to sign a message using a Solana key and verify the signature.

The test for this is provided in the test folder.
