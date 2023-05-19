const bs58 = require('bs58');

const decode = (data) => {

    const decoder = new TextDecoder();
    const decodedMessage = decoder.decode(data);

    return decodedMessage;

}

module.exports = decode;