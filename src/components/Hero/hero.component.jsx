import React, { Component } from "react";
import "./hero.styles.scss";
import Typical from "react-typical";
import heroimg from "../../assets/img/Hero.png";
import Lanterngalaxy from "../../assets/AnimatedLantern/lantern.component";

class Hero extends Component {
  render() {
    return (
      <div className="hero" id="home">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6">
              <div className="hero-content">
                <div className="hero-text">
                  <p>Hello, I am</p>
                  <h1>Tahmid</h1>
                  <span></span>
                  <div className="text-animate">
                    <Typical
                      steps={[
                        "Web Designer",
                        1500,
                        "Web Developer",
                        1500,
                        "App Developer",
                        1500,
                        "Digital Marketer",
                        1500,
                      ]}
                      loop={Infinity}
                      wrapper="h2"
                    />
                  </div>
                </div>
                <div className="hero-btn">
                  <a href="#contact" className="btn">
                    Hire Me
                  </a>
                  <a href="#contact" className="btn">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 d-none d-md-block">
              <Lanterngalaxy />
              {/* <div className="hero-image">
                <img src={heroimg} alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
