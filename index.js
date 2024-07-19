const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://sunny:sunny5449@cluster0.qm94xe7.mongodb.net/node-api?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("connected to databse"))
  .catch((err) => console.log("error something gone wrong", err));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello from Node API");
});
