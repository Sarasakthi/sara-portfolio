import React from "react";
import { Routes, Route } from "react-router-dom";
import BackgroundParticles from "./components/BackgroundParticles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BackgroundParticles />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/AboutSara" element={<About />} />
          <Route path="/SaraProjects" element={<Projects />} />
          <Route path="/SaraSkills" element={<Skills />} />
          <Route path="/ContactSara" element={<Footer />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
