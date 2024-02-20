// import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import Product from "./models/product.js";

const app = express();

const port = 3000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

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
    .then((result) => {
      console.log(result);
      res.json(result);
    })
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
