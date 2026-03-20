import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log({ token });
    if (!token) throw new Error("token not found in cookies");

    const { email } = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid payload");

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.json({
      error: {
        message: "failed to verify token",
        info: error.message,
      },
      data: null,
    });
  }
};

export default authMiddleware;
