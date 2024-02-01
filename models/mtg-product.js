import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Product = new Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

export default Product;
