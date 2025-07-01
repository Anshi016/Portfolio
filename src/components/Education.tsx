import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'University of Engineering & Management, Kolkata',
      duration: '2022 - 2026',
      cgpa: '8.43 CGPA',
      highlights: [
        'Specialized in AI & Machine Learning',
        'Data Structures & Algorithms',
        'Web Development Projects',
        'Research in Deep Learning'
      ]
    },
    {
      degree: 'Higher Secondary (XII)',
      institution: 'Arya Kanya Mahavidyalaya',
      duration: '2020 - 2022',
      cgpa: '78%',
      highlights: [
        'PCM with Computer Science',
        'Mathematics Excellence',
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-dark-300/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-electric-300 to-accent-green bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Academic journey that shaped my foundation in technology and innovation
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0">
            <motion.div
              initial={{ height: 0 }}
              animate={inView ? { height: '100%' } : {}}
              transition={{ duration: 2, delay: 0.5 }}
              className="w-px bg-gradient-to-b from-electric-300 to-accent-green"
            />
          </div>

          {/* Education Items */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-electric-300 to-accent-green rounded-full border-4 border-dark-400 z-10"
                >
                  <div className="w-full h-full rounded-full bg-dark-400 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-electric-300" />
                  </div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 2 : -2 }}
                  className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="bg-gradient-to-br from-dark-200 to-dark-300 p-6 rounded-xl border border-electric-300/20 hover:border-electric-300/40 transition-all duration-300 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-electric-300">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span className="text-sm font-medium">{item.duration}</span>
                      </div>
                      <div className="flex items-center text-accent-green">
                        <Award className="w-5 h-5 mr-2" />
                        <span className="text-sm font-medium">{item.cgpa}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
                    <p className="text-electric-300 font-medium mb-4">{item.institution}</p>

                    <div className="space-y-2">
                      {item.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.6, delay: 1 + index * 0.2 + idx * 0.1 }}
                          className="flex items-center text-gray-400"
                        >
                          <div className="w-2 h-2 bg-accent-purple rounded-full mr-3" />
                          <span className="text-sm">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;