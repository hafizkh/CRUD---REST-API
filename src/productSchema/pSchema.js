import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    description:String,
    quantity: Number,
    price:Number
})

const Product = mongoose.model("Product", productSchema)

export default Product