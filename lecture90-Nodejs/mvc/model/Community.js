import mongoose from "mongoose";

const communitySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 1000,
  },
  category: {
    type: String,
    enum: ["chess", "cricket"],
    required: true,
  },
});

export const Commmunity = mongoose.model("community", communitySchema);
