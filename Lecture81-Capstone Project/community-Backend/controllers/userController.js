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
    const { user, token } = await userService.loginUser({ email, password });
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

const getCurrUser = async (req, res) => {
  // const token = req.cookies.token;
  // if (!token) throw new Error("no token found");

  try {
    if (!req.user)
      throw new Error("user not found from token,please login/signup again");

    res.json({
      data: {
        message: "user found",
        user: req.user,
      },
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "no user found",
        info: err.message,
      },
      data: null,
    });
  }
};

const leaveCommunity = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id: user_id } = req.user;
    await userService.leaveCommunity({ id, user_id });
    res.json({
      data: { message: "user left the community successfully" },
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "failed to remove user from this community",
        info: err.message,
      },
      data: null,
    });
  }
};

const dashboard = async (req, res) => {
  try {
    const { _id: id } = req.user;
    const dashboard = await userService.dashboard(id);
    res.json({
      data: {
        message: "successfully fetched the member dashboard",
        dashboard,
      },
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "failed to fetch the member dashboard",
        info: err.message,
      },
      data: null,
    });
  }
};

const hostDashboard = async (req, res) => {
  try {
    const { _id: id } = req.user;
    const dashboard = await userService.hostDashboard(id);
    res.json({
      data: {
        message: "fetched host dashboard successfully",
        dashboard,
      },
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "unable to fetch hostDashboard",
        info: err.message,
      },
    });
  }
};

const toogleRSVP = async (req, res) => {
  try {
    const user = req.user;
    const { eventId } = req.query;

    await userService.toogleRSVP({ user, eventId });
    res.json({
      data: {
        messsage: "rsvped event toggled succesfully",
      },
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "cannt toggle rsvp event",
        info: err.message,
      },
      data: null,
    });
  }
};
export default {
  register,
  login,
  profile,
  joinCommunity,
  makeHost,
  getCurrUser,
  leaveCommunity,
  dashboard,
  hostDashboard,
  toogleRSVP,
};
