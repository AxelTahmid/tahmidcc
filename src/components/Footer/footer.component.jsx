import React, { Component } from "react";
import "./footer.styles.scss";

class Footer extends Component {
  render() {
    return (
      <div className="footer wow fadeIn" data-wow-delay="0.3s">
        <div className="container-fluid">
          <div className="container">
            <div className="footer-info">
              <h3>Address: 3/3 Nayapaltan, Dhaka, Bangladesh</h3>
              <div className="footer-menu">
                <p>+880 1316 687373</p>
                <p>tahmid.ebexsoft@gmail.com</p>
              </div>
              <div className="footer-social">
                <a href>
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://www.facebook.com/axel.tahmid">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href>
                  <i className="fab fa-youtube" />
                </a>
                <a href>
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://www.linkedin.com/in/mohammed-shahadat-hossain-338a8b179/">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="container copyright">
            <p>
              Beautification &amp; Developed By{" "}
              <a href> © Shahadat Hossain Tahmid</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
