const mongoose = require("mongoose");

const HistSchema = new mongoose.Schema(
  {
    entity_id: {
      type: String,
      required: true,
    },
    entity_type: {
      type: String,
      enum: ["admin", "user"], 
      required: true,
    },
    book_id: {
      type: String,
      required: true,
    },
    name:{
      type:String,
    },
    date: {
      type: Date,
      default: Date.now, 
    },
    task: {
      type: String,
      enum: ["add", "update", "delete", "borrow", "return"], // only these actions allowed
      required: true,
    },
  },
  { timestamps: true }
);

const BOOK_HIST = mongoose.model("bookhist", HistSchema);

module.exports = BOOK_HIST;
