const nacl = require("tweetnacl");
const { sign, verify } = require("../signVerify");

const message = "Hello Saim";
console.log("Message:", message);


const keypair = nacl.sign.keyPair();
const publicKey = keypair.publicKey;
const secretKey = keypair.secretKey;

const signature = sign(message, secretKey);
console.log("Signature:", signature);

const verified = verify(message, signature, publicKey);
console.log("Verified:", verified);
