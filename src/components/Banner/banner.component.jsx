import React, { Component } from "react";
import "./banner.styles.scss";

class Banner extends Component {
  render() {
    return (
      <div className="banner wow zoomIn" data-wow-delay="0.1s">
        <div className="container">
          <div className="section-header text-center">
            <p>% Discounted Price %</p>
            <h2>
              For <span>SME</span> Only
            </h2>
          </div>
          <div className="container banner-text">
            <p>
              I offer affordable websites for all SME (small to medium-size
              businesses). My services are all result driven, with a monthly
              price you can handle
            </p>
            <a href="#contact" className="btn">
              Contact for Price
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
