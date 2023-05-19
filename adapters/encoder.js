const bs58 = require('bs58');

const encode = (message) => {

    const encoder = new TextEncoder();
    const messageUint8 = encoder.encode(message);

    return messageUint8;

}

module.exports = encode;