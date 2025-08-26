const mongoose = require("mongoose");

const borrowSchema = new mongoose.Schema(
  {
    s_id: {
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

const BORROW = mongoose.model("borrow", borrowSchema);

module.exports = BORROW;