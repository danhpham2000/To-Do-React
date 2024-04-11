require("dotenv").config({ path: "../.env" });

const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i8wq6lg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("Database connected!");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
