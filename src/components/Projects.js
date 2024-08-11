import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faNode, faPython, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';

// Inline SVG for Socket.IO
const SocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600">
    <path d="M12 3v9a4 4 0 1 1 0 8v-5.8a4 4 0 0 1 0-8V3z"></path>
    <path d="M15 12h6M15 8h6M15 16h6"></path>
  </svg>
);

const projects = [
  {
    title: 'Tic-Tac-Toe',
    description: 'A very beginner yet a classic game of Tic-Tac-Toe built with JavaScript. Play the game directly in your browser.',
    image: 'https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRpYyUyMHRhYyUyMHRvZXxlbnwwfHwwfHx8MA%3D%3D',
    link: 'https://github.com/gouriagr15/tictac',
    techStack: ['JavaScript']
  },
  {
    title: 'Car Rent-Sell Interface',
    description: 'A beginner project illustrating React.js interface with page indexing functionalities.',
    image: 'https://images.unsplash.com/photo-1498887960847-2a5e46312788?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyJTIwcmVudCUyMHNlbGx8ZW58MHx8MHx8fDA%3D',
    link: 'https://github.com/gouriagr15/React2',
    techStack: ['React']
  },
  {
    title: 'Food Delivery Website',
    description: 'A full-stack application built using MongoDB, Express, React, and Node.js.',
    image: 'https://images.unsplash.com/photo-1519915051686-9fe6ee13633e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2QlMjBkZWxpdmVyeSUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D',
    link: 'https://github.com/gouriagr15/mern',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js']
  },
  {
    title: 'Estate Chat App',
    description: 'A real-time chat application for managing estate properties, built with modern web technologies.',
    image: 'https://plus.unsplash.com/premium_photo-1668902221348-9fde473dd512?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXN0YXRlJTIwY2hhdCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D',
    link: 'https://github.com/gouriagr15/estate-chat-app',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.IO']
  },
  {
    title: 'Movie Recommendation System',
    description: 'A project showcasing my skills in Python, including data manipulation and algorithm implementation.',
    image: 'https://plus.unsplash.com/premium_photo-1710324885061-589694affca9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW92aWUlMjByZXZpZXd8ZW58MHx8MHx8fDA%3D',
    link: 'https://github.com/gouriagr15/pythonProject1',
    techStack: ['Python']
  }
];

const iconMapping = {
  JavaScript: <FontAwesomeIcon icon={faJs} className="w-6 h-6 text-yellow-500" />,
  React: <FontAwesomeIcon icon={faReact} className="w-6 h-6 text-blue-600" />,
  MongoDB: <FontAwesomeIcon icon={faDatabase} className="w-6 h-6 text-green-600" />,
  Express: <FontAwesomeIcon icon={faServer} className="w-6 h-6 text-gray-800" />,
  Nodejs: <FontAwesomeIcon icon={faNode} className="w-6 h-6 text-green-700" />,
  Python: <FontAwesomeIcon icon={faPython} className="w-6 h-6 text-blue-500" />,
  Git: <FontAwesomeIcon icon={faGitAlt} className="w-6 h-6 text-orange-500" />,
  'Socket.IO': <SocketIcon /> // Using the custom SVG for Socket.IO
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects py-12 px-4 md:px-12 bg-gray-900 min-h-screen relative overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Showcase of My Projects</h2>
      <div className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-fixed" style={{ backgroundImage: "url('https://www.example.com/game-background.jpg')" }}></div>
      <div className="relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative project-card bg-gray-800 text-white p-6 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.3 }} // Sequential reveal
              whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)" }}
              onClick={() => handleCardClick(project)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-lg font-semibold opacity-0 transition-opacity duration-300 hover:opacity-100">{project.title}</p>
              </div>
              <div className="relative mt-4 text-center">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-center space-x-4 mt-4">
                  {project.techStack.map((tech, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      {iconMapping[tech] || <span className="w-6 h-6 text-gray-500">?</span>}
                      <span className="ml-2 text-gray-400">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
            <motion.div
              className="bg-gray-800 text-white p-8 rounded-lg w-full max-w-lg relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-gray-300 hover:text-white"
              >
                &times;
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-semibold mt-4">{selectedProject.title}</h3>
              <p className="mt-2 text-gray-300">{selectedProject.description}</p>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-blue-400 hover:underline"
              >
                View on GitHub
              </a>
              <div className="flex justify-center space-x-4 mt-4">
                {selectedProject.techStack.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    {iconMapping[tech] || <span className="w-6 h-6 text-gray-500">?</span>}
                    <span className="ml-2 text-gray-400">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
