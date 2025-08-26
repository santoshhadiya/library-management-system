const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const BOOKS = require("./Model/booksModel");
const booksrouter =require("./Router/booksRouter");
const userrouter=require("./Router/userRouter");
const issueBookRouter=require("./Router/issueBookRouter");
const adminRouter=require("./Router/adminRouter");
const historyRouter=require("./Router/historyRouter")

const PORT= process.env.PORT || 5000;
const app = express();
app.use(cors())
app.use(express.json());


//connection
mongoose
  .connect("mongodb+srv://santoshhadiya033:Santosh%40123@cluster0.tgrgtfm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

 app.use("/book", booksrouter);
 app.use("/user", userrouter);
 app.use("/issue", issueBookRouter);
 app.use("/admin", adminRouter);
 app.use("/hist", historyRouter)
app.listen(PORT, () => {
  console.log("Runnig At port:" + PORT);
});
