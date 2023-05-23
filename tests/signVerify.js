const nacl = require('tweetnacl');
const encode = require('../adapters/encoder')

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


module.exports = {sign, verify};