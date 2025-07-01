import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certificates = [
    {
      title: 'AI for Everyone',
      issuer: 'Coursera - deeplearning.ai',
      date: 'March 2024',
      description: 'Comprehensive course on AI fundamentals and applications',
      logo: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=200',
      link: '#'
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'February 2024',
      description: 'Cloud computing fundamentals and AWS services',
      logo: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=200',
      link: '#'
    },
    {
      title: 'React - The Complete Guide',
      issuer: 'Udemy',
      date: 'January 2024',
      description: 'Advanced React development with hooks and modern patterns',
      logo: 'https://images.pexels.com/photos/11035539/pexels-photo-11035539.jpeg?auto=compress&cs=tinysrgb&w=200',
      link: '#'
    }
  ];

  return (
    <section id="certificates" className="py-20 relative">
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
              Certifications
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Continuous learning and professional development achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-gradient-to-br from-dark-200 to-dark-300 rounded-2xl p-6 border border-electric-300/20 hover:border-electric-300/40 transition-all duration-300"
            >
              {/* Certificate Header */}
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-electric-300/30">
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center text-accent-green mb-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{cert.date}</span>
                  </div>
                  <div className="flex items-center text-electric-300">
                    <Award className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">Certified</span>
                  </div>
                </div>
              </div>

              {/* Certificate Content */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric-300 transition-colors">
                {cert.title}
              </h3>
              <p className="text-electric-300 font-medium mb-3">{cert.issuer}</p>
              <p className="text-gray-400 text-sm mb-4">{cert.description}</p>

              {/* View Button */}
              <motion.a
                href={cert.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-electric-300/20 to-electric-400/20 text-electric-300 rounded-lg border border-electric-300/30 hover:from-electric-300/30 hover:to-electric-400/30 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Certificate
              </motion.a>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-4 right-4 w-8 h-8 border border-accent-purple/30 rounded-full opacity-50"
              />
            </motion.div>
          ))}
        </div>

        {/* Background Decorations */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-r from-electric-300/20 to-accent-purple/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-r from-accent-green/20 to-electric-300/20 rounded-full blur-xl"
        />
      </div>
    </section>
  );
};

export default Certificates;