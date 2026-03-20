import eventService from "../services/eventService.js";

const createEvent = async (req, res) => {
  try {
    const { name, description, capacity, communityId, city, venue, time } =
      req.body;
    const hostId = req.user._id;

    await eventService.createEvent({
      name,
      description,
      communityId,
      city,
      venue,
      time,
      capacity,
      hostId,
    });
    res.json({
      data: {
        message: "successfully created an event",
      },
      err: null,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "failed to create an event",
        info: err.message,
      },
      data: null,
    });
  }
};

export default { createEvent };
