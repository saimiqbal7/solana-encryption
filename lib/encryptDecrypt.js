const nacl = require('tweetnacl');
const bs58 = require('bs58');
const ed2curve = require('ed2curve');
const encode = require('../adapters/encoder.js');
const decode = require('../adapters/decoder.js');

function nonce(){
    const nonce = nacl.randomBytes(nacl.box.nonceLength);
    return nonce;
}

function encrypt(message, nonce, publicKey_receiver, privateKey_sender){

    const curve25519PrivateKey_sender = ed2curve.convertSecretKey(privateKey_sender);
    const curve25519PublicKey_receiver = ed2curve.convertPublicKey(
        bs58.decode(publicKey_receiver)
      );

    const messageUint8 = encode(message);
    const encrypted = nacl.box(messageUint8, nonce, curve25519PublicKey_receiver, curve25519PrivateKey_sender);
    return encrypted;

}

function decrypt(encrypted, nonce, publicKey_sender, privateKey_receiver){

    const curve25519PrivateKey_receiver = ed2curve.convertSecretKey(privateKey_receiver);
    const curve25519PublicKey_sender = ed2curve.convertPublicKey(
        bs58.decode(publicKey_sender)
      );

    const decrypted = nacl.box.open(encrypted, nonce, curve25519PublicKey_sender, curve25519PrivateKey_receiver);
    const decryptedMessage = decode(decrypted);
    return decryptedMessage;

}

function sign(message, secretKey) {
    
    const encodedMessage = encode(message);
    const signature = nacl.sign.detached(encodedMessage, secretKey);
    return signature;
}

function verify(message, signature, publicKey) {

    const encodedMessage = encode(message);
    const verified = nacl.sign.detached.verify(encodedMessage, signature, publicKey)
    return verified;
}


module.exports = {encrypt, decrypt, nonce, sign, verify};