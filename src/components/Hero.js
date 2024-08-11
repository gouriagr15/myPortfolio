// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

// Background and Profile Image URLs
const backgroundImageURL = 'https://images.unsplash.com/photo-1560264967-c5da6e1c4f0b';
const profileImageURL = '/IMG_9417.jpg'; // Image in the public folder

const Hero = () => {
  return (
    <div className="hero relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={backgroundImageURL}
          alt="Background"
          className="w-full h-full object-cover brightness-60"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
        {/* Animated SVG Background */}
        <div className="absolute inset-0 z-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              className="text-blue-400 opacity-30 animate-pulse"
              d="M0 100h200M100 0v200M150 50l-100 100M50 50l100 100"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <div className="flex flex-col items-center mb-6">
          {/* Profile Image */}
          <motion.img
            src={profileImageURL}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-xl transition-transform duration-500 hover:scale-110"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          />
          {/* Name */}
          <motion.h1
            className="text-5xl md:text-6xl font-bold mt-4 mb-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Gauri Agrawal
          </motion.h1>
          {/* Title with Typewriter Effect */}
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Typewriter
              words={['Web Developer', 'Creative Coder', 'Tech Enthusiast']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.p>
          {/* Social Media Links */}
          <motion.div
            className="flex space-x-6 justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            {/* LinkedIn Logo */}
            <a
              href="https://www.linkedin.com/in/gauri-agrawal-4073642a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl flex items-center space-x-2 transition-transform transform hover:scale-125 hover:text-blue-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0A66C2" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46C23.21 24 24 23.21 24 22.23V1.77C24 .79 23.21 0 22.23 0zM7.5 20H5.5v-9h2v9zm-1-10.35c-.69 0-1.25-.56-1.25-1.25S5.81 7.9 6.5 7.9 7.75 8.46 7.75 9.15 6.91 9.65 6.5 9.65zm13.5 10.35h-2v-5.09c0-1.22-.02-2.79-1.7-2.79-1.69 0-1.95 1.32-1.95 2.68v5.2h-2v-9h1.91v1.23h.03c.27-.51.93-1.08 1.92-1.08 2.05 0 2.43 1.35 2.43 3.11v5.74z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            {/* GitHub Logo */}
            <a
              href="https://github.com/gouriagr15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl flex items-center space-x-2 transition-transform transform hover:scale-125 hover:text-gray-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 0 0-2.535 15.59c.4.073.55-.173.55-.386v-1.39c-2.009.437-2.432-.965-2.432-.965-.328-.832-.802-1.05-.802-1.05-.656-.449.049-.439.049-.439.73.051 1.178.73 1.178.73.658 1.12 1.735.797 2.156.612.067-.477.257-.797.469-.979-1.725-.2-3.536-.862-3.536-3.831 0-.846.297-1.54.788-2.083-.078-.194-.34-.975.075-2.037 0 0 .655-.21 2.147.797.623-.173 1.295-.259 1.963-.262.668.003 1.34.089 1.963.262 1.492-1.006 2.147-.797 2.147-.797.415 1.062.154 1.843.076 2.037.492.543.788 1.237.788 2.083 0 2.972-1.817 3.63-3.549 3.826.266.229.51.683.51 1.374v2.043c0 .216.15.462.56.384A8 8 0 0 0 8 0z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </motion.div>
          {/* Call to Action Button */}
          <motion.a
            href="#contact"
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
