import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="container-section">
        <SectionTitle
          eyebrow="Projects"
          title="Project work that shows practical MERN stack knowledge."
          description="These cards are written for recruiters: problem, stack, features and technical confidence."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.58, delay: index * 0.08 }}
                className="card-tilt glass-card group relative overflow-hidden rounded-[2rem] p-7 hover:border-fuchsia-300/35 hover:bg-white/[0.085]"
              >
                <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl transition group-hover:bg-fuchsia-400/20" />

                <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-start">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl bg-gradient-to-br from-sky-400/20 to-fuchsia-500/20 text-sky-100 shadow-glow">
                    <Icon size={30} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="mb-2 text-sm font-bold uppercase tracking-[0.26em] text-sky-300/75">{project.type}</p>
                    <h3 className="text-2xl font-black text-white sm:text-3xl">{project.title}</h3>
                    <p className="mt-4 leading-8 text-slate-300">{project.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.highlights.map((item) => (
                        <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-bold text-slate-200">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <a href={project.live} className="secondary-btn px-4 py-2 text-xs">
                        Live Demo <ExternalLink size={15} />
                      </a>
                      <a href={project.github} className="secondary-btn px-4 py-2 text-xs">
                        GitHub <GitBranch size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
