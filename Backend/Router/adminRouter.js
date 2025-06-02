const express = require("express");
const {handleAdminLogin,handleAdminSignup,sendAdmindata}=require("../Controllers/adminController")


const router = express.Router();


router.post("/login", handleAdminLogin);
router.post("/", handleAdminSignup);
router.get("/", sendAdmindata);

module.exports = router;