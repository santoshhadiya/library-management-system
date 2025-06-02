import React, { useContext, useState } from "react";
import "./Login.css";
import { userContext } from "../../Context/Context";
import Header from "../Nav/Header";
import RegisterPage from "../../Pages/RegisterPage/RegisterPage";
import axios from "axios";

const Login = () => {
  const { user, setUser, setIslogin, isregister, setIsregister } = useContext(userContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false); // 👈 loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // 👈 Start loading

    try {
      let response;
      const endpoint =
        user === "admin"
          ? "https://lms-backend-ri7r.onrender.com/admin/login"
          : "https://lms-backend-ri7r.onrender.com/user/login";

      response = await axios.post(endpoint, {
        email: formData.email,
        password: formData.password,
      });

      if (response.data === "notFound") {
        setErrMsg("Email or password not found");
        setIslogin(false);
      } else {
        setErrMsg("");
        setIslogin(true);
      }
    } catch (err) {
      setErrMsg("Something went wrong. Try again.");
      setIslogin(false);
    }

    setLoading(false); // 👈 End loading
  };

  return (
    <div className="main_body all_body">
      <Header loginPage={true} />
      {isregister ? (
        <div className="login-container">
          <div className="login-header">
            <button
              onClick={() => setUser("admin")}
              className={user === "admin" ? "login-option active" : "login-option"}
            >
              Admin
            </button>
            <button
              onClick={() => setUser("student")}
              className={user === "student" ? "login-option active" : "login-option"}
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

            {errMsg && <p className="errMsg">{errMsg}</p>}

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <a onClick={() => setIsregister(false)} className="register_here">
            Register here.
          </a>
        </div>
      ) : (
        <RegisterPage />
      )}
    </div>
  );
};

export default Login;
