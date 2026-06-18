import { motion } from 'framer-motion';
import { BriefcaseBusiness, CheckCircle2 } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-24">
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-fuchsia-500/10 soft-blur" />
      <div className="container-section relative z-10">
        <SectionTitle
          eyebrow="Experience"
          title="Internship experience with daily improvement mindset."
          description="This section presents learning, discipline and practical exposure in a clean timeline format."
        />

        <div className="mx-auto max-w-4xl">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.company}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-[2rem] p-7"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-3xl bg-sky-400/10 text-sky-200 shadow-glow">
                    <BriefcaseBusiness size={27} />
                  </span>
                  <div>
                    <h3 className="text-2xl font-black text-white">{item.role}</h3>
                    <p className="mt-1 font-semibold text-sky-200">{item.company}</p>
                  </div>
                </div>
                <span className="w-fit rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-slate-200">
                  {item.period}
                </span>
              </div>

              <p className="mt-6 leading-8 text-slate-300">{item.description}</p>

              <div className="mt-7 grid gap-4">
                {item.points.map((point) => (
                  <div key={point} className="flex gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                    <CheckCircle2 className="mt-1 shrink-0 text-emerald-300" size={20} />
                    <p className="leading-7 text-slate-300">{point}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
