import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  number: {
    type: String,
    required: true,
  },
  job_title: {
    type: String,
    enum: ["software Dev", "junior soft. dev", "senior soft dev"],
    default: "junior soft. dev",
  },
});

export const User = mongoose.model("user", userSchema);
