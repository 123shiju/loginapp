import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import "../../Components/style.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./login.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    captchaToken: "",
  });

  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCaptchaChange = (token) => {
    setFormData({
      ...formData,
      captchaToken: token,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "https://loginapp-server.vercel.app/api/user/signin",
        formData,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      if (response.status === 200) {
        toast.success("Login successful", {
          onClose: () => navigate("/"),
        });
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="topnavbar">
        <div className="left-section">
          <a href="tel:Pune%20:%208055020011">
            <i className="fas fa-phone"></i> Pune : 8055020011
          </a>
          <a href="tel:Mumbai%20:%207838539559">
            <i className="fas fa-phone"></i> Mumbai : 7838539559
          </a>
        </div>
        <div className="right-section">
          <a href="https://maps.app.goo.gl/UmaA64VYyYFiNnfC9">
            <i className="fas fa-map-marker-alt"></i> Wakad
          </a>
          <a href="https://maps.app.goo.gl/EGNPbi2WwkLDbbgD6">
            <i className="fas fa-map-marker-alt"></i> Ravet
          </a>
          <a href="https://maps.app.goo.gl/Njp4BkctEThxKR4PA">
            <i className="fas fa-map-marker-alt"></i> Nal Stop
          </a>
          <a href="https://maps.app.goo.gl/5UfSb8ZA8RuxyugN9">
            <i className="fas fa-map-marker-alt"></i> Kharadi
          </a>
          <a href="https://maps.app.goo.gl/d9epg5vcrFAs3aPc6">
            <i className="fas fa-map-marker-alt"></i> Katraj
          </a>
          <a href="https://maps.app.goo.gl/YpcZU82xcvC5Bu9X9">
            <i className="fas fa-map-marker-alt"></i> Vashi
          </a>
          <a href="https://maps.app.goo.gl/jVU46vYG5a9bhhpN9">
            <i className="fas fa-map-marker-alt"></i> Thane
          </a>
        </div>
      </div>
      <div className="navbar">
        <a href="/">
          <img src="https://etlhive.com/wp-content/uploads/2024/02/logo_etlhive_purple_tagline.png" />
        </a>
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <div>
          {/* <Link to="/signin" className="navbar-link">
            Sign In
          </Link> */}
          <Link to="/signup" className="navbar-link">
            Sign Up
          </Link>
        </div>
      </div>
      <h1>ETLHive</h1>
      <div className="form-container">
        <div className="image-section ">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Registration"
            className="img"
          />
        </div>
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <h1 className="formTitle">Login</h1>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />

            <div style={{ position: "relative" }} className="toggle">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{ width: "70%" }}
              />
              <span onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <ReCAPTCHA
              sitekey="6Lcm3CAqAAAAAOAzVZ0VrZWOW4CmxEBG7a6K384c"
              onChange={handleCaptchaChange}
              style={{ display: "flex", justifyContent: "center" }}
            />
            <button type="submit" className="Btn">
              Login
            </button>
            <h4 style={{ fontSize: "16px" }}>
              Create account?<a href="/signUp"> Register here</a>
            </h4>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
