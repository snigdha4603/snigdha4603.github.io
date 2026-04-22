import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { CityNetwork } from './CityNetwork';
import { personalInfo } from '../data';

export function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden" style={{ background: '#080808' }}>
      {/* Three.js background */}
      <div className="absolute inset-0">
        <CityNetwork />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(105deg, rgba(8,8,8,0.98) 30%, rgba(8,8,8,0.55) 65%, rgba(8,8,8,0.15) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 flex flex-col justify-center">
        <div className="max-w-2xl">
          <p
            className="text-s tracking-widest uppercase mb-6"
            style={{ color: '#c41e3a', letterSpacing: '0.2em' }}
          >
            Transportation, GIS and Urban Data Science
          </p>

          <h1
            className="font-serif mb-6 leading-none"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', color: '#ececec', fontWeight: 400 }}
          >
            Snigdha
            <br />
            <span style={{ color: '#c41e3a', fontStyle: 'italic' }}>Anantharaju</span>
          </h1>

          <p
            className="mb-10 leading-relaxed"
            style={{ color: '#b0b0b0', fontSize: '1.1rem', fontWeight: 300, maxWidth: '36rem' }}
          >
            {personalInfo.tagline}
          </p>

          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="#projects"
              className="text-xs tracking-widest uppercase px-6 py-3 transition-all duration-200"
              style={{
                background: '#8b1a1a',
                color: '#fff',
                letterSpacing: '0.16em',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#a01e1e')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#8b1a1a')}
            >
              View Work
            </a>
            <a
              href="#about"
              className="text-xs tracking-widest uppercase px-6 py-3 transition-all duration-200"
              style={{
                color: '#b0b0b0',
                border: '1px solid #2a2a2a',
                letterSpacing: '0.16em',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#f0f0f0';
                e.currentTarget.style.borderColor = '#555';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#b0b0b0';
                e.currentTarget.style.borderColor = '#2a2a2a';
              }}
            >
              About Me
            </a>

            <div className="flex items-center gap-4 ml-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                style={{ color: '#666' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#c41e3a')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                style={{ color: '#666' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#c41e3a')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="transition-colors duration-200"
                style={{ color: '#666' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#c41e3a')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <ArrowDown size={16} style={{ color: '#666' }} />
      </div>
    </section>
  );
}
