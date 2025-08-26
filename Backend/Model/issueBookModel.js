const mongoose = require("mongoose");

const booksSchema = mongoose.Schema({
  name: {
    type: String,
  },
  s_id: {
    type: String,
  },
  email: {
    type: String,
  },
  department: {
    type: String,
  },
  b_id: {
    type: Number,
  },
  issue_date: {
    type: Date,
  },
  due_date:{
    type:Date,
  },
  returnBookId:{
    type:String,
  }
});

const ISSUE = mongoose.model("issue", booksSchema);
module.exports = ISSUE;
