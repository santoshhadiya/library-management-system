const express=require("express");
const {setIssueBooks,sendIssuedBooks,removeById}=require("../Controllers/issueController");

const router=express.Router();

router.post("/", setIssueBooks);
router.get("/", sendIssuedBooks);
router.post("/remove", removeById)

module.exports=router;