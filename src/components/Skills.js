import React from 'react';
import { motion } from 'framer-motion';

// Define the skills with SVG icons
const skills = [
  {
    name: "HTML",
    level: 100,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-orange-600">
        <path d="M1.5 0h21v24h-21v-24zm19.5 22v-19h-18v19h18zm-6.6-3l1.5-12h-2.9l-1.5 12h-1.6l-1.5-12h-2.8l-1.5 12h-1.5v-1.7l2.6-11h3.3l2.5 11h1.6zm-6.8-7.7v-2h-4v2h1.9v7h-2v-7h-1.9v-2h4zm-2.8-1.5h2.3v-2h-2.3v2zm1.1 1.6h-1v4h-1.9v-4h-1v-2h1.9v-1.5h1.2v1.5h1.1v2z" />
      </svg>
    )
  },
  {
    name: "CSS",
    level: 100,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-600">
        <path d="M1.5 0h21v24h-21v-24zm19.5 22v-19h-18v19h18zm-6.6-3l1.5-12h-2.9l-1.5 12h-1.6l-1.5-12h-2.8l-1.5 12h-1.5v-1.7l2.6-11h3.3l2.5 11h1.6zm-6.8-7.7v-2h-4v2h1.9v7h-2v-7h-1.9v-2h4zm-2.8-1.5h2.3v-2h-2.3v2zm1.1 1.6h-1v4h-1.9v-4h-1v-2h1.9v-1.5h1.2v1.5h1.1v2z" />
      </svg>
    )
  },
  {
    name: "JavaScript",
    level: 90,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-yellow-500">
        <path d="M0 0h24v24H0z" />
        <path d="M12 1.5c-5.8 0-10.5 4.7-10.5 10.5s4.7 10.5 10.5 10.5 10.5-4.7 10.5-10.5-4.7-10.5-10.5-10.5zm-3.6 15v-7.8h-1.5v-1.7h1.5v-1.3c0-2.1 1.3-3.3 3.1-3.3.7 0 1.4.1 2.1.3v1.7h-1.3c-1.1 0-1.3.7-1.3 1.4v1.2h2.6l-.3 1.7h-2.3v7.8h-1.5zm7.8-8.4h-2.4v1.4h2.4v1.5h-2.4v3.7h-1.7v-3.7h-1.6v-1.5h1.6v-1.4c0-2.3 1.2-3.5 3.4-3.5 1 .1 2.1.2 3.2.4v1.7h-1.9c-1.3 0-1.7.7-1.7 1.4v1.3h3.3v1.7h-3.3v3.7h-1.7v-3.7zm-4.2 3.1h1.7v-3.8h-1.7v3.8zm1.7 2.2h-1.7v-1.7h1.7v1.7zm-1.7-2.2h1.7v-3.8h-1.7v3.8zm0 1.6h1.7v-1.7h-1.7v1.7z" />
      </svg>
    )
  },
  {
    name: "React.js",
    level: 80,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-600">
        <path d="M12 1.5c-5.8 0-10.5 4.7-10.5 10.5s4.7 10.5 10.5 10.5 10.5-4.7 10.5-10.5-4.7-10.5-10.5-10.5zm-3.6 15v-7.8h-1.5v-1.7h1.5v-1.3c0-2.1 1.3-3.3 3.1-3.3.7 0 1.4.1 2.1.3v1.7h-1.3c-1.1 0-1.3.7-1.3 1.4v1.2h2.6l-.3 1.7h-2.3v7.8h-1.5zm7.8-8.4h-2.4v1.4h2.4v1.5h-2.4v3.7h-1.7v-3.7h-1.6v-1.5h1.6v-1.4c0-2.3 1.2-3.5 3.4-3.5 1 .1 2.1.2 3.2.4v1.7h-1.9c-1.3 0-1.7.7-1.7 1.4v1.3h3.3v1.7h-3.3v3.7h-1.7v-3.7zm-4.2 3.1h1.7v-3.8h-1.7v3.8zm1.7 2.2h-1.7v-1.7h1.7v1.7zm-1.7-2.2h1.7v-3.8h-1.7v3.8zm0 1.6h1.7v-1.7h-1.7v1.7z" />
      </svg>
    )
  },
  {
    name: "MongoDB",
    level: 70,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-green-600">
        <path d="M12 1.5c-5.8 0-10.5 4.7-10.5 10.5s4.7 10.5 10.5 10.5 10.5-4.7 10.5-10.5-4.7-10.5-10.5-10.5zm-1.4 16.3l-3.3-6.4 3.3-6.4 3.3 6.4-3.3 6.4zm-4.4-1.7l2.2-4.3 1.1 2.2 1.1-2.2 2.2 4.3h-4.6zm7.2-4.3l2.2 4.3h-4.6l2.2-4.3zm-2.1-3.4l1.3 2.5-1.3 2.5-1.3-2.5 1.3-2.5z" />
      </svg>
    )
  },
  {
    name: "Node.js",
    level: 70,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-green-600">
        <path d="M12 1.5c-5.8 0-10.5 4.7-10.5 10.5s4.7 10.5 10.5 10.5 10.5-4.7 10.5-10.5-4.7-10.5-10.5-10.5zm-1.6 16.2l-1.4-7.9 1.4-7.9 7.1 7.9-7.1 7.9zm1.6-8.4v5.5h1.4v-5.5h-1.4zm2.3-4.8c-1.5-1.5-4-1.5-5.5 0-1.5 1.5-1.5 4 0 5.5s4 1.5 5.5 0c1.5-1.5 1.5-4 0-5.5z" />
      </svg>
    )
  },
  {
    name: "Express.js",
    level: 70,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-800">
        <path d="M12 1.5c-5.8 0-10.5 4.7-10.5 10.5s4.7 10.5 10.5 10.5 10.5-4.7 10.5-10.5-4.7-10.5-10.5-10.5zm-3.5 15h7v-2h-7v2zm0-3h7v-2h-7v2zm0-3h7v-2h-7v2z" />
      </svg>
    )
  },
  {
    name: "C++",
    level: 80,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-800">
        <path d="M6.6 9.3l-.8-1.4h-2l.8 1.4v6.3l-1.5-2.5v1.5l2 3.2h3.5l2-3.2v-1.5l-1.5 2.5v-6.3l.8-1.4h-2l-.8 1.4v-3.2h-1.7v3.2zm3.2 6.5l1.5-2.5v-1.5l1.5 2.5v1.5l-1.5 2.5-1.5-2.5zm2.5-9.8h-1.5v-3h-2v3h-1.5v3h1.5v5.5h2v-5.5h1.5v-3zm-4.5 4.5v-1.5h1.5v1.5h-1.5z" />
      </svg>
    )
  },
  {
    name: "Tailwind",
    level: 70,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-teal-400">
        <path d="M12 1.5c-5.8 0-10.5 4.7-10.5 10.5s4.7 10.5 10.5 10.5 10.5-4.7 10.5-10.5-4.7-10.5-10.5-10.5zm-1.3 14.7l-1.4-1.4 3.1-3.1h1.5v2.3h-1.6l-1.6 1.6zm2.6-3.5l-2.5 2.5h1.6l1.5-1.5h-1.6zm-2.6-5.6h1.5v1.6h-1.5v-1.6zm-2.5 6.4l2.5-2.5h-1.6l-1.6 1.6v1.5h-1.6v-1.5l1.6-1.6v-2.3h-1.5l-2.5 2.5h1.6l1.5-1.6h1.5v1.5l-2.5 2.5z" />
      </svg>
    )
  },
];

const Skills = () => {
  return (
    <div className="skills bg-gray-900 h-full flex flex-col items-center justify-center text-center text-white py-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-12">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-3/4">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="flex items-center justify-center mb-4">
              {skill.icon}
            </div>
            <h2 className="text-2xl font-semibold mb-4">{skill.name}</h2>
            <div className="w-full bg-gray-800 rounded-full h-6 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, delay: index * 0.1 }}
              >
                <span className="ml-2 text-sm font-medium">{`${skill.level}%`}</span>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
