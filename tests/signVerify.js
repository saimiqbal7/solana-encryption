const nacl = require('tweetnacl');
const encode = require('../adapters/encoder')

function sign(message, secretKey) {
    
    const encodedMessage = encode(message);
    const signature = nacl.sign.detached(encodedMessage, secretKey);
    return signature;
}



module.exports = {sign};