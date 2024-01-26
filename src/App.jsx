import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Footer from "./components/footer/footer";
import Services from "./components/services";
import Apointement from "./components/apointement";
import Testimonials from "./components/testimonials";
import Experience from "./components/experience";
import About from "./components/about";

import CoreMission from "./components/coreMission";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Apointement />
      <CoreMission />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
