import React, { Component } from "react";
import "./blog.styles.scss";
import blogA from "../../assets/img/blog-1.jpg";
import blogB from "../../assets/img/blog-2.jpg";

class Blog extends Component {
  render() {
    return (
      <div className="blog" id="blog">
        <div className="container">
          <div
            className="section-header text-center wow zoomIn"
            data-wow-delay="0.1s"
          >
            <p>From Blog</p>
            <h2>Articles &amp; Announcements</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="blog-item wow fadeInUp" data-wow-delay="0.1s">
                <div className="blog-img">
                  <img src={blogA} alt="Blog" />
                </div>
                <div className="blog-text">
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <div className="blog-meta">
                    <p>
                      <i className="far fa-user" />
                      Admin
                    </p>
                    <p>
                      <i className="far fa-list-alt" />
                      Web Design
                    </p>
                    <p>
                      <i className="far fa-calendar-alt" />
                      01-Jan-2045
                    </p>
                    <p>
                      <i className="far fa-comments" />5
                    </p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet elit. Nullam commodo mattis mi.
                    Nullam eu erat lectus. Proin viverra risus vitae luctus.
                    Proin ut ante, vitae sapien. Fusce sem ac erat rhoncus,
                    ornare mattis nisl massa et eros vitae pulvin
                  </p>
                  <a className="btn" href>
                    Read More <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item wow fadeInUp" data-wow-delay="0.3s">
                <div className="blog-img">
                  <img src={blogB} alt="Blog" />
                </div>
                <div className="blog-text">
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <div className="blog-meta">
                    <p>
                      <i className="far fa-user" />
                      Admin
                    </p>
                    <p>
                      <i className="far fa-list-alt" />
                      Apps Design
                    </p>
                    <p>
                      <i className="far fa-calendar-alt" />
                      01-Jan-2045
                    </p>
                    <p>
                      <i className="far fa-comments" />
                      10
                    </p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet elit. Nullam commodo mattis mi.
                    Nullam eu erat lectus. Proin viverra risus vitae luctus.
                    Proin ut ante, vitae sapien. Fusce sem ac erat rhoncus,
                    ornare mattis nisl massa et eros vitae pulvin
                  </p>
                  <a className="btn" href>
                    Read More <i className="fa fa-angle-right" />
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

export default Blog;
