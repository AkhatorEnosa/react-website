import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <Hero />
      <Analytics />
    </div>
  );
}

export default App;
