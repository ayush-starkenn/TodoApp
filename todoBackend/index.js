//import
const express = require("express");
const cors = require("cors");
const db = require("./Connections/Db");
const routes = require("./Routers/Router");

// creating app
const app = express();
app.use(express.json());
app.use("/api/", routes);

app.use(
  cors({
    origin: "http://localhost:3000/",
    credentials: true,
    encodedUrl: true,
  })
);

app.listen(3001, () => {
  console.log("app started");
});

db;
