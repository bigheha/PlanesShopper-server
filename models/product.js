import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
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

const Product = mongoose.model("product", productSchema);
export default Product;
