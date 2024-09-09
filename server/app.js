const express = require("express");
const mongoose = require("mongoose");
const cors=require('cors');
const router = require("./Controllers/routes");
const app = express();
const url = "mongodb://localhost:27017/crud";
// const url = "mongodb://127.0.0.1:27020,127.0.0.1:27021,127.0.0.1:27022/crud?replicaSet=m101";
mongoose
  .connect(url)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use("/students", router);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
