import React, { Component } from "react";
import "./loader.styles.scss";

class Loader extends Component {
  render() {
    return (
      <div id="loader" class="show">
        <div class="loader"></div>
      </div>
    );
  }
}

export default Loader;
