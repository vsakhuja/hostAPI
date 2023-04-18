require("dotenv").config();
const { connect } = require("mongoose");
const connectDB = require("./db/connect");
const Product = require("./models/products");

const ProductJson = require("./products.json")

const start = async() => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.create(ProductJson);
        console.log("Success")
    } catch (error) {
        console.log(error)
        console.log("Failure")
    }
}

start();