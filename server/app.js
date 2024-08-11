const express = require("express");
const mongoose = require("mongoose");
const router = require("./Controllers/routes");
const app = express();
const url = "mongodb://localhost:27017/crud";
mongoose
  .connect(url)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));
app.use(express.json());
app.use("/students", router);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
