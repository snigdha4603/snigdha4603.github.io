import { useState } from 'react';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { news } from '../data';

const tags = ['All', 'Leadership', 'Fellowship', 'Award', 'Event', 'Conference', 'Outreach'];

const tagColors: Record<string, string> = {
  Leadership: '#8b1a1a',
  Fellowship: '#8b1a1a',
  Award: '#8b1a1a',
  Event: '#8b1a1a',
  Conference: '#8b1a1a',
  Outreach: '#8b1a1a',
};

export function NewsUpdates() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [activeTag, setActiveTag] = useState('All');

  const filtered =
    activeTag === 'All' ? news : news.filter((n) => n.tag === activeTag);

  // Show newest first
  const sorted = [...filtered].reverse();

  return (
    <section id="news" style={{ background: '#060606', borderTop: '1px solid #1a1a1a' }}>
      <div className="max-w-7xl mx-auto px-8 py-28">
        <div className="flex items-end justify-between mb-3 flex-wrap gap-6">
          <p
            className="text-xl tracking-widest uppercase"
            style={{ color: '#c41e3a', letterSpacing: '0.2em' }}
          >
            News &amp; Updates
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setActiveTag(tag);
                  setExpanded(null);
                }}
                className="text-xs tracking-widest uppercase px-3 py-1.5 transition-all duration-200"
                style={{
                  letterSpacing: '0.12em',
                  color: activeTag === tag ? '#fff' : '#555',
                  background: activeTag === tag ? '#8b1a1a' : 'transparent',
                  border: `1px solid ${activeTag === tag ? '#8b1a1a' : '#2a2a2a'}`,
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <p className="mb-14" style={{ color: '#888', fontSize: '0.82rem', fontWeight: 300 }}>
          Click any entry to expand details.
        </p>

        <div style={{ borderTop: '1px solid #1a1a1a' }}>
          {sorted.map((item, i) => {
            const isOpen = expanded === i;
            const tagColor = tagColors[item.tag] ?? '#8b1a1a';

            return (
              <div
                key={i}
                className="cursor-pointer"
                style={{ borderBottom: '1px solid #1a1a1a' }}
                onClick={() => setExpanded(isOpen ? null : i)}
              >
                <div className="grid grid-cols-12 gap-8 py-7">
                  {/* Date column */}
                  <div className="col-span-12 md:col-span-3 flex flex-col gap-2">
                    <span
                      className="text-md"
                      style={{ color: '#c41e3a', letterSpacing: '0.04em' }}
                    >
                      {item.date}
                    </span>
                    <span
                      className="text-xs tracking-widest uppercase self-start px-2 py-0.5"
                      style={{
                        color: '#ccc',
                        background: tagColor,
                        letterSpacing: '0.12em',
                        fontSize: '0.6rem',
                        opacity: 0.85,
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Content column */}
                  <div className="col-span-12 md:col-span-9 flex items-start justify-between gap-4">
                    <p
                      className="font-medium leading-snug"
                      style={{ color: '#e2e2e2', fontSize: '0.95rem' }}
                    >
                      {item.headline}
                    </p>
                    <div className="flex items-center gap-3 shrink-0 mt-0.5">
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors duration-200"
                          style={{ color: '#555' }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = '#c41e3a')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                      <ChevronDown
                        size={14}
                        className="transition-all duration-300"
                        style={{
                          color: isOpen ? '#c41e3a' : '#555',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Expanded body */}
                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{
                    maxHeight: isOpen ? '600px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="grid grid-cols-12 gap-8 pb-8 pt-2">
                    <div className="col-span-12 md:col-span-3" />
                    <div className="col-span-12 md:col-span-9">
                      <div className="flex gap-3">
                        <span
                          className="shrink-0 mt-2"
                          style={{
                            width: '6px',
                            height: '6px',
                            background: '#8b1a1a',
                            display: 'block',
                            marginTop: '6px',
                          }}
                        />
                        <p
                          className="leading-relaxed"
                          style={{ color: '#a8a8a8', fontSize: '0.85rem', fontWeight: 400 }}
                        >
                          {item.body}
                        </p>
                      </div>
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
