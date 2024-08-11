// src/components/Resume.js
import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="resume py-12 px-4 md:px-12 bg-gray-900 text-white min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Resume</h2>
        <p className="text-lg mb-8">
          You can view or download my resume from the link below:
        </p>
        <a
          href="\GauriAgrawal_InternshalaResume (2).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 inline-block"
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
