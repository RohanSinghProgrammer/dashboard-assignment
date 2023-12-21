const jwt = require("jsonwebtoken");

const GenerateToken = (object) => {
  let token = jwt.sign(object, process.env.JWT_SECRET, { expiresIn: "36h" });
  return token;
};

module.exports = GenerateToken;
