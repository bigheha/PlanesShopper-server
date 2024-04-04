import express from "express";
const productRouter = express.Router();
import Product from "../models/product.js";

productRouter.post("/createOne", async (req, res) => {
    try {
        const body = req.body;
        const newProduct = await Product.create(body);
        newProduct.save();
    } catch (error) {
        console.log(error);
    }
});

productRouter.get("/getAll", (req, res) => {
    Product.find()
        .sort({ createdAt: -1 })
        .then((result) => {
            console.log(result);
            res.json(result);
        })
        .catch((err) => console.log(err));
});
  
productRouter.patch("/changeOne", (req, res) => {
    console.log('endpoint reached');
    const _id = req.body.id;
    console.log(req.body, _id);
    Product.findOneAndUpdate(
        {_id}, 
        {$set: {amount: req.body.amount}},
        )
        .catch(err => {
            console.log(err);
            res.status(500).send("Error updating product");
        })
});
  
productRouter.delete("/deleteOne", (req, res) => {
    console.log("delete endpoint reached");
    const _id = req.body.id;
    console.log(_id);
    Product.findOneAndDelete({ _id });
});

export default productRouter;