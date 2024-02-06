import express from "express";
import mongoose from "mongoose";

import Product from "./models/product.js";

const app = express();

const port = 3000;

const dbURI =
  "mongodb+srv://lysakihor4221:qwerty322@cluster0.qzqitn8.mongodb.net/PlanesShopperDB?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));

app.use(express.json());

app.post("/products", async (req, res) => {
  console.log("endpoint reached!");
  try {
    const body = req.body;
    const newProduct = await Product.create(body);
    newProduct.save();
  } catch (error) {
    console.log(error);
  }
});

app.get("/products", (req, res) => {
  Product.find()
    .sort({ createdAt: -1 })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

app.patch("/products", (req, res) => {
  const _id = req.body.id;
  const changes = req.body.changes;
  Product.updateOne({ _id }, changes);
});

app.delete("/products", (req, res) => {
  console.log("delete endpoint reached");
  const _id = req.body.id;
  console.log(_id);
  Product.findOneAndDelete({ _id });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
