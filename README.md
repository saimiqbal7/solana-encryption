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

const message = "Hello World";
const publicKey_sender = "4VRqZyNrGUpApvgXAV39B342qdHTq9PGS2WbT55XzeaA";
const privateKey_sender = new Uint8Array([  
  132, 74, 129, 68, 65, 80, 64, 127, 108, 40, 189, 220, 216, 232, 242, 66,
  61, 156, 83, 28, 10, 14, 47, 249, 132, 229, 232, 201, 248, 73, 89, 152,
  51, 219, 104, 59, 111, 32, 190, 25, 154, 141, 42, 177, 240, 132, 71,
  138, 87, 151, 35, 81, 74, 93, 169, 249, 188, 36, 23, 55, 53, 130, 24,
  255,
]);

const publicKey_receiver = "DE9Bj5ZvuGaKzszMNH9kNZFUTtcsS61zkQk1osFCrD9R";
const privateKey_receiver = new Uint8Array([
  178, 119, 119, 186, 189, 96, 234, 41, 118, 99, 34, 21, 5, 236, 129, 96,
  236, 182, 201, 0, 240, 23, 63, 251, 17, 210, 203, 123, 112, 141, 96,
  231, 181, 170, 12, 97, 4, 250, 99, 214, 92, 206, 137, 92, 57, 220, 203,
  160, 122, 135, 126, 89, 168, 120, 211, 143, 116, 178, 56, 63, 251, 185,
  61, 48,
]);

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
