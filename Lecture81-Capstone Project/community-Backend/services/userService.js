/* business logic service ke andr hota hai */
import { User } from "../models/User.js";
import Community from "../models/Community.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const registerUser = async ({ name, email, password }) => {
  const inputErros = [];

  if (!name) {
    inputErros.push("Name is required");
  }
  if (!email) {
    inputErros.push("Email is required");
  }
  if (!password) {
    inputErros.push("Password is required");
  }

  if (password?.length < 6)
    inputErros.push("password length must be 6 characters");

  if (name.length < 10 || name.length > 100)
    inputErros.push("name length must be in range [10,100]");

  const existingUser = await User.findOne({ email: email });
  if (existingUser) inputErros.push(`Email : ${email} already exists`);

  if (inputErros.length) throw new Error(inputErros.join(","));

  //IF WE ARE REACHING THIS LINE OF CODE THEN THERE'S NO INPUT ERROR AND WE CAN SAFELY STORE THE VALID USER

  const hashedPassword = await bcrypt.hash(password, 10); //salt between 5-10 is considered as good hash

  const user = new User({
    name,
    email,
    hashedPassword,
  });
  if (!name) throw new Error("name is empty");
  await user.save();
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return token;
};

const loginUser = async ({ email, password }) => {
  const inputErros = [];

  if (!email) inputErros.push("email is required");
  if (!password) inputErros.push("password is required");
  if (password?.length < 6)
    inputErros.push("password length must be atleast of 6 length");

  if (inputErros.length) {
    throw new Error(inputErros.join(","));
  }

  const user = await User.findOne({ email }).select("+hashedPassword");

  if (!user) throw new Error("user not found");

  const userpassword = await bcrypt.compare(password, user.hashedPassword);
  console.log(userpassword);
  if (userpassword == false) {
    throw new Error("incorrect password");
  }
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return { token, user };
};

const joinCommunity = async ({ userId, communityId }) => {
  if (!communityId) throw new Error("community id is not valid");

  if (!mongoose.Types.ObjectId.isValid(communityId)) {
    throw new Error("community id is not valid json object");
  }

  const existingCommunity = await Community.findById(communityId);
  if (!existingCommunity) {
    throw new Error("community id is not valid");
  }

  await User.findByIdAndUpdate(userId, {
    $addToSet: {
      joinedCommunity: communityId,
    },
  });
};

const makeHost = async (userId) => {
  await User.findByIdAndUpdate(userId, {
    $set: { role: "host" },
  });
};

const leaveCommunity = async ({ id, user_id }) => {
  if (!mongoose.Types.ObjectId.isValid(id))
    throw new Error("id is not a valid mongooseId");

  //checking if community exist or not
  const community = await Community.findById(id);
  if (!community) throw new Error("no community exist with this id");

  //remvoe that community from joinedCommunity
  await User.findByIdAndUpdate(user_id, {
    $pull: {
      joinedCommunity: id,
    },
  });
};

const dashboard = async (id) => {
  if (!id) throw new Error("userid not exist");

  const dashboard = await User.findById(id)
    .select("name role joinedCommunity rsvpedEvents")
    .populate({ path: "joinedCommunity", select: "name category" })
    .populate({
      path: "rsvpedEvents",
      select: "name city time mode",
      populate: {
        path: "communityId",
        select: "name",
      },
    });
  return dashboard;
};

const hostDashboard = async (id) => {
  if (!id) throw new Error("userid not exist");

  const dashboard = await User.findById(id)
    .select("name joinedCommunity rsvpedEvents")
    .populate({ path: "joinedCommunity", select: "name category" })
    .populate({
      path: "rsvpedEvents",
      select: "name city time mode",
      populate: {
        path: "communityId",
        select: "name",
      },
    })
    .lean();
  const communities = await Community.find({ host: id }).lean();
  dashboard.hostedCommunities = communities;

  return dashboard;
};

const toogleRSVP = async ({ user, eventId }) => {
  const isEventAlreadyRSVPED = user.rsvpedEvents.includes(eventId);

  if (isEventAlreadyRSVPED) {
    user.rsvpedEvents.pull(eventId);
  } else {
    user.rsvpedEvents.push(eventId);
  }

  await user.save();
};
export default {
  registerUser,
  loginUser,
  joinCommunity,
  makeHost,
  leaveCommunity,
  dashboard,
  hostDashboard,
  toogleRSVP,
};
