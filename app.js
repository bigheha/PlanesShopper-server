// import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import "dotenv/config.js";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./models/user.js";
import productRouter from "./routes/productsRoutes.js"

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

app.use('/products', productRouter);

app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = User.findOne({ email });

    if (!user) {
      res.sendStatus(401);
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, passwordHash });
    newUser.save();
  } catch (error) {
    console.log(error);
    res.sendStatus(501);
  }
  res.sendStatus(201);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.sendStatus(401);
  }

  const { _id: id, passwordHash } = user;

  const isCorrect = await bcrypt.compare(password, passwordHash);

  if (isCorrect) {
    jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: "2d" }, (err, token) => {
      if (err) {
        res.status(500).json(err);
      }

      res.status(200).json({ token });
    });
  } else {
    res.sendStatus(401);
  }
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
