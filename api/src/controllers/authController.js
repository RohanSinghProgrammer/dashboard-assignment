const UserModel = require("../models/userModel");
const { Encoding, Decoding } = require("../utils/crypto");
const GenerateToken = require("../utils/generateJWT");

const login = async (req, res) => {
  try {
    let { username, password } = req.body;
    if (!username || !password)
      return res.json({ message: "some fields are missing!" });
    let user = await UserModel.findOne({username});
    if (!user)
      return res.status(404).json({ message: "User does not exists!" });
    let decPassword = Decoding(user.password);
    if (decPassword != password)
    return res.status(403).json({ message: "Wrong credentials ☹️" });
  const token = GenerateToken({username, email: user.email});
    const bearerToken = "Bearer " + token;
    res.send({ user, token: bearerToken });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const register = async (req, res) => {
  try {
    let { username, email, password, role = "1" } = req.body;
    let encPassword = Encoding(password);
    let user = await UserModel.create({
      username,
      email,
      password: encPassword,
      role
    });
    res.send(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const getUsers = async (req, res) => {
  try {
    let users = await UserModel.find(req.query, "-password");
    res.send(users);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = { login, register, getUsers };
