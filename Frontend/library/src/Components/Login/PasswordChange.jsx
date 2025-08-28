import React, { useContext, useState } from "react";
import "./Login.css"; // reuse same styling
import { userContext } from "../../Context/Context";
import Header from "../Nav/Header";
import { Nav } from "../Nav/Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PasswordChange = () => {
  const { user, BackendURL,gifImg } = useContext(userContext);

  const [formData, setFormData] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate()
  // handle password change
  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrMsg("");
    setSuccessMsg("");

    if (formData.newPassword !== formData.confirmPassword) {
      setErrMsg("New passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const endpoint =
        user.role == "admin"
          ? `${BackendURL}/admin/change-password`
          : `${BackendURL}/user/change-password`;

      const response = await axios.post(endpoint, {
        email: formData.email,
        oldPassword: formData.oldPassword,
        newPassword: formData.newPassword,
      });

      if (response) {
        alert("Password changed successfully!");
        setFormData({
          email: "",
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        navigate("/")
      } else {
        setErrMsg(response.data.message || "Password change failed.");
      }
    } catch (err) {
      setErrMsg("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="main_body all_body">
      <Nav />

      <div className="login-container">
        <div className="login-header">
          <button
            onClick={() => setErrMsg("")}
            className="login-option active"
          >
            Change Password
          </button>
        </div>

        <form className="login-form" onSubmit={handlePasswordChange}>
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
            <label htmlFor="oldPassword">Old Password</label>
            <input
              type="password"
              id="oldPassword"
              placeholder="Enter old password"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              placeholder="Enter new password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm new password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {errMsg && <p className="errMsg" style={{ backgroundColor: "green" }}>{errMsg}</p>}
          {successMsg && <p className="successMsg" style={{ backgroundColor: "green" }}>{successMsg}</p>}




          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img
                  src={gifImg}
                  alt="loading..."
                  className="loader-gif"
                  style={{
                    width: "25px",
                    position: "relative",

                  }}
                />
              </div>
            ) : (
              "Change Password"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordChange;
