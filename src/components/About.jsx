import { motion } from 'framer-motion';
import { CheckCircle2, GraduationCap, Rocket, Target } from 'lucide-react';
import SectionTitle from './SectionTitle';

const cards = [
  {
    icon: GraduationCap,
    title: 'Education',
    text: 'B.Tech Information Technology student with strong interest in full stack development.',
  },
  {
    icon: Rocket,
    title: 'Strength',
    text: 'Quick learner who builds practical projects and improves through daily coding practice.',
  },
  {
    icon: Target,
    title: 'Goal',
    text: 'To join a software team, contribute to real projects and grow as a reliable developer.',
  },
];

const points = [
  'Good knowledge of React, JavaScript, Tailwind CSS and responsive UI development.',
  'Backend practice with Node.js, Express.js, REST APIs, JWT authentication and MongoDB.',
  'Project experience with Docker, Git, GitHub, Postman and basic AWS EC2 deployment.',
  'Built a real-world Tailor Shop Management System inspired by a practical business need.',
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="container-section">
        <SectionTitle
          eyebrow="About Me"
          title="A fresher developer with real-world project thinking."
          description="I focus on building useful applications with clean UI, secure backend APIs and simple user experience."
        />

        <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-[2rem] p-7"
          >
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-sky-300/80">Profile</p>
            <h3 className="mt-4 text-3xl font-black text-white">Poovarasan</h3>
            <p className="mt-4 leading-8 text-slate-300">
              I am a B.Tech Information Technology student and fresher Full Stack Developer.
              I have hands-on knowledge in React, Node.js, Express, MongoDB, JavaScript,
              Tailwind CSS, Git, Docker and basic AWS deployment. I enjoy creating practical
              applications that help users manage their work faster and better.
            </p>

            <div className="mt-7 grid gap-4">
              {cards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-400/10 text-sky-200">
                        <Icon size={22} />
                      </span>
                      <h4 className="font-black text-white">{card.title}</h4>
                    </div>
                    <p className="text-sm leading-7 text-slate-400">{card.text}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-[2rem] p-7"
          >
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-fuchsia-300/80">Why hire me?</p>
            <h3 className="mt-4 text-3xl font-black text-white">I can learn fast and build with ownership.</h3>
            <p className="mt-4 leading-8 text-slate-300">
              I may be a fresher, but I have built complete project flows like customer management,
              order management, authentication, protected routes, payment status and dashboard logic.
              That makes me ready to understand real product requirements quickly.
            </p>

            <div className="mt-8 grid gap-4">
              {points.map((point) => (
                <div key={point} className="flex gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                  <CheckCircle2 className="mt-1 shrink-0 text-emerald-300" size={21} />
                  <p className="leading-7 text-slate-300">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
