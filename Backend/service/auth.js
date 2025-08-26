const jwt = require("jsonwebtoken");

const JWT_SECRET = "superSecretKey"; 

function setUser(user) {
  // payload: only safe info (no password!)
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.a_id ? "admin" : "user",
      name:user.name,
      department:user.department,
    },
    JWT_SECRET,
    { expiresIn: "1h" }
  );
}

function getUser(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

module.exports = { setUser, getUser };
