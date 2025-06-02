import React, { useContext } from "react";
import { userContext } from "../../Context/Context";
import { Link } from "react-router-dom";

const Header = ({ loginPage }) => {
  const { setIslogin,mode,setMode } = useContext(userContext);
  const handleLogin = () => {
    confirm("Do you want to Log Out") ? setIslogin(false) : "";
  };

  const handleMode=()=>{
    mode=="light"?setMode("dark"):setMode("light")
  }
  return (
    <header>
      <div className="logo">
        <i className="fas fa-book"></i>
        <h1>Online Library Management System</h1>
      </div>
      {loginPage ? (
        <>
        
        </>
      ) : (
        
          <button onClick={handleLogin} className="logout-btn">
            LOG ME OUT
          </button>
       
      )}
    </header>
  );
};

export default Header;
