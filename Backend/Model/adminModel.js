const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      
    },
    email: {
      type: String,
      
      unique: true,
    },
    password: {
      type: String,
      
    },
    a_id:{
      type: Number,
     
    },
    department:{
      type: String,
    }
  },
  { timestamps: true }
);

const ADMIN = mongoose.model("admin", adminSchema);

module.exports = ADMIN;