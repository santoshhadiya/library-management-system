const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
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
    s_id:{
      type: Number,
     
    },
    department:{
      type: String,
     
    }
  },
  { timestamps: true }
);

const USER = mongoose.model("users", userSchema);

module.exports = USER;