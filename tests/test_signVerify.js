const nacl = require("tweetnacl");
const { sign, verify } = require("./signVerify");

const message = "Hello Saim";
console.log("Message:", message);

const publicKey = "4VRqZyNrGUpApvgXAV39B342qdHTq9PGS2WbT55XzeaA";
const secretKey = new Uint8Array([
  132, 74, 129, 68, 65, 80, 64, 127, 108, 40, 189, 220, 216, 232, 242, 66,
  61, 156, 83, 28, 10, 14, 47, 249, 132, 229, 232, 201, 248, 73, 89, 152,
  51, 219, 104, 59, 111, 32, 190, 25, 154, 141, 42, 177, 240, 132, 71,
  138, 87, 151, 35, 81, 74, 93, 169, 249, 188, 36, 23, 55, 53, 130, 24,
  255,
]);

const signature = sign(message, secretKey);
console.log("Signature:", signature);

