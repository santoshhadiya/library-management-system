const express=require("express");
const {addBook,sendBooks,sendImg,quaManagment,getBookById,quaAdd}=require("../Controllers/booksController");

const router=express.Router();

router.post("/",addBook);
router.get("/",sendBooks);
router.post("/img", sendImg);
router.post("/qua", quaManagment);
router.post("/getid", getBookById);
router.post("/quaplus", quaAdd)
module.exports=router;