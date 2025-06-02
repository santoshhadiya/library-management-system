const express = require("express");
const { handleUserSignup, handleUserLogin,sendUserdata ,sendUserWithId} = require("../Controllers/userController");

const router = express.Router();

router.post("/", handleUserSignup);
router.post("/login", handleUserLogin);
router.get("/", sendUserdata);
router.post("/userid", sendUserWithId);
module.exports = router;