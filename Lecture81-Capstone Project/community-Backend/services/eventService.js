import Event from "../models/Event.js";
import Community from "../models/Community.js";

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

export default { createEvent };
