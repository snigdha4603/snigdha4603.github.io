import { ExternalLink } from 'lucide-react';
import { news } from '../data';

export function NewsUpdates() {
  // Show newest first
  const sorted = [...news].reverse();

  return (
    <section id="news" style={{ background: '#080808', borderTop: '1px solid #1e1e1a' }}>
      <div className="max-w-7xl mx-auto px-8 py-28">
        <p
          className="text-xl tracking-widest uppercase mb-14"
          style={{ color: '#c41e3a', letterSpacing: '0.2em' }}
        >
          News &amp; Updates
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {sorted.map((item, i) => (
            <div key={i} style={{ borderBottom: '1px solid #1a1a1a', paddingBottom: '1.5rem' }}>
              <div className="mb-4">
                <span
                  className="text-md tracking-widest uppercase"
                  style={{ color: '#c41e3a', letterSpacing: '0.16em' }}
                >
                  {item.date}
                </span>
                <span
                  className="text-xs tracking-widest uppercase ml-3 px-2 py-0.5"
                  style={{
                    color: '#fff',
                    background: '#2a2a2a',
                    letterSpacing: '0.12em',
                    fontSize: '0.6rem',
                    opacity: 0.95,
                  }}
                >
                  {item.tag}
                </span>
              </div>

              <h3
                className="font-serif mb-3"
                style={{ color: '#ececec', fontSize: '1.25rem', fontWeight: 400, lineHeight: 1.25 }}
              >
                {item.headline}
              </h3>

              <p className="mb-4" style={{ color: '#b0b0b0', fontSize: '0.95rem' }}>
                {item.body}
              </p>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200"
                  style={{ color: '#c41e3a', letterSpacing: '0.12em' }}
                  onMouseEnter={(ev) => (ev.currentTarget.style.color = '#e84a4a')}
                  onMouseLeave={(ev) => (ev.currentTarget.style.color = '#c41e3a')}
                >
                  Read more <ExternalLink size={12} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
