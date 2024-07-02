import mongoose from "mongoose";

const connectDB = await mongoose
  .connect("mongodb://127.0.0.1:27017/books-model")
  .then((conn) => console.log(`MongoDB connected: ${conn.connection.host}`))
  .catch((err) => console.log(`Error: ${err.message}`));

export default connectDB;
