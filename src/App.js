import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
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
      <ScrollToTopButton />
    </>
  );
}

export default App;
