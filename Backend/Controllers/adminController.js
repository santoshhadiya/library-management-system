const ADMIN = require("../Model/adminModel");
const { setUser } = require("../service/auth");

async function handleAdminLogin(req, res) {
  const { email, password } = req.body;
  let admin = await ADMIN.findOne({ email, password });

  if (!admin) return res.json("notFound");

   console.log(admin);
  const token = setUser(admin);

/*   admin = await ADMIN.find({ email, password });
  */

  return res.json({ message: "Login successful", token });
}

async function handleAdminSignup(req, res) {
  const { name, email, password, a_id, department } = req.body;
  const existingUser = await ADMIN.findOne({ email });
  if (existingUser)
    return res.status(400).json({ message: "User already exists" });

  const data = await ADMIN.create({ name, email, password, department, a_id });
  return res.json(data);
}

async function sendAdmindata(req, res) {
  const userData = await ADMIN.find({});
  res.json(userData);
}

module.exports = { handleAdminLogin, handleAdminSignup, sendAdmindata };
