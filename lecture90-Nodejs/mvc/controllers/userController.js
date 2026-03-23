import express from "express";
import userService from "../services/userService.js";
import mongoose from "mongoose";

const getAllUsers = async (req, res) => {
  try {
    const allusers = await userService.getAllusers();
    res.json({
      data: { message: "All users fetched successfull", data: allusers },
      err: null,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "failed to fetch all users",
        info: err,
      },
      data: null,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, number, job_title } = req.body;
    const newUser = await userService.createUser({
      name,
      email,
      number,
      job_title,
    });
    res.status(201).json({
      message: "user created Succesfull",
      data: newUser,
    });
  } catch (err) {
    console.log(err);
    res.status(406).json({
      error: {
        message: "Failed to create a user",
        info: err.message,
      },
      data: null,
    });
  }
};

const getParticularUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) throw new Error("not valid id");

    const user = await userService.getParticularUser(id);
    if(!user) throw new Error("no user found");
    
    res.status(200).json({
      data: user,
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "failed to fetch user",
        info: err.message,
      },
      data: null,
    });
  }
};

export default { getAllUsers, createUser, getParticularUser };
