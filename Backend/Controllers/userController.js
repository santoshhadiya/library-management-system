/* const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../service/auth"); */
const USER = require("../Model/userModel");


async function handleUserSignup(req, res) {
  const { name, email, password,s_id,department } = req.body;

  const existingUser = await USER.findOne({email});
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const data=await USER.create({
    name,
    email,
    password,
    department,
    s_id
  });
  return res.json(data);
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await USER.findOne({ email, password });

  if (!user)
    return res.send("notFound");

 
 /*  const token=setUser(user);
  res.cookie("uid", token); */
  return res.json(user);
}



async function sendUserdata(req,res){
  const userData=await USER.find({});
  res.json(userData);
}

async function sendUserWithId(req,res){
  const {s_id}=req.body
  const userData=await USER.findOne({s_id});

  if (!userData) {
    return res.json({ message: "404" });
  }

  res.json(userData);
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
  sendUserdata,
  sendUserWithId
};