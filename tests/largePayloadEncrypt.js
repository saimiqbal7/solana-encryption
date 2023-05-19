const encryptDecrypt = require('../encryptDecrypt');
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

var large_object = [];

for ( var i = 0; i < 100; i++ ) {
    // populate the ith element with a large string of 1000 characters
    large_object[i] = 'Koii Network '.repeat(100);
}
const message = JSON.stringify(large_object)

console.log('message: ', message);
const nonce = nacl.randomBytes(nacl.box.nonceLength);
console.log('nonce: ', nonce);

const encrypted = encryptDecrypt.encrypt(message, nonce, publicKeyB, privateKeyA);
console.log('encrypted: ', encrypted);

const decrypted = encryptDecrypt.decrypt(encrypted, nonce, publicKeyA, privateKeyB);
console.log('decrypted: ', decrypted);

// convert the decrypted payload back to json from string and then count the elements 
// to verify that the payload was decrypted correctly

const decrypted_json = JSON.parse(decrypted);
console.log('decrypted_json: ', decrypted_json);
console.log('decrypted_json.length: ', decrypted_json.length);


