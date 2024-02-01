import express from "express";
import mongoose from "mongoose";

import Product from "./models/mtg-product";

const app = express();

const port = 3000;

const dbURI =
  "mongodb+srv://lysakihor4221:qwerty322@cluster0.lyt2lfe.mongodb.net/PlanesShopper?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.post("/create-product", (req, res) => {
  const body = req.body;
  const newProduct = Product.create(body);
  newProduct.save();
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
