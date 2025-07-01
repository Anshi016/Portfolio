import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Globe,
  Database,
  Server,
  Cloud,
  Settings,
  BookOpen
} from 'lucide-react';

import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiNextdotjs,
  SiExpress,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiPostman,
  SiJest
} from 'react-icons/si';

import { FaJava } from 'react-icons/fa';
import { TbLetterC } from 'react-icons/tb';
import { BiData } from 'react-icons/bi';
import type { IconType } from 'react-icons';

const skillIcons: Record<string, IconType> = {
  Python: SiPython,
  Java: FaJava,
  C: TbLetterC,
  JavaScript: SiJavascript,
  'React.js': SiReact,
  'Node.js': SiNodedotjs,
  'HTML/CSS': SiHtml5,
  'Next.js': SiNextdotjs,
  'Express.js': SiExpress,
  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  'Scikit-learn': SiScikitlearn,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Firebase: SiFirebase,
  AWS: Cloud,
  Git: SiGit,
  'GitHub Actions': SiGithubactions,
  'REST APIs': SiPostman,
  Testing: SiJest,
  SQL: BiData
};

const categories = [
  {
    name: 'Core Technologies',
    icon: <Code2 className="w-5 h-5" />,
    skills: ['Python', 'Java', 'C', 'JavaScript', 'SQL']
  },
  {
    name: 'Web Development',
    icon: <Globe className="w-5 h-5" />,
    skills: ['React.js', 'Node.js', 'HTML/CSS', 'Next.js', 'Express.js']
  },
  {
    name: 'Data Engineering & ML',
    icon: <Database className="w-5 h-5" />,
    skills: ['TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Scikit-learn']
  },
  {
    name: 'Database Systems',
    icon: <Server className="w-5 h-5" />,
    skills: ['MongoDB', 'MySQL', 'Firebase']
  },
  {
    name: 'DevOps & Cloud',
    icon: <Cloud className="w-5 h-5" />,
    skills: ['AWS', 'Git', 'GitHub Actions']
  },
  {
    name: 'Other Technical Skills',
    icon: <Settings className="w-5 h-5" />,
    skills: ['REST APIs', 'Testing']
  }
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState('Core Technologies');

  const getCurrentSkills = () => {
    const category = categories.find(cat => cat.name === activeCategory);
    return category ? category.skills : [];
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-electric-300 to-accent-purple bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-16 h-1 bg-electric-300 mx-auto mb-8"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center mb-12"
          >
            <BookOpen className="w-6 h-6 text-electric-300 mr-4" />
            <p className="text-lg text-gray-300 max-w-4xl">
              Through self-learning, formal education, and hands-on projects, I continue to expand my skill set—building
              a strong foundation across diverse domains, with a primary focus on software development and data engineering.
            </p>
          </motion.div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.name
                  ? 'bg-electric-300 text-dark-400 shadow-lg shadow-electric-300/25'
                  : 'bg-dark-200 text-gray-300 hover:bg-dark-100 border border-electric-300/20 hover:border-electric-300/40'
              }`}
            >
              {category.icon}
              <span className="ml-2">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Pills */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
        >
          {getCurrentSkills().map((skill, index) => {
            const IconComponent = skillIcons[skill] ?? null;

            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-dark-200 to-dark-300 rounded-full border border-electric-300/20 hover:border-electric-300/40 transition-all duration-300"
              >
                {IconComponent && <IconComponent className="w-4 h-4 text-electric-300 mr-3" />}
                <span className="text-gray-300 font-medium">{skill}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Background Decorations */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 left-20 w-4 h-4 bg-electric-300 rounded-full opacity-60"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 right-32 w-6 h-6 bg-accent-purple rounded-full opacity-40"
        />
      </div>
    </section>
  );
};

export default Skills;
