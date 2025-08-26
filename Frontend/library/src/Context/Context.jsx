import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const userContext = createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const [islogin, setIslogin] = useState(false);
  const [isregister, setIsregister] = useState(true);
  const [mode, setMode] = useState("light");
/* 
  const BackendURL = "https://lms-backend-ri7r.onrender.com";
  const MongoURL = "https://lms-backend-ri7r.onrender.com/book"; */

  const BackendURL = "http://localhost:5000";
  const MongoURL = "http://localhost:5000/book";

  //  Check token on app load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);

        // Check expiry
        if (decoded.exp * 1000 > Date.now()) {
          setUser(decoded);   // store decoded user info
          setIslogin(true);
        } else {
          // Token expired
          localStorage.removeItem("token");
          setIslogin(false);
        }
      } catch (err) {
        console.error("Invalid token:", err);
        localStorage.removeItem("token");
        setIslogin(false);
      }
    }
  }, []);




  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        islogin,
        setIslogin,
        isregister,
        setIsregister,
        MongoURL,
        mode,
        setMode,
        BackendURL,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default Context;
