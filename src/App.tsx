import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="relative bg-dark-400 text-white font-inter overflow-x-hidden">
      {/* Particle background behind everything */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Navbar on top */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;
