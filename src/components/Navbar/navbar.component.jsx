import React, { Component } from "react";
import "./navbar.styles.scss";
import { Link } from "react-scroll";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container-fluid">
          <a href="index.html" className="navbar-brand">
            Shahadat Hossain Tahmid
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav ml-auto">
              <Link
                className="nav-item nav-link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Home
              </Link>
              <Link
                className="nav-item nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
              >
                About
              </Link>
              <Link
                className="nav-item nav-link"
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Experience
              </Link>
              <Link
                className="nav-item nav-link"
                activeClass="active"
                to="service"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Service
              </Link>
              <Link
                className="nav-item nav-link"
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Portfolio
              </Link>
              <Link
                className="nav-item nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Contact
              </Link>
              <Link
                className="nav-item nav-link"
                activeClass="active"
                to="blog"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
