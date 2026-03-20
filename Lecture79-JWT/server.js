import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import { users } from "./db.js";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

const name = process.env.name;
const PORT = 3000;

const verifyToken = (req, res, next) => {
  try {
    const authToken = req.headers.authorization?.split(" ")[1];
    console.log({ authToken });

    const payload = jwt.verify(authToken, process.env.JWT_SECRET); //valid token ->return payload invalid->return error

    const user = users.find((u) => u.email === payload.email);
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message || "internal server error",
      error: error,
    });
  }
};

app.get("/profile",verifyToken, (req, res) => {
  res.json({ user: req.user });
});

app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("email and password both are required");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      email,
      password: hashedPassword,
    };
    users.push(newUser);

    const token = jwt.sign(
      /* payload */
      {
        email,
      },
      /* secret */
      process.env.JWT_SECRET,
      /* expiry */
      {
        expiresIn: "1m", //7d 1h 3m
      },
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({
      message: error.message || "internal server error",
      error: error,
    });
  }
});

app.listen(PORT, () => {
  console.log("running on port", name, PORT);
});
