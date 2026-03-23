import { Commmunity } from "../model/Community.js";
const getAllCommunities = async () => {
  return await Commmunity.find();
};

const createCommunity = async ({ name, category, description }) => {
  const inputerrors = [];
  if (!name) inputerrors.push("name is required to create a community");
  if (!category)
    inputerrors.push(" category is required to create a community");
  if (!description)
    inputerrors.push("description is required to create a community");

  if (inputerrors.length) throw new Error(inputerrors.join(","));

  const existingcomunity = await Commmunity.findOne({ name });
  if (existingcomunity) throw new Error("community already exist");

  const newCommunity = await new Commmunity({
    name,
    category,
    description,
  });

  if (!newCommunity)
    throw new Error("community not created, something went wrong");

  await newCommunity.save();
  return newCommunity;
};

const deleteCommunity = async (id) => {
  const deletedComm = await Commmunity.findByIdAndDelete(id);

  if (!deletedComm) throw new Error("no community found to delete");

  return deletedComm;
};
export default { getAllCommunities, createCommunity, deleteCommunity };
