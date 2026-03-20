import mongoose from "mongoose";
import Community from "../models/Community.js";

const createCommunity = async ({ name, description, host, category }) => {
  const inputErros = [];
  if (!name) inputErros.push("name cannot be empty");
  if (!description) inputErros.push("description cannot be empty");
  if (!host) inputErros.push("host cannot be empty");
  if (!category) inputErros.push("category cannot be empty");

  if (!mongoose.Types.ObjectId.isValid(host)) {
    throw new Error("host id is not valid objectId");
  }

  //verify of category  is in ["Tech", "Chess", "Cooking", "Jobs", "sports", "politics"],

  const a = await new Community({ name, description, host, category }).save();
  console.log(a);
};

const getAllCommunities = async () => {
  const communities = await Community.find().lean(); //lean converts my mongodb obj into plain js object
  return communities;
};

const getSpecificCommunity = async (id) => {
  if(!mongoose.Types.ObjectId.isValid(id)) throw new Error("Invalid community Id");
  
  const community = await Community.findById(id);
  return community;
};

export default { createCommunity, getAllCommunities, getSpecificCommunity };
