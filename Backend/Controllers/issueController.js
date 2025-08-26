const ISSUE = require("../Model/issueBookModel");
const BOOKS = require("../Model/booksModel");

const setIssueBooks = async(req, res) => {
  const {name,s_id,email,department,b_id,issue_date,due_date,returnBookId} = req.body;
const bookData=await BOOKS.findOne({b_id:b_id});
  if(bookData){
    const data =await ISSUE.create({
      name,
      s_id,
      email,
      department,
      b_id,
      issue_date, 
      due_date,
      returnBookId
    });
    res.json(data);
  }
  else{
    res.json({val:"null"});
  }
  
};

const sendIssuedBooks=async(req,res)=>{
  const {s_id}=req.body;
    const data=await ISSUE.find({s_id});
    
    res.json(data);
    
}

const removeById=async(req,res)=>{
  const {returnBookId}=req.body;
  const data=await ISSUE.findOneAndDelete({returnBookId:returnBookId});
  res.json({val:"ok"});
}

module.exports={
  setIssueBooks,
  sendIssuedBooks,
  removeById,
}