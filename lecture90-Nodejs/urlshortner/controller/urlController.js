import { nanoid } from "nanoid";
import { URL } from "../model/Url.js";

const generateShortUrl = async (req, res) => {
  const { url } = req.body;
  if (!url)
    return res.status(400).json({ err: { message: "url is required" } });
  const shortId = nanoid(8);
  await URL.create({
    shortId,
    redirectId: url,
    visitHistory: [],
  });

  return res.json({ id: shortId });
};

const redirect = async (req, res) => {
  try {
    const { shortId } = req.params;

    const entry = await URL.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: { timestamp: new Date() },
        },
      },
    );

    if (!entry) {
      return res.status(404).send("Short URL not found");
    }

    res.redirect(entry.redirectId);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: {
        message: "unable to redirect to shorturl",
        info: err.message,
      },
      data: null,
    });
  }
};

export default { generateShortUrl, redirect };
