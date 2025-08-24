const { getUser } = require("../service/auth");

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // "Bearer <token>"

  if (!token) return res.status(403).json({ message: "Token required" });

  const user = getUser(token);
  if (!user) return res.status(403).json({ message: "Invalid or expired token" });

  req.user = user;
  next();
}

module.exports = verifyToken;
