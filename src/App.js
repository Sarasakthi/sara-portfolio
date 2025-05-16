import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BackgroundParticles from "./components/BackgroundParticles";

function App() {
  return (
    <>
      <ScrollToTop />
      <BackgroundParticles />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
      </main>
      <Footer />
    </>
  );
}

export default App;
