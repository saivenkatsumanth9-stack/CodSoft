import { motion } from 'framer-motion';
import { Layers, Database, Brain, Atom } from 'lucide-react';

const learning = [
  {
    icon: Layers,
    title: 'Full Stack Development',
    desc: 'Deepening React, Node.js, and database design while shipping production-grade interfaces.',
    progress: 78,
    tag: 'Building',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    desc: 'Learning pipelines, ETL, warehousing and turning messy data into reliable systems.',
    progress: 55,
    tag: 'Exploring',
  },
  {
    icon: Brain,
    title: 'AI & Automation',
    desc: 'Experimenting with LLMs, agents and automation workflows for real-world problems.',
    progress: 62,
    tag: 'Practicing',
  },
  {
    icon: Atom,
    title: 'Quantum Computing',
    desc: 'Studying quantum algorithms and circuits with Qiskit — the future of computation.',
    progress: 35,
    tag: 'Researching',
  },
];

const LearningJourneySection = () => {
  return (
    <section id="learning" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-1/3 -left-32 w-[420px] h-[420px] bg-primary/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[360px] h-[360px] bg-accent/10 rounded-full blur-[140px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wider uppercase">
            Currently Exploring
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text-primary">Learning Journey</span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
            Always learning, always building. These are the domains I am actively investing in right now.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
          {learning.map((l, i) => (
            <motion.div
              key={l.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="glow-card group relative glass-card p-6 lg:p-7 overflow-hidden hover:shadow-glow hover:-translate-y-1 transition-all duration-500"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative flex items-start justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 shadow-glow">
                  <l.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-accent px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20">
                  {l.tag}
                </span>
              </div>

              <h3 className="relative font-display text-xl font-semibold mb-2">{l.title}</h3>
              <p className="relative text-muted-foreground text-sm leading-relaxed mb-5">
                {l.desc}
              </p>

              <div className="relative">
                <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-1.5">
                  <span>Progress</span>
                  <span className="text-foreground font-medium">{l.progress}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${l.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.2 + i * 0.08, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent shadow-glow"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningJourneySection;