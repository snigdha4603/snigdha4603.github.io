import { ExternalLink } from 'lucide-react';
import { leadership } from '../data';

export function Leadership() {
  return (
    <section id="leadership" style={{ background: '#060606', borderTop: '1px solid #1a1a1a' }}>
      <div className="max-w-7xl mx-auto px-8 py-28">
        <p
          className="text-xl tracking-widest uppercase mb-14"
          style={{ color: '#c41e3a', letterSpacing: '0.2em' }}
        >
          Leadership
        </p>

        <div style={{ borderTop: '1px solid #1a1a1a' }}>
          {leadership.map((entry, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-8 py-7"
              style={{ borderBottom: '1px solid #1a1a1a' }}
            >
              <div className="col-span-12 md:col-span-3">
                <span
                  className="text-md"
                  style={{ color: '#c41e3a', letterSpacing: '0.04em' }}
                >
                  {entry.duration}
                </span>
              </div>
              <div className="col-span-12 md:col-span-9 flex items-start justify-between gap-4">
                <div>
                  <p
                    className="font-medium mb-1"
                    style={{ color: '#c8c8c8', fontSize: '0.95rem' }}
                  >
                    {entry.title}
                  </p>
                  <p style={{ color: '#777', fontSize: '0.85rem', fontWeight: 300 }}>
                    {entry.org}
                  </p>
                </div>
                {entry.link && (
                  <a
                    href={entry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 transition-colors duration-200 mt-1"
                    style={{ color: '#3d3d3d' }}
                    onMouseEnter={(ev) => (ev.currentTarget.style.color = '#c41e3a')}
                    onMouseLeave={(ev) => (ev.currentTarget.style.color = '#3d3d3d')}
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
