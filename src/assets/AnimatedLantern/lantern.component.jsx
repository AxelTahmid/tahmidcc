// Copyright (c) 2021 by Mahmoud (https://codepen.io/7oot/pen/byPKra)

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import React, { Component } from "react";
import "./lantern.styles.css";

class Lantern extends Component {
  state = {};
  render() {
    return (
      <div class="lantern-container">
        <div class="stage">
          <div class="scene">
            <div class="halo">
              <i></i>
              <span class="halo-star"></span>
              <span class="halo-star"></span>
              <span class="halo-star"></span>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div class="lantern">
              <div class="lantern-handle"></div>
              <div class="lantern-inner">
                <div class="lantern-chain"></div>
                <div class="lantern-head"></div>
                <div class="lantern-body">
                  <div class="lantern-spark"></div>
                  <div class="lantern-spark"></div>
                  <div class="lantern-spark"></div>
                  <div class="lantern-flame"></div>
                </div>
                <div class="lantern-base"></div>
              </div>
            </div>
            <div class="planets">
              <div class="planet"></div>
              <div class="planet"></div>
              <div class="planet"></div>
              <div class="planet"></div>
              <div class="planet"></div>
              <div class="planet"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lantern;
