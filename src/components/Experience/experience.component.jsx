import React, { Component } from "react";
import "./experience.styles.scss";

class Experience extends Component {
  render() {
    return (
      <div className="experience" id="experience">
        <div className="container">
          <header
            className="section-header text-center wow zoomIn"
            data-wow-delay="0.1s"
          >
            <p>My Resume</p>
            <h2>Working Experience</h2>
          </header>
          <div className="timeline">
            <div
              className="timeline-item left wow slideInLeft"
              data-wow-delay="0.1s"
            >
              <div className="timeline-text">
                <div className="timeline-date">2021 - Present</div>
                <h2>Software Engineer</h2>
                <h4>Ebexsoft, Purana Paltan, Dhaka</h4>
                <p>
                  Ebexsoft is a Bangladeshi Software Company That provides
                  global resource solutions within IT. We are specializing in
                  Web Application Development, Management and Maintenance. We
                  are expert in PHP, HTML, HTML5, CSS, CSS3, JavaScript, jQuery,
                  Template Design, Logo Design, Wordpress, Joomla, Prestashop,
                  Codeigniter.
                </p>
              </div>
            </div>
            <div
              className="timeline-item right wow slideInRight"
              data-wow-delay="0.1s"
            >
              <div className="timeline-text">
                <div className="timeline-date">2020 - Present</div>
                <h2>Front-End Developer</h2>
                <h4>Esscre, Mohammadpur, Dhaka</h4>
                <p>
                  Esscre is a platform for artists to showcase their talents and
                  skills, help them receive exposure and potential clients too
                  with prices set by the artists themselves. So join in and
                  support your artistic dream with Esscre!
                </p>
              </div>
            </div>
            <div
              className="timeline-item left wow slideInLeft"
              data-wow-delay="0.1s"
            >
              <div className="timeline-text">
                <div className="timeline-date">2018 - 2020</div>
                <h2>Digital Marketing Manager</h2>
                <h4>Oasis Tours n Travels, Link Road, Dhaka</h4>
                <p>
                  The one and only travel agency you will ever need. We
                  specialize in contractual Visa's, Emergency Air Ambulance, Air
                  tickets and Passport Services.
                </p>
              </div>
            </div>
            <div
              className="timeline-item right wow slideInRight"
              data-wow-delay="0.1s"
            >
              <div className="timeline-text">
                <div className="timeline-date">2017 - 2019</div>
                <h2>Freelance Front-End Developer</h2>
                <h4>fiverr.com</h4>
                <p>
                  Fiverr's mission is to change how the world works together.
                  Fiverr connects businesses with freelancers offering digital
                  services in 300+ categories. The company provides a platform
                  for freelancers to offer services to customers worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
