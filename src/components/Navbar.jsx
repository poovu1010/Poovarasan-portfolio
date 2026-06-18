import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navLinks } from '../data/portfolio';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-slate-950/75 shadow-lg backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="container-section flex h-20 items-center justify-between">
        <a href="#home" className="group flex items-center gap-3" onClick={closeMenu}>
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-sky-300/25 bg-sky-400/10 text-lg font-black text-sky-200 shadow-glow">
            P
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-black uppercase tracking-[0.26em] text-white">Poovarasan</span>
            <span className="block text-xs text-slate-400">Full Stack Developer</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-xl lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden primary-btn px-5 py-2.5 lg:inline-flex">
          Hire Me
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/10 text-white lg:hidden"
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {isOpen && (
        <div className="container-section pb-5 lg:hidden">
          <div className="glass-card rounded-3xl p-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
