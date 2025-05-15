import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import BackgroundParticles from "./components/BackgroundParticles";

function App() {
  return (
    <div className="App">
      <BackgroundParticles />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
