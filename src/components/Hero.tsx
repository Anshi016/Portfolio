import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const roles = ["AI Enthusiast", "Full Stack Developer", "ML Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypedText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-dark-300 text-white px-4"
    >
      {/* Particle Background */}
      <ParticleBackground />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Side */}
        <div className="space-y-6">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Anshi{" "}
            
          </motion.h1>

          <motion.h2
            className="text-2xl text-electric-300 font-semibold h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {typedText}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="inline-block w-1 h-6 bg-electric-300 ml-1"
            ></motion.span>
          </motion.h2>

          <motion.ul
            className="text-gray-400 text-lg space-y-2 list-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <li>🚀 Full Stack Developer</li>
            <li>🤖 Focused on AI and LLMs</li>
            <li>💡 Turning ideas into real products</li>
            <li>📚 Always learning, always building</li>
          </motion.ul>

          {/* Buttons */}
          <motion.div
            className="flex gap-4 mt-8 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <button
              className="px-6 py-3 bg-gradient-to-r from-electric-300 to-electric-400 text-dark-400 font-semibold rounded-full hover:from-electric-400 hover:to-electric-300 transition-all duration-300 shadow-lg"
              onClick={() => {
                const projects = document.querySelector("#projects");
                projects?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </button>
            <button
              className="px-6 py-3 border border-electric-300 text-electric-300 rounded-full hover:bg-electric-300 hover:text-dark-400 transition duration-300"
              onClick={() => {
                const contact = document.querySelector("#contact");
                contact?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Connect
            </button>
            <a
              href="https://drive.google.com/uc?export=download&id=1K-Ltfd_csX2ySD7Fa1iMkfq2T0Oi8KLV"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-electric-300 text-electric-300 rounded-full hover:bg-electric-300 hover:text-dark-400 transition duration-300 flex items-center gap-2"
            >
              <Download size={18} />
              Resume
            </a>
          </motion.div>
        </div>

        {/* Right Side Photo with rotating dotted ring */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-80 h-80">
            {/* Rotating dotted circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-full border-4 border-dotted border-electric-300 rounded-full"
            ></motion.div>

            {/* Photo */}
            <div className="absolute top-3 left-3 right-3 bottom-3 rounded-full overflow-hidden">
              <img
                src="https://signature.freefire-name.com/img.php?f=3&t=Anshi"
                alt="Anshi Prajapati"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToAbout}
          className="text-electric-300 hover:text-white transition-colors"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
