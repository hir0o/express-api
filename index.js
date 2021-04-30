import express from "express";
import * as data from "./sample-data.js";

const app = express();

app.get("/", (req, res) => {
  res.json({
    comment: "Hello!!",
  });
});
