const encryptDecrypt = require('./encryptDecrypt');
const nacl = require('tweetnacl');
const ed2curve = require('ed2curve');
const Keypair = require('@solana/web3.js').Keypair;


const keyPairStart = nacl.sign.keyPair();
const keyPair =  ed2curve.convertKeyPair(keyPairStart);
const publicKeyA = keyPair.publicKey;
const privateKeyA = keyPair.secretKey;


const keyPairStartB =  nacl.sign.keyPair();
const keyPairB = ed2curve.convertKeyPair(keyPairStartB);
const publicKeyB = keyPairB.publicKey;
const privateKeyB = keyPairB.secretKey;

const message = 'Hello Saim!'; 
console.log('message: ', message);
const nonce = nacl.randomBytes(nacl.box.nonceLength);
console.log('nonce: ', nonce);

const encrypted = encryptDecrypt.encrypt(message, nonce, publicKeyB, privateKeyA);
console.log('encrypted: ', encrypted);

const decrypted = encryptDecrypt.decrypt(encrypted, nonce, publicKeyA, privateKeyB);
console.log('decrypted: ', decrypted);
