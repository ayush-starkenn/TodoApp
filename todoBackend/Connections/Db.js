const mongoose = require("mongoose");
const db = mongoose
  .connect("mongodb+srv://root:root@cluster0.dbkucpf.mongodb.net/")
  .then(() => {
    console.log("connected successfully");
  });

module.exports = db;
