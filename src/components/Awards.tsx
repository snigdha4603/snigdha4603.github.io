import { awards } from '../data';

export function Awards() {
  return (
    <section id="awards" style={{ background: '#080808', borderTop: '1px solid #1a1a1a' }}>
      <div className="max-w-7xl mx-auto px-8 py-28">
        <p
          className="text-xl tracking-widest uppercase mb-14"
          style={{ color: '#c41e3a', letterSpacing: '0.2em' }}
        >
          Recognition
        </p>

        <div className="max-w-4xl">
          <div style={{ borderTop: '1px solid #1a1a1a' }}>
            {awards.map((award, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-8 py-7 group"
                style={{ borderBottom: '1px solid #1a1a1a' }}
              >
                <div className="col-span-12 md:col-span-2">
                  <span
                    className="text-md"
                    style={{ color: '#c41e3a', fontSize: '1.1rem', fontWeight: 400 }}
                  >
                    {award.year}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-10">
                  <p
                    className="mb-1"
                    style={{ color: '#d0d0d0', fontSize: '0.95rem', fontWeight: 400 }}
                  >
                    {award.title}
                  </p>
                  <p style={{ color: '#555', fontSize: '0.85rem', fontWeight: 300 }}>
                    {award.org}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
