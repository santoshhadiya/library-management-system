import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';


export const userContext = createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState("admin");
  const [islogin, setIslogin] = useState(false);
  const [isregister,setIsregister]=useState(true);
  const [mode,setMode]=useState("light");
 const MongoURL="https://lms-backend-ri7r.onrender.com/book";


  return (
    <userContext.Provider
      value={{ user, setUser, islogin, setIslogin,isregister,setIsregister,MongoURL,mode,setMode}}
    >
      {children}
    </userContext.Provider>
  );
};

export default Context;
