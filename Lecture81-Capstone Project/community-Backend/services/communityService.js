import mongoose from "mongoose";
import Community from "../models/Community.js";
import { User } from "../models/User.js";

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
  if (!mongoose.Types.ObjectId.isValid(id))
    throw new Error("Invalid community Id");

  // const community = await Community.findById(id).populate("host","name -_id");  short way to populate
  /* long way to populate */
  const community = await Community.findById(id)
    .populate({
      path: "host",
      select: "name -_id email",
    })
    .lean();

  /* we can use populate inside populate also */
  // community.host = community.host.name; here we can directly set host ans hostname

  return community;
};

const getCommunityWithMembers = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id))
    throw new Error("Community Id is not a valid mongoose ObjectId");

  const community = await Community.findById(id);
  if (!community) throw new Error("no community exist with this id");

  const members = await User.find({
    joinedCommunity: id,
  }).lean();

  // const members =await User.find({
  //   joinedCommunity: {
  //     $in:[id,"69b9040bb0dd34f5b2c5e857"]
  //   },
  // }).lean();

  // const members =await User.find({
  //   joinedCommunity: {
  //     $all: [id, "69b9040bb0dd34f5b2c5857"],
  //   },
  // }).lean();

  community.members = members;

  return community;
};

export default {
  createCommunity,
  getAllCommunities,
  getSpecificCommunity,
  getCommunityWithMembers,
};
