import mongoose from "mongoose";

const communitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxLength: 500,
  },
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["Tech", "Chess", "Cooking", "Jobs", "sports", "politics"],
  },
});

const Community = mongoose.model("community", communitySchema);
export default Community;
