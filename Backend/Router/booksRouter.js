const express=require("express");
const {addBook,sendBooks,sendImg,quaManagment,getBookById,quaAdd,deleteBook, updateBook}=require("../Controllers/booksController");

const router=express.Router();

router.post("/",addBook);
router.get("/",sendBooks);
router.post("/img", sendImg);
router.post("/qua", quaManagment);
router.post("/getid", getBookById);
router.post("/quaplus", quaAdd);
router.post("/delete", deleteBook);
router.put("/update", updateBook);
module.exports=router;