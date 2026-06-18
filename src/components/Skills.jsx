import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-sky-500/10 soft-blur" />
      <div className="container-section relative z-10">
        <SectionTitle
          eyebrow="Skills"
          title="Tech stack shaped for full stack development."
          description="A clean skill layout that tells recruiters what I can build and where I am improving."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.article
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="card-tilt glass-card group rounded-[2rem] p-6 hover:border-sky-300/35 hover:bg-white/[0.09]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-3xl bg-gradient-to-br from-sky-400/20 to-fuchsia-500/20 text-sky-100 shadow-glow">
                    <Icon size={26} />
                  </span>
                  
                </div>

                <h3 className="text-2xl font-black text-white">{skill.title}</h3>
                <p className="mt-3 min-h-16 text-sm leading-7 text-slate-400">{skill.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
