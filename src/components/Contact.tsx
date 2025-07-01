import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Mail, MapPin, Clock, Github, Linkedin, Send,
  Handshake, PlaneTakeoff, CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', projectType: '', message: '', agree: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', email: '', subject: '', projectType: '', message: '', agree: false });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const projectTypes = [
    'Web Application', 'Mobile App', 'AI/ML Project', 'Data Engineering', 'Automation', 'Consulting', 'Other'
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: 'https://github.com/Anshi016', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/anshi-prajapati-80122728a', label: 'LinkedIn' }
  ];

  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setShowModal(false);
      }
    };
    if (showModal) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showModal]);

  return (
    <section id="contact" className="flex flex-col min-h-screen bg-dark-300/50 relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-electric-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent-purple rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 pt-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-electric-300 to-accent-green bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
            Open for collaborations, freelance opportunities, or just a tech chat.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-accent-green/20 text-accent-green rounded-full border border-accent-green/30"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Available for new opportunities
          </motion.div>
          <p className="text-gray-500 mt-2">Currently accepting projects starting May 2025</p>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-br from-dark-200 to-dark-300 rounded-2xl p-8 border border-electric-300/20"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-electric-300 to-accent-green rounded-xl mr-4">
                <Handshake className="w-6 h-6 text-dark-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Let's Build Something Amazing</h3>
            </div>

            <p className="text-gray-400 mb-8">
              I'm passionate about collaborating on innovative projects that make a difference.
              Whether you have a startup idea, need technical expertise, or want to discuss the latest in tech, I'd love to hear from you.
            </p>

            <div className="space-y-6 mb-8">
              <motion.div whileHover={{ x: 5 }} className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 text-electric-300 mr-4" />
                <span>anship308@gmail.com</span>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 text-electric-300 mr-4" />
                <span>Kolkata, West Bengal, India</span>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-center text-gray-300">
                <Clock className="w-5 h-5 text-electric-300 mr-4" />
                <span>UTC+5:30 (IST)</span>
              </motion.div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Preferred Project Types</h4>
              <div className="flex flex-wrap gap-2">
                {['Web Apps', 'Data Engineering', 'AI/ML', 'Automation'].map(type => (
                  <span
                    key={type}
                    className="px-3 py-1 bg-dark-400 text-accent-green text-sm rounded-full border border-accent-green/30"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect on Social</h4>
              <div className="flex space-x-4">
                {socialLinks.map(social => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-dark-400 text-gray-300 rounded-xl border border-electric-300/20 hover:border-electric-300/40 hover:text-electric-300 transition-all duration-300"
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-br from-dark-200 to-dark-300 rounded-2xl p-8 border border-electric-300/20"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-accent-purple to-accent-orange rounded-xl mr-4">
                <PlaneTakeoff className="w-6 h-6 text-dark-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Send Me a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-dark-400 border border-electric-300/20 rounded-lg text-white placeholder-gray-500 focus:border-electric-300 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-dark-400 border border-electric-300/20 rounded-lg text-white placeholder-gray-500 focus:border-electric-300 focus:outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-dark-400 border border-electric-300/20 rounded-lg text-white placeholder-gray-500 focus:border-electric-300 focus:outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                <select name="projectType" value={formData.projectType} onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-dark-400 border border-electric-300/20 rounded-lg text-white focus:border-electric-300 focus:outline-none">
                  <option value="">Select project type</option>
                  {projectTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} required
                  rows={4} placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-dark-400 border border-electric-300/20 rounded-lg text-white placeholder-gray-500 focus:border-electric-300 focus:outline-none resize-none" />
              </div>

              <div className="flex items-start">
                <input type="checkbox" name="agree" checked={formData.agree} onChange={handleInputChange} required
                  className="mt-1 mr-3 w-4 h-4 text-electric-300 border-electric-300/20 rounded focus:ring-electric-300" />
                <label className="text-sm text-gray-400">
                  I agree to be contacted about this project and understand my information will be handled responsibly.
                </label>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-accent-green to-electric-300 text-dark-400 font-semibold rounded-lg hover:from-accent-green/90 hover:to-electric-300/90 transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-dark-400 border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-accent-green/20 border border-accent-green/30 rounded-lg text-accent-green"
              >
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Resume Buttons */}
        <div className="text-center py-6 mt-12">
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 px-6 py-2 text-white border border-gray-500 rounded hover:bg-gray-800 transition"
            >
              👁 Preview Resume
            </button>

            <a
              href="https://drive.google.com/uc?export=download&id=1K-Ltfd_csX2ySD7Fa1iMkfq2T0Oi8KLV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 text-white border border-gray-500 rounded hover:bg-gray-800 transition"
            >
              ⬇ Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Sticky footer at the bottom */}
      <footer className="bg-dark-300 text-center py-4 border-t border-electric-300/20 mt-auto z-50">
        <p className="text-sm text-gray-400">© 2025 Anshi. All rights reserved.</p>
      </footer>

      {/* Resume Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 animate-fadeIn">
          <div ref={modalRef} className="relative w-full max-w-4xl bg-dark-300 rounded-lg shadow-lg overflow-hidden">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-300 hover:text-white text-xl"
            >
              ✕
            </button>
            <iframe
              src="https://drive.google.com/file/d/1K-Ltfd_csX2ySD7Fa1iMkfq2T0Oi8KLV/preview"
              width="100%"
              height="500"
              allow="autoplay"
              className="rounded-b-lg"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
