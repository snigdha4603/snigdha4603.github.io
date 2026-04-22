import { ExternalLink } from 'lucide-react';
import { education } from '../data';

export function Education() {
  return (
    <section id="education" style={{ background: '#080808', borderTop: '1px solid #1e1e1e' }}>
      <div className="max-w-7xl mx-auto px-8 py-28">
        <p
          className="text-xl tracking-widest uppercase mb-14"
          style={{ color: '#c41e3a', letterSpacing: '0.2em' }}
        >
          Education
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {education.map((e, i) => (
            <div key={i}>
              <div className="mb-4">
                <span
                  className="text-md tracking-widest uppercase"
                  style={{ color: '#c41e3a', letterSpacing: '0.16em' }}
                >
                  {e.duration}
                </span>
              </div>
              <h3
                className="font-serif mb-3"
                style={{ color: '#ececec', fontSize: '1.5rem', fontWeight: 400, lineHeight: 1.25 }}
              >
                {e.degree}
              </h3>
              <p
                className="mb-2"
                style={{ color: '#b0b0b0', fontSize: '0.92rem', fontWeight: 400 }}
              >
                {e.institution}
              </p>
              {e.link && (
                <a
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200"
                  style={{ color: '#c41e3a', letterSpacing: '0.12em' }}
                  onMouseEnter={(ev) => (ev.currentTarget.style.color = '#e84a4a')}
                  onMouseLeave={(ev) => (ev.currentTarget.style.color = '#c41e3a')}
                >
                  View program <ExternalLink size={12} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
