import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-electric-300 to-accent-purple bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="prose prose-lg text-gray-300 max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                I'm a passionate <span className="text-electric-300 font-semibold">Full Stack Developer</span> and 
                <span className="text-accent-green font-semibold"> AI Enthusiast</span> based in Kolkata, India, 
                with a drive to build smart and impactful digital experiences.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                What started as a curiosity for how things work has grown into a love for crafting modern web applications
                and integrating AI to solve real-world problems.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                I enjoy blending web development with machine learning to create intuitive and intelligent solutions. 
                Outside of development, I’m often exploring new tech trends, contributing to open-source, or sharing 
                insights with fellow developers.
              </p>

              <p className="text-lg leading-relaxed">
              I believe in writing clean, efficient code, focusing on user experience, and constantly learning to stay 
              ahead in this ever-evolving field.
              </p>


            </div>
          </motion.div>

          {/* Banner Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full h-full flex justify-center items-center"
          >
            <img
              src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvfGVufDB8fDB8fHww" // 👈 Replace this with your actual image path
              alt="About Banner"
              className="rounded-xl w-full max-w-md shadow-lg object-cover"
            />
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 w-20 h-20 border border-electric-300/30 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-10 w-16 h-16 border border-accent-purple/30 rounded-full"
        />
      </div>
    </section>
  );
};

export default About;
    