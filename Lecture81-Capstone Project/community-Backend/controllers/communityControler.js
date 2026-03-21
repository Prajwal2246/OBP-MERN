import communityService from "../services/communityService.js";

const createCommunity = async (req, res) => {
  try {
    const { name, description, category } = req.body;
    const host = req.user._id;
    await communityService.createCommunity({
      name,
      description,
      host,
      category,
    });

    // console.log("Inside controller");

    res.json({
      data: {
        message: "community created succesfully",
      },
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "fialed to create community",
        info: err.message,
      },
      data: null,
    });
  }
};

const getAllCommunities = async (req, res) => {
  try {
    //call the service
    const communities = await communityService.getAllCommunities();

    res.json({
      data: {
        communities,
      },
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "failed to get all communitites",
        info: err.message,
      },
      data: null,
    });
  }
};

const getSpecificCommunity = async (req, res) => {
  try {
    //service call
    const { id } = req.query;

    const community = await communityService.getSpecificCommunity(id);
    res.json({
      data: {
        message: "community details have been found",
        community,
      },
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "invalid community Id",
        info: err.message,
      },
      data: null,
    });
  }
};

const getCommunityWithMembers = async (req, res) => {
  try {
    //call service
    const { id } = req.query;
    const allmembers = await communityService.getCommunityWithMembers(id);
    res.json({
      data: {
        message: "community with all members fetched succesfully ",
        allmembers,
      },
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "unable to find members",
        info: err.message,
      },
      data: null,
    });
  }
};

export default {
  createCommunity,
  getAllCommunities,
  getSpecificCommunity,
  getCommunityWithMembers,
};
