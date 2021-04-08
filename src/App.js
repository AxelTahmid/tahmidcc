import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar.component";
import Hero from "./components/Hero/hero.component";
import About from "./components/About/about.component";
import Experience from "./components/Experience/experience.component";
import Service from "./components/Services/services.component";
import Banner from "./components/Banner/banner.component";
import Portfolio from "./components/Portfolio/portfolio.component";
import Contact from "./components/Contact/contact.component";
import Blog from "./components/Blog/blog.component";
import Footer from "./components/Footer/footer.component";
import Lantern from "./assets/AnimatedLantern/lantern.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Service />
      <Banner />
      <Portfolio />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
