const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require('mongoose')
const authRoutes = require("./src/routes/authRoutes");

require('dotenv').config()
const app = express();
const PORT = 4000;
const MONGO_URI = "mongodb://127.0.0.1:27017/dashboard"

app.use(express.json());
app.use(cors());
app.use(
  morgan((tokens, req, res) =>
    [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
    ].join(" ")
  )
);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("DB connected!"))
  .catch((e) => console.log(`ERROR: ${e.message}`));

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => console.log(`Alive on http://localhost:${PORT}`));
