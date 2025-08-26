const express=require("express");
const {setIssueBooks,sendIssuedBooks,removeById}=require("../Controllers/issueController");

const router=express.Router();

router.post("/", setIssueBooks);
router.post("/post", sendIssuedBooks);
router.post("/remove", removeById)

module.exports=router;