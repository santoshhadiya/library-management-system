const ADMIN= require("../Model/adminModel");


async function handleAdminLogin(req, res) {
  const { email, password } = req.body;
  const admin = await ADMIN.findOne({ email, password });

  if (!admin)
    return res.send("notFound");

 
 /*  const token=setUser(user);
  res.cookie("uid", token); */
  return res.json(admin);
}

async function handleAdminSignup(req, res) {
  const { name, email, password,a_id,department } = req.body;

  const existingUser = await ADMIN.findOne({email});
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const data=await ADMIN.create({
    name,
    email,
    password,
    department,
    a_id
  });
  return res.json(data);
}

async function sendAdmindata(req,res){
  const userData=await ADMIN.find({});
  res.json(userData);
}


module.exports={
  handleAdminLogin,
  handleAdminSignup,
  sendAdmindata,
}