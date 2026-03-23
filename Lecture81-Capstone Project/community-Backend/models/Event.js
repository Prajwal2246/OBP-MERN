import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxLength: 1000,
  },
  communityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "community",
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  venue: {
    type: String,
    required: true,
    trim: true,
  },
  time: {
    type: Date,
    required: true,
  },
  capacity: {
    type: Number,
  },
  mode: {
    type: String,
    enum: ["online", "offline"],
    required: true,
  },
});

//schema to mongodb db me dalana hai to schema to convert krna pdta hai
const Event = mongoose.model("event", eventSchema);
export default Event;
// add capacity
