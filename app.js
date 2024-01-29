import express from "express";
import mongoose from "mongoose";
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

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
