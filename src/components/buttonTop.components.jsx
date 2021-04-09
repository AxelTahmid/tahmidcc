import React from "react";
import { animateScroll as scroll } from "react-scroll";

export default function Buttontop() {
  function scrollToTop() {
    scroll.scrollToTop();
  }
  return (
    <a href="#" class="btn back-to-top" onClick={scrollToTop}>
      <i class="fa fa-chevron-up"></i>
    </a>
  );
}
