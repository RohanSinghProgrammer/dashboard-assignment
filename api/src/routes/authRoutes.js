const router = require("express").Router();
const { login, register, getUsers } = require("../controllers/authController");

router.get("/", getUsers);
router.post("/", register);
router.post("/login", login);

module.exports = router;