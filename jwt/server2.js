const express = require("express");
require("dotenv").config();
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());
app.post("/login", async (req, res) => {
  const { name, password } = req.body;
  const token = jwt.sign({ name, password }, process.env.SECRET_KEY);
  res.json({ token });
});
const verify = async (req, res, next) => {
    const token=req.headers.authorization.split(" ")[1];
    console.log(token);
  try {
    const data = jwt.verify(token, process.env.SECRET_KEY);
    req.data = data;
    next();
  } catch (error) {
    res.json({ error: "Invalid token" });
  }
};

app.get("/", verify, (req, res) => {
  res.json({ message: "Welcome to server 2", data: req.data.name });
});
app.listen(6000, () => {
  console.log("Server 2 is running on port 6000");
});
