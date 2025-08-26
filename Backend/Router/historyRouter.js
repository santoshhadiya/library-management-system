const express=require("express");
const {addHistory, send_Add_Hist_Data}=require("../Controllers/historyController");

const router=express.Router();

router.post("/add",addHistory);
router.get("/get_add_hist", send_Add_Hist_Data)

module.exports=router;