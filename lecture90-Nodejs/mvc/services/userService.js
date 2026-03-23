import { User } from "../model/user.js";

const getAllusers = async () => {
  return await User.find();
};

const createUser = async ({ name, email, number, job_title }) => {
  const errorInput = [];
  if (!name) errorInput.push("name is required");
  if (!email) errorInput.push("email is required");
  if (!number) errorInput.push("number is required");
  if (!job_title) errorInput.push("job_title is required");

  if (errorInput.length) throw new Error(errorInput.join(","));

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("user with email already exist");
  }

  const newUser = new User({
    name,
    email,
    number,
    job_title,
  });
  await newUser.save();
  return newUser;
};

const getParticularUser = async (id) => {
  return await User.findById(id);
};
export default { getAllusers, createUser, getParticularUser };
