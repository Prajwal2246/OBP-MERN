import communityService from "../services/communityService.js";

const getCommunity = async (req, res) => {
  try {
    //service ko call
    const all_communities = await communityService.getAllCommunities;
    res.status(200).json({
      message: "community found",
      data: all_communities,
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: {
        message: "unable to fetch communities",
        info: err.message,
      },
      data: null,
    });
  }
};

/* create new community */
const createCommunity = async (req, res) => {
  try {
    const { name, description, category } = req.body;
    const newCommunity = await communityService.createCommunity({
      name,
      category,
      description,
    });
    res.status(200).json({
      message: "new community created",
      data: newCommunity,
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: {
        message: "unable to create community",
        info: err.message,
      },
      data: null,
    });
  }
};

/* delete specific community */
const deleteCommunity = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedComm = await communityService.deleteCommunity(id);
    res.status(200).json({
      message: "community deleted",
      data: deletedComm,
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: {
        message: "unable to delete community",
        info: err.message,
      },
      data: null,
    });
  }
};

/*  */
export default { getCommunity, createCommunity, deleteCommunity };
