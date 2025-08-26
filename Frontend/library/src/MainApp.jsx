import { useContext, useEffect, useState } from "react";
import { userContext } from "./Context/Context";
import Login from "./Components/Login/Login";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BooksListed from "./Pages/BooksListed/BooksListed";
import IssueBook from "./Pages/IssueBook/IssueBook";
import RegisteredUsers from "./Pages/RegisteredUsers/RegisteredUsers";
import AuthListed from "./Pages/AuthListed/AuthListed";
import RetriveIssuedBooks from "./Pages/RetriveIssuedBooks/RetriveIssuedBooks";
import AddBook from "./Pages/AddBook/AddBook";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import BooksReturn from "./Pages/BooksReturn/BooksReturn";
import BookInfo from "./Pages/BookInfo/BookInfo";


const MainApp = () => {
  const {islogin} = useContext(userContext);
 

  return (
    <>
      {islogin ? (<BrowserRouter>
        <Routes>
          <Route path="/books" element={<BooksListed />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/issue" element={<IssueBook />}/>
          <Route path="/regusers" element={<RegisteredUsers />}/>
          <Route path="/authlisted" element={<AuthListed />}/>
          <Route path="/issuedbooks" element={<RetriveIssuedBooks/>}/>
          <Route path="/addbook" element={<AddBook/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/bookinfo" element={<BookInfo/>}/>
        </Routes>
      </BrowserRouter>) : <Login />}


      {/* <BooksReturn/> */}
   
    </>
  );
};

export default MainApp;
