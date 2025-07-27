import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Project from "./components/Project";
import Contact from "./components/contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Project />
      <Contact />
    </>
  );
};

export default App;
