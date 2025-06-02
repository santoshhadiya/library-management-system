import React, { useContext, useState } from "react";
import "./Login.css";
import { userContext } from "../../Context/Context";
import Header from "../Nav/Header";
import { Link } from "react-router-dom";
import RegisterPage from "../../Pages/RegisterPage/RegisterPage";
import axios from "axios";

const Login = () => {
  const { user, setUser, setIslogin, isregister, setIsregister } = useContext(userContext);


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission refresh


    let respons="";
    if (user === "admin") {
        respons = await axios.post("http://localhost:8001/admin/login", {
        email: formData.email,
        password: formData.password,
      })
    } else {
        respons = await axios.post("http://localhost:8001/user/login", {
        email: formData.email,
        password: formData.password,
      })
    }
    if (respons.data == "notFound") {
      setErrMsg("email or password not found");
      setIslogin(false);
    }
    else {
      setErrMsg("");
      setIslogin(true); // Set admin as logged in
    }



  };

  return (
    <div className="main_body all_body">
      <Header loginPage={true} />
      {isregister ? (
        <>
          <div className="login-container">
            <div className="login-header">
              <button
                onClick={() => setUser("admin")}
                className={
                  user === "admin" ? "login-option active" : "login-option"
                }
              >
                Admin
              </button>
              <button
                onClick={() => setUser("student")}
                className={
                  user === "student" ? "login-option active" : "login-option"
                }
              >
                Student
              </button>
            </div>
            <form className="login-form" onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {
                errMsg && (
                  <p className="errMsg">{errMsg}</p>
                )
              }

              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
            <a onClick={() => setIsregister(false)} className="register_here">Register here.</a>
          </div>
        </>
      ) : (
        <>
          <RegisterPage />
        </>
      )}
    </div>
  );
};

export default Login;
