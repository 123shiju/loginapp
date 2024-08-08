import React from "react";
import "../../Components/style.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  return (
    <div className="background-container">
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
          <Link to="/signup" className="navbar-link">
            Sign Up
          </Link>
        </div>
      </div>
      <h1>ETLHive</h1>

      <div className="row">
        <div className="col-md-6">
          <div className="title">
            <p style={{ fontSize: "20px" }}>
              Explore diverse learning opportunities tailored to your needs
            </p>
          </div>
          <div className="midtitle">
            <h2 style={{ fontSize: "46px" }}>
              <u>30K Students Trained</u>
              <br /> You Could Be Next
            </h2>
          </div>
          <div className="subtitle">
            <h5 style={{ fontSize: "16px" }}>
              Join our vibrant community of learners and take the first step
              towards realizing your aspirations. Start your learning journey
              today and unlock a world of possibilities with ETLHIVE
            </h5>
          </div>
        </div>
        <div className="col-md-6">
          <img
            className="homeImg"
            src="https://etlhive.com/wp-content/uploads/2024/03/etlhive-home-1018x1024.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
