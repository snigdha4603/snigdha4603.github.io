import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data';

export function Contact() {
  return (
    <section id="contact" style={{ background: '#060606', borderTop: '1px solid #1a1a1a' }}>
      <div className="max-w-7xl mx-auto px-8 py-28">
        <div className="max-w-2xl">
          <p
            className="text-xl tracking-widest uppercase mb-8"
            style={{ color: '#c41e3a', letterSpacing: '0.2em' }}
          >
            Contact me
          </p>

          <h2
            className="font-serif mb-6 leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#e2e2e2', fontWeight: 400 }}
          >
            Let's build something
            <br />
            <span style={{ color: '#8b1a1a', fontStyle: 'italic' }}>meaningful</span> together.
          </h2>

          <p
            className="mb-12 leading-relaxed"
            style={{ color: '#666', fontSize: '1rem', fontWeight: 300 }}
          >
            I'm currently open to roles and conversations about transportation urban data science. Don't hesitate to reach out.
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-block text-sm tracking-widest uppercase px-8 py-4 mb-12 transition-all duration-200"
            style={{
              background: '#8b1a1a',
              color: '#fff',
              letterSpacing: '0.18em',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#a01e1e')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#8b1a1a')}
          >
            {personalInfo.email}
          </a>

          <div className="flex items-center gap-8" style={{ borderTop: '1px solid #1a1a1a', paddingTop: '2rem' }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200"
              style={{ color: '#555', letterSpacing: '0.12em' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#c41e3a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
            >
              <Github size={15} />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200"
              style={{ color: '#555', letterSpacing: '0.12em' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#c41e3a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200"
              style={{ color: '#555', letterSpacing: '0.12em' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#c41e3a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
            >
              <Mail size={15} />
              Email
            </a>
          </div>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between flex-wrap gap-4"
        style={{ borderTop: '1px solid #1a1a1a' }}
      >
        <p style={{ color: '#333', fontSize: '0.75rem', letterSpacing: '0.08em' }}>
          © {new Date().getFullYear()} Snigdha Anantharaju
        </p>
        <p style={{ color: '#333', fontSize: '0.75rem', letterSpacing: '0.08em' }}>
          New York, NY
        </p>
      </div>
    </section>
  );
}
