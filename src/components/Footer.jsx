import { GitBranch, Mail, Network } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-section flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-sky-300/25 bg-sky-400/10 text-lg font-black text-sky-200">
              P
            </span>
            <span>
              <span className="block font-black text-white">Poovarasan</span>
              <span className="text-sm text-slate-400">Full Stack Developer Portfolio</span>
            </span>
          </a>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
            Built with React, Vite, Tailwind CSS, Framer Motion and React Three Fiber.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex gap-3">
          <a href={`mailto:${profile.email}`} className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-slate-200 transition hover:text-sky-200">
            <Mail size={19} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-slate-200 transition hover:text-sky-200">
            <GitBranch size={19} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-slate-200 transition hover:text-sky-200">
            <Network size={19} />
          </a>
        </div>
      </div>

      <p className="container-section mt-8 text-sm text-slate-500">
        © {new Date().getFullYear()} Poovarasan. All rights reserved.
      </p>
    </footer>
  );
}
