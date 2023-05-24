const {encrypt, decrypt} = require('../lib/encryptDecrypt');
const nacl = require('tweetnacl');
const ed2curve = require('ed2curve');
const Keypair = require('@solana/web3.js').Keypair;


    //RANDOM SOLANA KEYS
     const publicKeyA = "4VRqZyNrGUpApvgXAV39B342qdHTq9PGS2WbT55XzeaA";
      const privateKeyA = new Uint8Array([
        132, 74, 129, 68, 65, 80, 64, 127, 108, 40, 189, 220, 216, 232, 242, 66,
        61, 156, 83, 28, 10, 14, 47, 249, 132, 229, 232, 201, 248, 73, 89, 152,
        51, 219, 104, 59, 111, 32, 190, 25, 154, 141, 42, 177, 240, 132, 71,
        138, 87, 151, 35, 81, 74, 93, 169, 249, 188, 36, 23, 55, 53, 130, 24,
        255,
      ]);
      const publicKeyB = "DE9Bj5ZvuGaKzszMNH9kNZFUTtcsS61zkQk1osFCrD9R";
      const privateKeyB = new Uint8Array([
        178, 119, 119, 186, 189, 96, 234, 41, 118, 99, 34, 21, 5, 236, 129, 96,
        236, 182, 201, 0, 240, 23, 63, 251, 17, 210, 203, 123, 112, 141, 96,
        231, 181, 170, 12, 97, 4, 250, 99, 214, 92, 206, 137, 92, 57, 220, 203,
        160, 122, 135, 126, 89, 168, 120, 211, 143, 116, 178, 56, 63, 251, 185,
        61, 48,
      ]);

const message = 'Hello Saim!'; 
console.log('message: ', message);
const nonce = nacl.randomBytes(nacl.box.nonceLength);
console.log('nonce: ', nonce);

const encrypted = encrypt(message, nonce, publicKeyB, privateKeyA);
console.log('encrypted: ', encrypted);

const decrypted = decrypt(encrypted, nonce, publicKeyA, privateKeyB);
console.log('decrypted: ', decrypted);
