const mongoose = require("mongoose");

const returnSchema = new mongoose.Schema(
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

const RETURN_HIST = mongoose.model("returnhist", returnSchema);

module.exports = RETURN_HIST;