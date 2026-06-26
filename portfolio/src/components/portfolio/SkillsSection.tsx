import { motion } from 'framer-motion';
import { Layout, Server, Code, Database, Wrench, Cloud, Brain } from 'lucide-react';

const categories = [
  {
    icon: Layout,
    title: 'Frontend',
    skills: [
      { name: 'JavaScript', level: 92 },
      { name: 'Responsive UI', level: 88 },
    ],
  },
  {
    icon: Server,
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'REST APIs', level: 82 },
    ],
  },
  {
    icon: Code,
    title: 'Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 85 },
    ],
  },
  {
    icon: Database,
    title: 'Databases',
    skills: [
      { name: 'MySQL', level: 82 },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools',
    skills: [
      { name: 'GitHub', level: 90 },
      { name: 'Unity', level: 85 },
    ],
  },
  {
    icon: Cloud,
    title: 'Data Engineering',
    skills: [
      { name: 'Data Analytics', level: 80 },
    ],
  },
  {
    icon: Brain,
    title: 'AI & Emerging Tech',
    skills: [
      { name: 'Quantum Computing', level: 70 },
      { name: 'Prompt Engineering', level: 82 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wider uppercase">
            My Stack
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text-primary">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A versatile toolkit built across web, games, and quantum systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.06 }}
              className="glow-card glass-card p-6 group hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <cat.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-base">{cat.title}</h3>
              </div>
              <div className="space-y-3">
                {cat.skills.map((s, i) => (
                  <div key={s.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-foreground/90">{s.name}</span>
                      <span className="text-xs text-accent font-semibold">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;