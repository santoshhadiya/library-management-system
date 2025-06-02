import React, { useContext, useState } from "react";
import "./RegisterPage.css";
import { userContext } from "../../Context/Context";
import axios from "axios";


const RegisterPage = () => {
  const { setIsregister,mode } = useContext(userContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    s_id: "",
    department: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let respons = "";
    if (!isAdmin) {
      respons = await axios.post("https://lms-backend-ri7r.onrender.com/user", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        s_id: formData.s_id,
        department: formData.department,
      })
    } else {
      respons = await axios.post("https://lms-backend-ri7r.onrender.com/admin", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        a_id: formData.s_id,
        department: formData.department,
      })
    }

    setIsregister(true);
  };

  const handleAdmin = () => {
    setIsAdmin((prev) => !prev);
  }
  return (
    <div className={mode=="light"?"main_body":"dark_mode"}>
      <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="adminBtns">
              <button
                onClick={() => setIsAdmin(true)}
                className={
                  isAdmin ? "underline" : "normal"
                }
              >
                Admin 
              </button>
              <button
                onClick={() => setIsAdmin(false)}
                className={
                  isAdmin  ? "normal" : "underline"
                }
              >
                Student
              </button>
        </div>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="s_id">{isAdmin?"Admin ID":"Student ID"}</label>
          <input
            type="text"
            id="s_id"
            name="s_id"
            value={formData.s_id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">department</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
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
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        
         
        
        <button type="submit" className="register-button">Register</button>
      </form>

    </div>
    </div>
  );
};

export default RegisterPage;
