# Solana-encryption

This module can be used to encrypt, decrypt, sign and verify messages using solana keys

## Installation

```bash
npm install solana-encryption
or
yarn add solana-encryption
```

## Example Usage

```js
const { encrypt, decrypt, nonce } = require("solana-encryption");
const Keypair = require('@solana/web3.js').Keypair;

const message = "Hello World";

// Generate two random key pairs
const keypairA = Keypair.generate();
const keypairB = Keypair.generate();

// Get the public and private keys from the keypairs
const publicKey_sender = keypairA.publicKey.toBase58();
const privateKey_sender = keypairA.secretKey;
const publicKey_receiver = keypairB.publicKey.toBase58();
const privateKey_receiver = keypairB.secretKey;

// Generate a nonce
const newNonce = nonce();

const encrypted = encrypt(
  message,
  newNonce,
  publicKey_receiver,
  privateKey_sender
);

console.log("encrypted: ", encrypted);

const decrypted = decrypt(
  encrypted,
  newNonce,
  publicKey_sender,
  privateKey_receiver

);

console.log("decrypted: ", decrypted);
```

## Encrypt and Decrypt

The encryptDecrypt.js module can be used to encrypt and decrypt a message using solana keypairs.

This code can be tested in the index.js file.

## Sign and Verify

The Sign and Verify module can be used to sign a message using a Solana key and verify the signature.

The test for this is provided in the test folder.
