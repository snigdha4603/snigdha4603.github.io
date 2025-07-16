import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="text-xl font-light text-white">
            Snigdha Anantharaju
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                data-interactive
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-6 py-2 border border-white/30 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300"
              data-interactive
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            data-interactive
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass rounded-lg mb-4 p-6">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                  onClick={() => setIsOpen(false)}
                  data-interactive
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block w-full text-center px-6 py-3 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 mt-6"
                onClick={() => setIsOpen(false)}
                data-interactive
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;