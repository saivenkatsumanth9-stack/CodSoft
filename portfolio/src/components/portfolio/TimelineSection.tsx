import { motion } from 'framer-motion';

const timeline = [
  {
    year: 'Next Goal',
    title: 'Internship & Real-World Building',
    desc: 'Targeting an internship to apply my skills on production systems and ship software that matters.',
  },
  {
    year: '2026 — Present',
    title: 'Quantum Computing & Data Analytics',
    desc: 'Exploring quantum algorithms with Qiskit and building intelligent data-driven analytics systems.',
  },
  {
    year: '2025',
    title: 'Web Development',
    desc: 'Mastered the MERN stack and shipped end-to-end web platforms with modern UI/UX practices.',
  },
  {
    year: '2024',
    title: 'Basics of Programming',
    desc: 'Built a strong foundation in C and Python, learning core programming concepts and problem solving.',
  },
  {
    year: '2023',
    title: 'Started My Journey',
    desc: 'First steps into technology — ignited a passion for building things that move, think, and solve.',
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] -translate-x-1/2 bg-accent/10 rounded-full blur-[150px]" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wider uppercase">
            Journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text-primary">Timeline</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          {timeline.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative mb-12 md:w-1/2 ${
                i % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'
              } pl-12 md:pl-0`}
            >
              <div
                className={`absolute top-2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent shadow-glow ${
                  i % 2 === 0
                    ? 'left-2 md:left-auto md:-right-2'
                    : 'left-2 md:-left-2'
                }`}
              />
              <div className="glass-card p-6 hover:shadow-glow transition-all duration-500">
                <p className="text-sm text-accent font-semibold mb-1">{t.year}</p>
                <h3 className="font-display text-xl font-semibold mb-2">{t.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;