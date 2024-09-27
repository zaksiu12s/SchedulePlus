// importing libraries
// working on:
// express - to handle requests from client
// node-html-parser - to convert text data from fetch request to js objects with HTML DOM
import express, { Express } from "express";

const app: Express = express();
const PORT: number = 4000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// importing modules
import routerApiV1 from "./api/v1.js";
app.use("/api/v1", routerApiV1);

app.listen(PORT, () => {
  console.log(`App running on: localhost:${PORT}`);
});
