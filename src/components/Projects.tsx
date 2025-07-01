import React from "react";
import {
  Github,
  Calendar,
  CheckCircle,
  Loader,
  ListChecks,
  Braces,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Smart Resume AI",
      image: "https://www.shutterstock.com/image-photo/smart-ai-technology-system-human-600nw-2319539943.jpg",
      github: "https://github.com/Anshi016/Smart_Resume_AI",
      status: "In Progress",
      statusIcon: <Loader className="w-3 h-3 animate-spin" />,
      description:
        "Smart Resume AI is an intelligent resume analysis tool that reads resumes, evaluates their ATS compatibility, and matches them against job descriptions using AI-driven techniques.",
      techHighlights: [],
      features: [
        "Phase-wise scoring with trigram similarity and LLM-based enhancement",
        "Smart content suggestions for missing keywords and weak sections",
        "Customizable resume themes with live preview and download",
        "Job-description matching and improvement prompts",
      ],
      technologies: [
        "Python",
        "React",
        "Tailwind CSS",
        "Spacy",
        "Scikit-learn",
        "OpenAI",
        "Node.js",
      ],
      timeline: "May 2025 – Present",
    },
    {
      title: "Parkinson's Disease Prediction",
      image: "https://jpinfotech.org/wp-content/uploads/2023/01/JPPY2232-Prediction-of-Parkinsons-disease.jpg",
      github: "https://github.com/Anshi016/Parkinson-s-Disease-Prediction",
      status: "Completed",
      statusIcon: <CheckCircle className="w-3 h-3 text-green-400" />,
      description:
        "A machine learning web application built with Python and Streamlit, leveraging a Random Forest Classifier trained on the UCI Parkinson’s dataset to predict disease presence based on biomedical voice features. It enables real-time user input and displays model predictions with performance metrics",
      techHighlights: [],
      features: [
        "Developed a machine learning web app using Python and Streamlit",
        "Trained a Random Forest Classifier on the UCI Parkinson’s dataset",
        "Designed an interactive user interface allowing users to input medical features and receive instant disease predictions",
        "Implemented data preprocessing and visualization techniques to explore feature relationships and model performance",
        "Deployed the solution as a lightweight web application",
      ],
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Streamlit", "UCI Machine Learning Repository"],
      timeline: "Jan 2025 – May 2025",
    },
    {
      title: "Hotel Management System",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaAfhsqIEJNw6HN2BkyOeOOeA7hyP7MoLVeg&s",
      github: "https://github.com/Anshi016/Hotel_Management_System",
      status: "Completed",
      statusIcon: <CheckCircle className="w-3 h-3 text-green-400" />,
      description:
        "A terminal-based hotel management system built using Java that manages employee operations using OOP principles such as inheritance, polymorphism, and abstraction.",
      techHighlights: [],
      features: [
        "Terminal-based UI for managing hotel employee records",
        "Implements key OOP principles with class hierarchy",
        "CRUD operations for adding, updating, deleting employees",
        "Well-commented code ideal for learning and small-scale deployments",
      ],
      technologies: ["Java", "HTML/CSS", "JavaScript", "MySQL", "Apache Ant"],
      timeline: "Sep 2024 - Dec 2024",
    },
    {
      title: "Employee Management System",
      image: "https://st2.depositphotos.com/1757635/8830/i/450/depositphotos_88302772-stock-photo-global-business-strategy.jpg",
      github: "https://github.com/Anshi016/Parkinson-s-Disease-Prediction",
      status: "Completed",
      statusIcon: <CheckCircle className="w-3 h-3 text-green-400" />,
      description:
        "A console-based Employee Management System written in Java, enabling users to add, view, update, and delete employee records. Data is stored as individual text files, and users interact through a text-based menu system",
      techHighlights: [],
      features: [
        "Menu-driven console interface for easy navigation and user interaction",
        "Allows users to add, view, update, and delete employee records through clear prompts",
        "Stores each employee’s details in a separate text file using Java file handling instead of a database",
        "Supports searching and updating employee details by reading and modifying text within files",
      ],
      technologies: ["Java", "Java I/O", "File Handling", "Console Application"],
      timeline: "June 2024 – July 2024",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-dark-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-electric-300 to-accent-green bg-clip-text text-transparent">
            Projects
          </span>
          <p className="mt-2 text-gray-400 text-sm sm:text-base">
            Explore my work in AI, web development, and software engineering.
          </p>
        </h2>
        

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gradient-to-br from-dark-200 to-dark-300 rounded-2xl border border-electric-300/20 shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                {/* Title & Actions */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-electric-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white flex items-center gap-1 border border-gray-500 px-2 py-1 rounded hover:bg-gray-800 transition"
                    >
                      <Github className="w-3 h-3" />
                      GitHub
                    </a>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-800/20 text-green-400 border border-green-400/30 flex items-center gap-1">
                      {project.statusIcon}
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 text-sm">{project.description}</p>

                {/* Highlights (if any) */}
                {project.techHighlights.length > 0 && (
                  <div className="flex flex-wrap gap-4 mb-6">
                    {project.techHighlights.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-2 text-white bg-dark-400 px-3 py-1 rounded-full text-sm border border-electric-300/20"
                      >
                        {item.icon}
                        {item.label}
                      </div>
                    ))}
                  </div>
                )}

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold flex items-center gap-2 mb-2">
                    <ListChecks className="w-3 h-3 text-electric-300" />
                    Key Features
                  </h4>
                  <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold text-sm flex items-center gap-2 mb-2">
                    <Braces className="w-3 h-3 text-electric-300" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-dark-400 border border-electric-300/20 rounded-full text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="text-xs text-gray-400 mt-4 flex items-center gap-2">
                  <Calendar className="w-3 h-3" />
                  {project.timeline}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
