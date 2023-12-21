const CryptoJS = require("crypto-js");

const Encoding = (text) => {
  let encodedText = CryptoJS.AES.encrypt(text, process.env.CRYPTO_SECRET).toString();
  return encodedText;
};

const Decoding = (text) => {
  let decodedText = CryptoJS.AES.decrypt(text, process.env.CRYPTO_SECRET).toString(
    CryptoJS.enc.Utf8
  );
  return decodedText;
};

module.exports = { Encoding, Decoding };
