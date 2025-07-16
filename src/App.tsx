import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import BackgroundEffects from './components/BackgroundEffects';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-black text-white custom-cursor">
      <BackgroundEffects />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

export default App;