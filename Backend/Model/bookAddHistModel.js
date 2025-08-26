const mongoose = require("mongoose");

const AddBookSchema = new mongoose.Schema(
  {
    a_id: {
      type: String,
    },
    b_id: {
      type: String,
    },
    date:{
      type:Date,
    }
  }, 
  { timestamps: true }
);

const ADD_BOOK_HIST = mongoose.model("addbookhist", AddBookSchema);

module.exports = ADD_BOOK_HIST;