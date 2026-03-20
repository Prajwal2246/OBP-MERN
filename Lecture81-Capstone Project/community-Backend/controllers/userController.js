/* coontroller ka kam hai sirf req,res ko handle krna */
import userService from "../services/userService.js";
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const token = await userService.registerUser({ name, email, password });

    res.cookie("token", token, {
      httpOnly: true,
      // secure:true //for production,
      sameSite: "lax", //strict,lax,none
      maxAge: 1 * 24 * 60 * 60 * 1000, //1d -> into milli seconds
    });

    res.json({
      data: "user registered succesfully",
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "failed to register user",
        info: err.message,
      },
    });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const {user,token} = await userService.loginUser({ email, password });
     res.cookie("token", token, {
      httpOnly: true,
      // secure:true //for production,
      sameSite: "lax", //strict,lax,none
      maxAge: 1 * 24 * 60 * 60 * 1000, //1d -> into milli seconds
    });

    res.json({
      data: "loggedin successfully",
      error: null,
      user,
    });
  } catch (error) {
    console.log(error);
    res.json({
      error: {
        message: "failed to login",
        info: error.message,
      },
      data: null,
    });
  }
};

const profile = async (req, res) => {
  try {
    const user = req.user;
    if (!user) throw new Error("user not found");

    return res.json({
      message: "user found",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

const joinCommunity = async (req, res) => {
  try {
    const { communityId } = req.query;

    if (!communityId) throw new Error("community id not valid");

    await userService.joinCommunity({
      userId: req.user._id,
      communityId: communityId,
    });

    return res.json({
      data: {
        message: "user added to community",
      },
      error: null,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      error: {
        messge: "community id not valid",
        info: error.message,
      },
      data: null,
    });
  }
};

const makeHost = async (req, res) => {
  try {
    const userId = req.user._id;
    await userService.makeHost(userId);
    return res.json({
      data: {
        message: "user changed to host",
      },
      error: null,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      error: {
        message: "failed to chnage member to host",
        info: err.message,
      },
      data: null,
    });
  }
};

export default { register, login, profile, joinCommunity, makeHost };
