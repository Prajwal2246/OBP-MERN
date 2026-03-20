export const isHostMiddleware = (req, res, next) => {
  try {
    if (req.user.role !== "host") {
      throw new error("logged in user not a host");
    }

    next();
  } catch (err) {
    return res.json({
      error: "failed : only host can  acccess ",
      info: err.message,
    });
  }
};
