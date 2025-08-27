const express=require("express");
const {setIssueBooks,sendIssuedBooks,removeById,sendIssuedBooksAdmin}=require("../Controllers/issueController");

const router=express.Router();

router.post("/", setIssueBooks);
router.post("/post", sendIssuedBooks);
router.post("/post-admin", sendIssuedBooksAdmin);
router.post("/remove", removeById)

module.exports=router;