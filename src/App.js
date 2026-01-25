import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Details from "./components/Details";
import Services from "./components/Services";
import FeatureShowcase from "./components/FeatureShowcase";
import VisionAndContact from "./components/VisionAndContact";
import Footer from "./components/Footer";
import FloatingBackground from "./components/FloatingBackground";

function App() {
  return (
    <Suspense fallback={<div className="w-full h-screen bg-background flex justify-center items-center text-white text-2xl">Loading...</div>}>
      <div className="min-h-screen bg-transparent relative overflow-hidden">
        <FloatingBackground />
        <Navbar />
        <main>
          <Hero />
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
