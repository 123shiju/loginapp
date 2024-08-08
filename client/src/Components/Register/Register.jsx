import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../Components/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(true);

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

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, username, password } = formData;

    if (!name || !username || !password) {
      toast.error("All fields are required");
      return;
    }

    if (!validatePassword(password)) {
      toast.error(
        "Password must be at least 7 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
      return;
    }
    try {
      const response = await axios.post(
        "https://loginapp-server.vercel.app/api/user/signUp",
        formData
      );
      if (response.status === 200) {
        toast.success("User registered successfully");
        setFormData({
          name: "",
          username: "",
          password: "",
        });
        localStorage.setItem("token", response.data.token);
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Register failed. Please try again.");
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
          <Link to="/signin" className="navbar-link">
            Sign In
          </Link>
          {/* <Link to="/signup" className="navbar-link">
            Sign Up
          </Link> */}
        </div>
      </div>
      <h1>ETLHive</h1>

      <div className="form-container">
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <h1 className="formTitle">Registration </h1>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              required
              style={{ marginBottom: "18px" }}
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              required
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
            <button className="Btn" type="submit">
              Sign Up
            </button>
            <h4 style={{ fontSize: "16px" }}>
              Have already an account?<a href="/signIn"> Login here</a>
            </h4>
          </form>
        </div>
        <div className="image-section ">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
            alt="Registration"
            className="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
