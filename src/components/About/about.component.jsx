import React, { Component } from "react";
import "./about.styles.scss";
import ProgressBar from "@ramonak/react-progress-bar";
import aboutImg from "../../assets/img/about.jpg";

class About extends Component {
  render() {
    return (
      <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src={aboutImg} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-header text-left">
                  <p>Summary</p>
                  <h2>About Me</h2>
                </div>
                <div className="about-text">
                  <p>
                    I like to think of myself as a dreamer and innovator. I am
                    extremely passionate about making something come to life
                    through coding and tinkering. I am always learning and
                    developing myself to gain more experience.
                  </p>
                </div>
                <div className="skills">
                  <div className="skill-name">
                    <p>Git</p>
                    <p>80%</p>
                  </div>
                  <ProgressBar
                    completed={80}
                    bgColor="#545aa7"
                    height="10px"
                    borderRadius="10px"
                    isLabelVisible={false}
                    labelColor="#e80909"
                    transitionDuration="2s"
                  />
                  <div className="skill-name">
                    <p>React</p>
                    <p>80%</p>
                  </div>
                  <ProgressBar
                    completed={80}
                    bgColor="#545aa7"
                    height="10px"
                    borderRadius="10px"
                    isLabelVisible={false}
                    labelColor="#e80909"
                    transitionDuration="3s"
                  />
                  <div className="skill-name">
                    <p>Codeigniter</p>
                    <p>80%</p>
                  </div>
                  <ProgressBar
                    completed={80}
                    bgColor="#545aa7"
                    height="10px"
                    borderRadius="10px"
                    isLabelVisible={false}
                    transitionDuration="2s"
                  />
                  <div className="skill-name">
                    <p>Arduino</p>
                    <p>90%</p>
                  </div>
                  <ProgressBar
                    completed={85}
                    bgColor="#545aa7"
                    height="10px"
                    borderRadius="10px"
                    isLabelVisible={false}
                    transitionDuration="2s"
                  />
                  <div className="skill-name">
                    <p>Photoshop</p>
                    <p>70%</p>
                  </div>
                  <ProgressBar
                    completed={75}
                    bgColor="#545aa7"
                    height="10px"
                    borderRadius="10px"
                    isLabelVisible={false}
                    transitionDuration="2s"
                  />
                </div>
                <a className="btn" href="#home">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
