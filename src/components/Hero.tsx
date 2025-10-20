import React, { useEffect, useState } from 'react';
import { ChevronDown, MapPin, Mail, Briefcase } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="hero" 
      // Set a very dark background to enhance the glow contrast
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950" 
    > 
      {/* Subtle animated background - REFINED COLORS AND LOWERED OPACITY for an ethereal, dark look */}
      <div className="absolute inset-0">
        <div 
          // Deep Indigo/Cyan (Purple/Blue-Green) - Low opacity for soft glow
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-indigo-900/15 to-cyan-500/15 blur-3xl opacity-80" 
          style={{
            left: mousePosition.x * 0.02 + 'px',
            top: mousePosition.y * 0.02 + 'px',
            transition: 'all 0.3s ease'
          }}
        />
        <div 
          // Emerald/Pink (Green/Magenta) - Low opacity
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-emerald-600/10 to-pink-600/10 blur-2xl opacity-70" 
          style={{
            right: (window.innerWidth - mousePosition.x) * 0.015 + 'px',
            bottom: (window.innerHeight - mousePosition.y) * 0.015 + 'px',
            transition: 'all 0.4s ease'
          }}
        />
         <div 
          // Dark Blue/Purple accent - Lowest opacity for subtle depth
           className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-blue-700/10 to-purple-800/10 blur-3xl opacity-60" 
          style={{
            left: (window.innerWidth / 2 + mousePosition.x * 0.01) + 'px',
            top: (window.innerHeight / 2 - mousePosition.y * 0.01) + 'px',
            transition: 'all 0.5s ease'
          }}
        />
      </div>

      <div className="text-center z-10 px-4 max-w-5xl mx-auto">
        {/* Status indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center glass px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            <span className="text-sm text-gray-300">Open to opportunities</span>
          </div>
        </div>

        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-light mb-6 leading-tight">
            <span className="text-white">Hi, I'm </span>
            <span className="iridescent-text font-medium">Snigdha</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            I use maps and models to tell stories that move cities forward.
          </div>
        </div>

        {/* Quick info */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-400">
          <div className="flex items-center">
            <MapPin size={16} className="mr-2" />
            <span>New York City</span>
          </div>
          <div className="flex items-center">
            <Mail size={16} className="mr-2" />
            <span>Graduate Student, New York University</span>
          </div>
          <div className="flex items-center">
            <Briefcase size={16} className="mr-2" /> 
            <span>Transportation Fellow, NYCDOT</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover-lift"
            data-interactive
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 hover-lift"
            data-interactive
          >
            Let's Connect
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-xs text-gray-400 mb-2">Scroll to explore</span>
            <a href="#about">
              <ChevronDown className="text-gray-400" size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;