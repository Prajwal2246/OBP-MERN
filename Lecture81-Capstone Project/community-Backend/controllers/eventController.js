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

const getAllEvents = async (req, res) => {
  try {
    const { keyword, city } = req.query;
    //call service
    const allevent = await eventService.getAllEvents({ keyword, city });

    res.json({
      data: {
        message:"successfully fetched the list of searched events",
        events:allevent
      },
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "unable to fetch all events",
        info: err.message,
      },
      data: null,
    });
  }
};

const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await eventService.getEventById(id);
    res.json({
      data: event,
      error: null,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: {
        message: "Unable to find event",
        info: err.message,
      },
      data: null,
    });
  }
};

export default { createEvent, getAllEvents, getEventById };
