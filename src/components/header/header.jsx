import React, { useContext } from "react";
import images from "../../image";
import "./header.css";
import { Link } from "react-router-dom";
import { UseContext } from "react";
import UserContext from "../../pages/UserContext";

export const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={images.logo} alt="" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/cards" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mart" className="nav-link">
                Mart
              </Link>
            </li>
          </ul>
        </div>
        <a className="navbar-brand" href="#">
          <h5>{user.name}</h5>
          <img src={images.Profile} alt="" className="ProfileImg" />
        </a>
      </div>
    </nav>
  );
};
