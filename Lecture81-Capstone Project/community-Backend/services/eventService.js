import Event from "../models/Event.js";
import Community from "../models/Community.js";
import { User } from "../models/User.js";
import mongoose from "mongoose";

const createEvent = async ({
  name,
  description,
  communityId,
  city,
  venue,
  capacity,
  time,
  hostId,
}) => {
  const inputErros = [];
  if (!name) inputErros.push("name is empty");
  if (!description) inputErros.push("description is empty");
  if (description?.length > 1000)
    inputErros.push("description length cannot be more than 1000");
  if (!communityId) inputErros.push("communityId is empty");
  if (!city) inputErros.push("city is empty");
  if (!venue) inputErros.push("venue is empty");
  if (!time) inputErros.push("time is empty");
  //not including capacity here

  if (inputErros.length) {
    throw new Error(inputErros.join(", "));
  }

  //checking if community id is valid or not
  const community = await Community.findById(communityId);
  if (!community) throw new Error("community id not found");

  //checking if this communit as host as hostId
  if (community.host.toString() != hostId.toString()) {
    throw new Error(`current user is not host of  ${community.name}`);
  }

  const eventTime = new Date(time);
  const todayTime = new Date();

  if (eventTime < todayTime) {
    throw new Error("time cannot be in the past");
  }

  const newEvent = await new Event({
    name,
    description,
    communityId,
    city,
    venue,
    time,
  });
  if (capacity) newEvent.capacity = capacity;
  newEvent.time = new Date(time);

  await newEvent.save();
};

const getAllEvents = async ({ keyword, city }) => {
  const filter = {
    time: { $gte: new Date() },
  };

  if (city) filter.city = { $regex: city, $options: "i" };

  /* keyword present in name or description and regex checks for any substring present and options tells about case is insensitive so it shoudl match both lowercase  */
  if (keyword) {
    filter.$or = [
      {
        name: { $regex: keyword, $options: "i" },
        description: { $regex: keyword, $options: "i" },
      },
    ];
  }

  return await Event.find(filter)
    .select("name description city venue communityId time -_id ")
    .populate("communityId", "name -_id ")
    .lean();
};

const getEventById = async (id) => {

  if(!mongoose.Types.ObjectId.isValid(id)) throw new Error("id is not a valid mongooseId");
  
  const event = await Event.findOne({ _id: id })
    .populate({
      path: "communityId",
      select: "name",
      populate: { path: "host", select: "name -_id" },
    })
    .lean();
  if (!event) throw new Error("No event found");

  const rsvpCount = await User.countDocuments({
    rsvpedEvents: id,
  });
  return {
    ...event,
    rsvpCount,
  };
};

export default { createEvent, getAllEvents, getEventById };
