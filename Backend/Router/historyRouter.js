const express=require("express");
const {addHistory, send_Hist_Data}=require("../Controllers/historyController");

const router=express.Router();

router.post("/add",addHistory);
router.post("/borrow", addHistory)
router.post("/return", addHistory);
router.post("/delete", addHistory);
router.post("/update", addHistory);
router.get("/get_hist", send_Hist_Data);

module.exports=router;