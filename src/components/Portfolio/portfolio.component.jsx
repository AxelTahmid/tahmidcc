import React, { Component } from "react";
import "./portfolio.styles.scss";
import portA from "../../assets/img/portfolio-2.jpg";
import portB from "../../assets/img/portfolio-3.jpg";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio" id="portfolio">
        <div className="container">
          <div
            className="section-header text-center wow zoomIn"
            data-wow-delay="0.1s"
          >
            <p>My Portfolio</p>
            <h2>Projects I Have Worked On</h2>
          </div>
          <div className="row">
            <div className="col-12">
              <ul id="portfolio-filter">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-1">Web Development</li>
                <li data-filter=".filter-2">Mobile Apps</li>
                <li data-filter=".filter-3">Digital Marketing</li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            <div
              className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp"
              data-wow-delay="0.0s"
            >
              <div className="portfolio-wrap">
                <div className="portfolio-img">
                  <img
                    src="http://esscre.com:3000/static/media/Logo-cropped.8db55ea0.jpg"
                    alt=""
                  />
                </div>
                <div className="portfolio-text">
                  <h3>Esscre (ecommerce)</h3>
                  <a
                    className="btn"
                    href="http://esscre.com:3000"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="portfolio-wrap">
                <div className="portfolio-img">
                  <img src={portA} alt="" />
                </div>
                <div className="portfolio-text">
                  <h3>UralXpress (Delivery)</h3>
                  <a
                    className="btn"
                    href="http://ebexsoft.com/uralxpressapps/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="portfolio-wrap">
                <div className="portfolio-img">
                  <img src={portB} alt="" />
                </div>
                <div className="portfolio-text">
                  <h3>Social Media Sites</h3>
                  <a className="btn" href="img/portfolio-3.jpg">
                    +
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
