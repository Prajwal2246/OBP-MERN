import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken) return res.status(400).json({ message: "No token" });
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};

export default verifyToken;
