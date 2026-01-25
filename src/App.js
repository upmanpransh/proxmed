import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Details from "./components/Details";
import Services from "./components/Services";
import FeatureShowcase from "./components/FeatureShowcase";
import VisionAndContact from "./components/VisionAndContact";
import Footer from "./components/Footer";
import FloatingBackground from "./components/FloatingBackground";
import CustomCursor from "./components/CustomCursor";
import Marquee from "./components/Marquee";
import BackgroundVideo from "./components/BackgroundVideo";

function App() {
  return (
    <Suspense fallback={<div className="w-full h-screen bg-background flex justify-center items-center text-white text-2xl">Loading...</div>}>
      <div className="min-h-screen relative overflow-x-hidden bg-transparent cursor-none">
        <CustomCursor />
        <BackgroundVideo />
        <FloatingBackground />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Marquee text="Pioneering AI in Clinical Trials • Challenging the Status Quo" />
          <Details />
          <Services />
          <FeatureShowcase />
          <VisionAndContact />
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
