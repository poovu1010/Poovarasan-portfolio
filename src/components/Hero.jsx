import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Layers3,
  Mail,
  Rocket,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { profile } from '../data/portfolio';

const quickStats = [
  { label: 'Projects', value: '04+', icon: BriefcaseBusiness },
  { label: 'Stack', value: 'MERN', icon: Layers3 },
  { label: 'Focus', value: 'Backend + UI', icon: Code2 },
  { label: 'Mindset', value: 'Fast Learner', icon: TrendingUp },
];

const skills = ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind','ODM & ORM','Docker','AWS EC2 & VPC'];

export default function Hero() {
  const [cardStyle, setCardStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
  });
  const [shineStyle, setShineStyle] = useState({ opacity: 0 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((centerY - y) / centerY) * 4;
    const rotateY = ((x - centerX) / centerX) * 5;

    setCardStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
    setShineStyle({
      opacity: 1,
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.18), transparent 34%)`,
    });
  };

  const handleMouseLeave = () => {
    setCardStyle({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' });
    setShineStyle({ opacity: 0 });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-black pt-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_82%_44%,rgba(255,255,255,0.07),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />
      <div className="absolute -left-40 top-16 h-96 w-96 rounded-full border border-white/10" />
      <div className="absolute -right-52 bottom-10 h-[34rem] w-[34rem] rounded-full border border-white/10" />
      <div className="absolute right-0 top-28 h-[75vh] w-[38vw] skew-x-[-18deg] bg-white/[0.045]" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <div className="container-section relative z-10 grid items-center gap-12 py-12 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-bold text-white/85 backdrop-blur-xl"
          >
            <Sparkles size={17} /> Available for Full Stack Developer roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06 }}
            className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Hi, I&apos;m <br />
            <span className="text-white/90">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-7 h-1 w-32 origin-left rounded-full bg-white"
          />

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.14 }}
            className="mt-8 text-3xl font-light tracking-tight text-white sm:text-5xl"
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="mt-4 text-lg font-semibold text-white/60 sm:text-xl"
          >
            MERN Stack • React • Node.js • JavaScript
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg"
          >
            B.Tech IT student and aspiring full stack developer focused on building clean,
            user-friendly web applications with React, Node.js, Express, and MongoDB.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.38 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm font-black text-black shadow-[0_24px_80px_rgba(255,255,255,0.14)] transition hover:-translate-y-1 hover:bg-white/90"
            >
              View Projects <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/[0.04] px-6 py-4 text-sm font-black text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/45 hover:bg-white/10"
            >
              Download Resume <Download size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/[0.04] px-6 py-4 text-sm font-black text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/45 hover:bg-white/10"
            >
              Contact Me <Mail size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.46 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-bold text-white/65 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/35 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.16 }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div className="absolute -inset-10 rounded-[3rem] bg-white/[0.05] blur-3xl" />

          <div
            className="group relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/[0.055] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl transition duration-300"
            style={cardStyle}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="pointer-events-none absolute inset-0 transition-opacity duration-300" style={shineStyle} />
            <div className="absolute left-7 top-7 z-20 rounded-full border border-white/15 bg-black/45 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white/80 backdrop-blur-xl">
              Portfolio 2026
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-white/12 via-white/[0.04] to-black">
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/15 to-transparent" />
              <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black via-black/70 to-transparent" />
              <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-white/10 to-transparent" />

              <img
                src="/poovarasan-photo.png"
                alt="Poovarasan"
                className="relative z-10 mx-auto max-h-[610px] w-full object-contain object-bottom grayscale contrast-110 drop-shadow-[0_0_34px_rgba(255,255,255,0.22)] transition duration-500 group-hover:scale-[1.025]"
              />
            </div>

            <div className="relative z-20 -mt-20 grid gap-3 rounded-[1.8rem] border border-white/10 bg-black/55 p-4 backdrop-blur-2xl sm:grid-cols-2">
              <div className="sm:col-span-2">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">Recruiter Snapshot</p>
                <h2 className="mt-1 text-2xl font-black text-white">MERN Developer Profile</h2>
              </div>
              {quickStats.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition hover:-translate-y-1 hover:bg-white/[0.08]">
                    <Icon size={20} className="mb-3 text-white/80" />
                    <p className="text-xl font-black text-white">{item.value}</p>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/45">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-5 top-24 hidden rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-sm font-black text-white shadow-2xl backdrop-blur-xl sm:block"
          >
            <Rocket size={18} className="mb-1" />
            Job Ready
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-4 bottom-40 hidden rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-sm font-black text-white shadow-2xl backdrop-blur-xl sm:block"
          >
            Clean UI + APIs
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}