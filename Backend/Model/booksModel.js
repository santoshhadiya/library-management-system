const mongoose = require("mongoose");

//schema

const booksSchema = mongoose.Schema({
  b_name: {
    type: String,
  },
  b_img: {
    type: String,
  },
  b_id: {
    type: Number,
    unique: true,
  },
  b_desc: {
    type: String,
  },
  b_quantity: {
    type: Number,
  },
  b_author: {
    type: String,
  },
  b_price:{
    type:Number,
  }
});

const BOOKS = mongoose.model("books", booksSchema);
module.exports = BOOKS;
