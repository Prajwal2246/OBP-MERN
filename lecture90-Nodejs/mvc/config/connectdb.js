import mongoose from "mongoose";

async function connectDb(uri) {
  try {
    const res = await mongoose.connect(uri);

    console.log("mongodb connected successfully");
  } catch (error) {
    console.log("failed to connect",error);
  }
}

export default connectDb;
