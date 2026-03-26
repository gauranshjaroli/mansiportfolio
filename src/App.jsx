import React from "react";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ReelsSection from "./components/ReelsSection";
import InstagramGrid from "./components/InstagramGrid";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <About />

      {/* SERVICES */}
      <Services />

      {/* PORTFOLIO */}
      <Portfolio />

      {/* 🎥 REELS (NEW) */}
      <ReelsSection />

      {/* 📱 INSTAGRAM GRID (NEW) */}
      <InstagramGrid />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default App;