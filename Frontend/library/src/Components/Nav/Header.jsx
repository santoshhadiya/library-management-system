import React, { useContext } from "react";
import { userContext } from "../../Context/Context";

const Header = ({ loginPage }) => {
  const { setIslogin, mode, setMode, user } = useContext(userContext);

  const handleLogin = () => {
    if (confirm("Do you want to Log Out")) {
      localStorage.removeItem("token"); // clear token
      setIslogin(false);
    }
  };

  const handleMode = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  return (
    <header className="header">
      <div className="logo">
        <i className="fas fa-book"></i>
        <h1>Online Library Management System</h1>
      </div>

      {loginPage ? (
        <></>
      ) : (
        <div className="nav-right">
          {user && <span className="user-email">{user.email}</span>}

          <button onClick={handleLogin} className="logout-btn">
            LOG OUT
          </button>
        </div>

      )}
    </header>
  );
};

export default Header;
