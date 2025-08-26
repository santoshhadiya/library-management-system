const ISSUE = require("../Model/issueBookModel");
const BOOKS = require("../Model/booksModel");
const RETURN_HIST = require("../Model/returnHistModel")
const ADD_BOOK_HIST=require("../Model/bookAddHistModel")
const BORROW=require("../Model/borrowHistModel")

const addHistory=(req,res)=>{
   const {a_id,b_id,date}=req.body;

   const result=ADD_BOOK_HIST.create({
    a_id,
    b_id,
    date
   })
}

const send_Add_Hist_Data = async (req, res) => {
  try {
    const data = await ADD_BOOK_HIST.find(); // wait for data
    res.json(data); // send as JSON
  } catch (error) {
    console.error("Error fetching add history:", error);
    res.status(500).json({ message: "Failed to fetch history" });
  }
};

module.exports={
  addHistory,
  send_Add_Hist_Data
}