import { useEffect, useState, useRef } from 'react';
import { personalInfo } from '../data';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Skills', href: '#skills' },
  { label: 'Awards', href: '#awards' },
  { label: 'Projects', href: '#projects' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(8,8,8,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid #1e1e1e' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-serif text-sm tracking-widest uppercase"
          style={{ color: '#c41e3a', letterSpacing: '0.18em' }}
        >
          SA
        </a>
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-widest uppercase transition-colors duration-200"
              style={{ color: '#bbb', letterSpacing: '0.12em' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f2f2f2')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#bbb')}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${personalInfo.email}`}
          className="hidden lg:block text-xs tracking-widest uppercase px-4 py-2 transition-all duration-200"
          style={{
            color: '#c41e3a',
            border: '1px solid #8b1a1a',
            letterSpacing: '0.14em',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#8b1a1a';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#c41e3a';
          }}
        >
          Get in Touch
        </a>

        <button
          className="lg:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-5 h-px transition-all" style={{ background: menuOpen ? '#c41e3a' : '#aaa', transform: menuOpen ? 'rotate(45deg) translateY(3px)' : 'none' }} />
          <span className="w-5 h-px transition-all" style={{ background: menuOpen ? '#c41e3a' : '#aaa', opacity: menuOpen ? 0 : 1 }} />
          <span className="w-5 h-px transition-all" style={{ background: menuOpen ? '#c41e3a' : '#aaa', transform: menuOpen ? 'rotate(-45deg) translateY(-3px)' : 'none' }} />
        </button>
      </div>

      {menuOpen && (
        <div
          ref={mobileRef}
          className="lg:hidden px-8 pb-6"
          style={{ background: 'rgba(8,8,8,0.98)', borderBottom: '1px solid #1e1e1e' }}
        >
          <div className="space-y-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block text-xs tracking-widest uppercase transition-colors duration-200"
                style={{ color: '#aaa', letterSpacing: '0.14em' }}
                onClick={() => setMenuOpen(false)}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#f2f2f2')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#aaa')}
              >
                {l.label}
              </a>
            ))}
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-block text-xs tracking-widest uppercase px-4 py-2 mt-2"
              style={{ color: '#c41e3a', border: '1px solid #8b1a1a', letterSpacing: '0.14em' }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
