import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import BackgroundParticles from "./components/BackgroundParticles";

function App() {
  return (
    <>
      <ScrollToTop />
      <BackgroundParticles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/AboutSara" element={<About />} />
        <Route path="/SaraProjects" element={<Projects />} />
        <Route path="/SaraSkills" element={<Skills />} />
        <Route path="/ContactSara" element={<Contact />} />
        <Route
          path="*"
          element={
            <h2 style={{ color: "white", textAlign: "center" }}>
              404 - Page Not Found
            </h2>
          }
        />
      </Routes>
    </>
  );
}

export default App;
