const mongoose = require("mongoose");
const { connect } = require("../routes/products");

const connectDB = (uri) => {
  console.log("Database connected");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
