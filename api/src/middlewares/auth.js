const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({message: "Authentication required!"});
    const token = authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({message: err.message});
      req.user = user;
      next();
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = auth;
