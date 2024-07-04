import mongoose from "mongoose";
// require("dotenv").config(); //its not necessary to import dotenv, it will be loaded automatically because we are using es6 modules
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB conected");
  } catch (error) {
    console.error("Error to connect to MongoDB", error);
    process.exit(1);
  }
};

export default connectDB;
