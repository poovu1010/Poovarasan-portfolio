import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import GlobeCanvas from '../canvas/GlobeCanvas';
import SectionTitle from './SectionTitle';
import { contactItems } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const ownerEmail =
    contactItems
      .find((item) => item.href?.startsWith('mailto:'))
      ?.href.replace('mailto:', '') || 'yourmail@gmail.com';

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact - ${formData.name}`);

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${ownerEmail}&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank');

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="container-section">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s build something useful together."
          description="Use this section to show recruiters that you are reachable, professional and ready for opportunities."
        />

        <div className="grid gap-6 lg:grid-cols-[.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glass-card overflow-hidden rounded-[2rem] p-4"
          >
            <div className="h-[360px] rounded-[1.5rem] border border-white/10 bg-slate-950/60 sm:h-[480px]">
              <GlobeCanvas />
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-sky-300/35 hover:bg-white/[0.08]"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-sky-400/10 text-sky-200">
                        <Icon size={20} />
                      </span>
                      <p className="font-black text-white">{item.label}</p>
                    </div>

                    <p className="truncate text-sm text-slate-400">
                      {item.value}
                    </p>
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-[2rem] p-7"
            onSubmit={handleSubmit}
          >
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-sky-300/80">
              Message
            </p>

            <h3 className="mt-4 text-3xl font-black text-white">
              Send me a message
            </h3>

            <p className="mt-4 leading-8 text-slate-300">
              Fill the form and click send. It will open Gmail with your message ready to send.
            </p>

            <div className="mt-8 grid gap-5">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-300">
                  Your Name
                </span>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/50"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-300">
                  Email Address
                </span>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/50"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-300">
                  Message
                </span>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about the opportunity..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/50"
                />
              </label>

              <button
                type="submit"
                className="primary-btn w-full justify-center sm:w-fit"
              >
                Send Message <Send size={18} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}