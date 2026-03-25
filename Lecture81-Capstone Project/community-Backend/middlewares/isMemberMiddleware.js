export const isMemberMiddleware = (req, res, next) => {
  try {
    if (!req.user || req.user.role !== "member") {
      return res.status(403).json({
        error: {
          message: "Access denied",
          info: "User is not a member",
        },
      });
    }

    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: {
        message: "Server error",
        info: err.message,
      },
    });
  }
};
