import { motion } from 'framer-motion';
import { Code2, Gamepad2, Atom, BarChart3, FolderGit2, Cpu, Award, GitCommit } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    desc: 'Designing and shipping production-grade web apps with React, Node.js, and MySQL.',
  },
  {
    icon: Gamepad2,
    title: 'Unity Game Development',
    desc: 'Building immersive 3D experiences, interactive simulations, and gameplay systems.',
  },
  {
    icon: Atom,
    title: 'Quantum Computing',
    desc: 'Exploring quantum algorithms and circuits using Python and Java toolchains.',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    desc: 'Transforming raw data into meaningful insights and intelligent decision-making systems.',
  },
];

const stats = [
  { icon: FolderGit2, value: '15+', label: 'Projects Built' },
  { icon: Cpu, value: '12+', label: 'Technologies' },
  { icon: Award, value: '4', label: 'Certifications' },
  { icon: GitCommit, value: '1.2K+', label: 'Contributions' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wider uppercase">
              About Me
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Crafting the <span className="gradient-text-primary">future</span> of
              interactive software
            </h2>
            <div className="text-muted-foreground text-lg space-y-4 leading-relaxed">
              <p>
                I am <span className="text-foreground font-medium">Peddi Sai Venkat Sumanth</span>, a passionate and technology-driven developer with strong interests in Full Stack Development, Data Analytics, Quantum Computing, and Unity Game Development. I enjoy building modern, interactive, and user-focused applications while continuously exploring emerging technologies and innovative solutions.
              </p>
              <p>
                My technical expertise includes Python and Java, which I use to develop scalable applications, solve complex problems, and experiment with advanced computational concepts. Alongside software development, I am deeply interested in Data Analytics, where I enjoy transforming raw data into meaningful insights and intelligent decision-making systems.
              </p>
              <p>
                I am also actively exploring the fascinating field of Quantum Computing, learning how next-generation computational models can revolutionize problem-solving and future technologies. In addition, I work with Unity to create immersive and interactive game experiences, combining creativity with technical implementation.
              </p>
              <p>
                I am constantly learning, building projects, and improving my skills to become a versatile developer capable of working across modern software, analytics, gaming, and future computing technologies.
              </p>
              <blockquote className="relative mt-2 pl-5 border-l-2 border-primary/60 italic text-foreground/90">
                "Driven by continuous learning, experimentation, and hands-on building. I focus on improving through projects, exploring emerging technologies, and consistently developing real-world skills."
              </blockquote>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glow-card glass-card p-4 text-center hover:shadow-glow hover:-translate-y-1 transition-all duration-500"
                >
                  <s.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold gradient-text-primary">{s.value}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glow-card glass-card p-6 flex gap-5 hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                  <h.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-1">{h.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;