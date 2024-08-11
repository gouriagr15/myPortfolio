import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';

import './index.css';



function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="resume">
        <Resume />
      </section>
      

      {/* Add more sections like Contact, About, etc. */}
    </div>
  );
}

export default App;
