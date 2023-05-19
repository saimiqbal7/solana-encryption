const nacl = require('tweetnacl');
const encode = require('./adapters/encoder.js');
const decode = require('./adapters/decoder.js');


const encrypt = (message, nonce, publicKeyB, privateKeyA) => {

    const messageUint8 = encode(message);
    const encrypted = nacl.box(messageUint8, nonce, publicKeyB, privateKeyA);
    return encrypted;

}

const decrypt = (encrypted, nonce, publicKeyA, privateKeyB) => {

    const decrypted = nacl.box.open(encrypted, nonce, publicKeyA, privateKeyB);
    const decryptedMessage = decode(decrypted);
    return decryptedMessage;

}

module.exports = {encrypt, decrypt};