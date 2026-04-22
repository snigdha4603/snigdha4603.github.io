import { about } from '../data';

export function About() {
  return (
    <section id="about" style={{ background: '#080808', borderTop: '1px solid #1a1a1a' }}>
      <div className="max-w-7xl mx-auto px-8 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: label + bio */}
          <div className="lg:col-span-7">
            <p
              className="text-xl tracking-widest uppercase mb-10"
              style={{ color: '#c41e3a', letterSpacing: '0.2em' }}
            >
              About
            </p>
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="leading-relaxed"
                  style={{ 
                    color: i === 0 ? '#e0e0e0' : '#a0a0a0', 
                    fontSize: i === 0 ? '1.15rem' : '1rem', 
                    fontWeight: 400 
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Right: stats */}
          {/* Adjusted pt-14 to help line up the first stat with the first paragraph */}
          <div className="lg:col-span-5 lg:pt-14"> 
            <div className="grid grid-cols-2 gap-0">
              {about.stats.map((stat, i) => (
                <div
                  key={i}
                  className="py-8 px-6"
                  style={{
                    // Removes the border for the top row (index 0 and 1)
                    borderTop: i < 2 ? 'none' : '1px solid #1e1e1e',
                    borderLeft: i % 2 !== 0 ? '1px solid #1e1e1e' : 'none',
                  }}
                >
                  <div
                    className="font-serif mb-2"
                    style={{ fontSize: '2.8rem', color: '#c41e3a', lineHeight: 1, fontWeight: 400 }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs tracking-widest uppercase"
                    style={{ color: '#555', letterSpacing: '0.12em' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
