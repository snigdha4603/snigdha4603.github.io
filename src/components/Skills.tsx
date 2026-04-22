import { skills } from '../data';

export function Skills() {
  return (
    <section id="skills" style={{ background: '#060606', borderTop: '1px solid #1a1a1a' }}>
      <div className="max-w-7xl mx-auto px-8 py-28">
        <p
          className="text-xl tracking-widest uppercase mb-14"
          style={{ color: '#c41e3a', letterSpacing: '0.2em' }}
        >
          Skills
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ borderTop: '1px solid #1a1a1a', borderLeft: '1px solid #1a1a1a' }}
        >
          {skills.map((group, i) => (
            <div
              key={i}
              className="p-8"
              style={{ borderRight: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}
            >
              <p
                className="text-xs tracking-widest uppercase mb-5"
                style={{ color: '#555', letterSpacing: '0.16em' }}
              >
                {group.category}
              </p>
              <div className="space-y-2.5">
                {group.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span
                      className="shrink-0"
                      style={{ width: '4px', height: '4px', background: '#8b1a1a', display: 'block' }}
                    />
                    <span style={{ color: '#888', fontSize: '0.875rem', fontWeight: 300 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
