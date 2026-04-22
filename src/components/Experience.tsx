import { useState } from 'react';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { experience } from '../data';

export function Experience() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="experience" style={{ background: '#060606', borderTop: '1px solid #1a1a1a' }}>
      <div className="max-w-7xl mx-auto px-8 py-28">
        <p className="text-xl tracking-widest uppercase mb-3" style={{ color: '#c41e3a', letterSpacing: '0.2em' }}>
          Experience</p>
        <p className="mb-14" style={{ color: '#888', fontSize: '0.82rem', fontWeight: 300 }}>
          Click any entry to expand details.</p>

        <div style={{ borderTop: '1px solid #1a1a1a' }}>
          {experience.map((e, i) => {
            const isOpen = expanded === i;
            return (
              <div key={i} className="cursor-pointer" style={{ borderBottom: '1px solid #1a1a1a' }} onClick={() => setExpanded(isOpen ? null : i)}>
                <div className="grid grid-cols-12 gap-8 py-7">
                  <div className="col-span-12 md:col-span-3">
                    <span className="text-md" style={{ color: '#c41e3a', letterSpacing: '0.04em' }}>{e.duration}</span>
                  </div>
                  <div className="col-span-12 md:col-span-9 flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium mb-1" style={{ color: '#e2e2e2', fontSize: '0.95rem' }}>{e.title}</p>
                      <p style={{ color: '#b0b0b0', fontSize: '0.85rem', fontWeight: 300 }}>{e.org}</p>
                      <p style={{ color: '#777', fontSize: '0.8rem', fontWeight: 300, marginTop: 2 }}>{e.location}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 mt-1">
                      {e.link && (
                        <a href={e.link} target="_blank" rel="noopener noreferrer" className="transition-colors duration-200" style={{ color: '#555' }} onMouseEnter={(ev) => (ev.currentTarget.style.color = '#c41e3a')} onMouseLeave={(ev) => (ev.currentTarget.style.color = '#555')} onClick={(ev) => ev.stopPropagation()}>
                          <ExternalLink size={14} />
                        </a>
                      )}
                      <ChevronDown size={14} className="transition-all duration-300" style={{ color: isOpen ? '#c41e3a' : '#555', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden transition-all duration-400" style={{ maxHeight: isOpen ? '900px' : '0px', opacity: isOpen ? 1 : 0 }}>
                  <div className="grid grid-cols-12 gap-8 pb-8 pt-2">
                    <div className="col-span-12 md:col-span-3" />
                    <div className="col-span-12 md:col-span-9">
                      {e.description.map((line, di) => (
                        <div key={di} className="flex gap-3 mb-3">
                          <span className="shrink-0 mt-2" style={{ width: '6px', height: '6px', background: '#8b1a1a', display: 'block' }} />
                          <p className="leading-relaxed" style={{ color: '#a8a8a8', fontSize: '0.85rem', fontWeight: 400 }}>{line}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
