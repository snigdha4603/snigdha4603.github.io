import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data';
import { useState } from 'react';

const categories = ['All', 'Transportation', 'Machine Learning', 'Climate Research', 'Data Science', 'Urban Simulation', 'Urban Finance'];

export function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" style={{ background: '#080808', borderTop: '1px solid #1a1a1a' }}>
      <div className="max-w-7xl mx-auto px-8 py-28">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <p
            className="text-xl tracking-widest uppercase"
            style={{ color: '#c41e3a', letterSpacing: '0.2em' }}
          >
            Projects
          </p>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="text-xs tracking-widest uppercase px-3 py-1.5 transition-all duration-200"
                style={{
                  letterSpacing: '0.12em',
                  color: active === cat ? '#fff' : '#555',
                  background: active === cat ? '#8b1a1a' : 'transparent',
                  border: `1px solid ${active === cat ? '#8b1a1a' : '#2a2a2a'}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {filtered.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  category,
  link,
}: {
  title: string;
  description: string;
  tags: string[];
  category: string;
  link: string | null;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative p-8 transition-all duration-300 cursor-default"
      style={{
        border: '1px solid #1a1a1a',
        marginTop: '-1px',
        marginLeft: '-1px',
        background: hovered ? '#0d0d0d' : 'transparent',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-start justify-between mb-4">
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: '#c41e3a', letterSpacing: '0.14em', fontSize: '0.65rem' }}
        >
          {category}
        </span>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 shrink-0"
            style={{ color: hovered ? '#c41e3a' : '#333' }}
            onClick={(e) => e.stopPropagation()}
          >
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>

      <h3
        className="font-serif mb-3 leading-snug"
        style={{ color: '#d0d0d0', fontSize: '1.05rem', fontWeight: 400 }}
      >
        {title}
      </h3>

      <p
        className="mb-6 leading-relaxed"
        style={{ color: '#555', fontSize: '0.85rem', fontWeight: 300 }}
      >
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1"
            style={{ color: '#444', border: '1px solid #1e1e1e', letterSpacing: '0.04em' }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
