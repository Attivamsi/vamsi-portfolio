import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen font-sans">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Vamsi Atti. All rights reserved.
      </footer>
    </div>
  );
}
