import React, { Component } from "react";
import "./services.styles.scss";

class Services extends Component {
  render() {
    return (
      <div className="service" id="service">
        <div className="container">
          <div
            className="section-header text-center wow zoomIn"
            data-wow-delay="0.1s"
          >
            <p>What I do</p>
            <h2>My Services</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
              <div className="service-item">
                <div className="service-icon">
                  <i className="fa fa-laptop-code" />
                </div>
                <div className="service-text">
                  <h3>Web Development</h3>
                  <p>
                    I will develop a website that’s customized to your needs,
                    mobile-friendly, SEO optimized and secure (HTTPS)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="service-item">
                <div className="service-icon">
                  {/* <i class="fa fa-laptop"></i> */}
                  <i className="fas fa-brain" />
                </div>
                <div className="service-text">
                  <h3>UX/UI &amp; Design</h3>
                  <p>
                    I will Design a great experience for your users on the web
                    to get more engaged customers
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="service-item">
                <div className="service-icon">
                  <i className="fab fa-android" />
                </div>
                <div className="service-text">
                  <h3>App Development</h3>
                  <p>
                    I will develop a professional mobile app customized to your
                    needs with beautiful design
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
              <div className="service-item">
                <div className="service-icon">
                  {/* <i class="fab fa-apple"></i> */}
                  <i className="fas fa-ad " />
                </div>
                <div className="service-text">
                  <h3>Digital Marketing</h3>
                  <p>
                    I will improve your digital footprint and social outreach
                    through social media marketing and SEO optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
