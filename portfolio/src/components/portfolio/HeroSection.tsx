import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, ArrowDown, Sparkles, Terminal } from 'lucide-react';

const roles = [
  'Full Stack Developer',
  'Data Engineering Enthusiast',
  'AI & Quantum Computing Explorer',
  'Problem Solver',
];

const HeroSection = () => {
  const [text, setText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIdx];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = role.slice(0, text.length + 1);
        setText(next);
        if (next === role) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = role.slice(0, text.length - 1);
        setText(next);
        if (next === '') {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden py-24 lg:py-12">
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* LEFT — content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground tracking-wide">
                Available for new opportunities, innovation & work
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-accent font-medium text-sm tracking-[0.3em] uppercase mb-3 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Hello, I am
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.2rem] font-bold leading-[1.05] tracking-tight mb-5"
            >
              Sumanth<span className="text-primary">.</span>
              <br />
              <span className="gradient-text-primary">Building the future.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-9 mb-5 font-display text-lg sm:text-xl md:text-2xl"
            >
              <span className="text-muted-foreground">I am a </span>
              <span className="gradient-text-primary font-semibold">{text}</span>
              <span className="text-accent animate-pulse">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mb-9 leading-relaxed"
            >
              Passionate developer crafting modern full-stack applications, exploring
              data analytics, Unity game development, and the frontier of quantum
              computing — with a constant drive to learn and ship.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <a href="/resume.png" download="Peddi_Sai_Venkat_Sumanth_Resume.png">
                  <Download className="w-5 h-5" /> Resume
                </a>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex items-center gap-3 mt-8 lg:hidden"
            >
              {[
                { Icon: Github, href: 'https://github.com/saivenkatsumanth9-stack', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/sai-venkat-sumanth-1217013a5/', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:saivenkatsumanth9@gmail.com', label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-glow transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Holographic terminal card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, type: 'spring' }}
            className="relative hidden md:block"
            style={{ perspective: 1200 }}
          >
            {/* Floating glow rings */}
            <div className="absolute -inset-10 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-3xl rounded-full" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-[2.5rem] border border-primary/20"
            />

            {/* Terminal card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative glass-card p-1 overflow-hidden shadow-glow"
            >
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="flex items-center gap-2 ml-3 text-xs text-muted-foreground">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>sumanth@portfolio: ~</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                <p className="text-muted-foreground">
                  <span className="text-accent">$</span> whoami
                </p>
                <p className="text-foreground/90 mb-3">peddi-sai-venkat-sumanth</p>

                <p className="text-muted-foreground">
                  <span className="text-accent">$</span> cat profile.json
                </p>
                <pre className="text-foreground/90 text-[12.5px] whitespace-pre-wrap mb-3">
{`{
  "role": "Full Stack Developer",
  "stack": ["React", "Node", "Python", "Java"],
  "exploring": ["Quantum", "AI", "Data"],
  "status": "open_to_work"
}`}
                </pre>

                <p className="text-muted-foreground">
                  <span className="text-accent">$</span> echo $MISSION
                </p>
                <p className="gradient-text-primary font-semibold">
                  Build. Learn. Innovate.
                  <span className="text-accent animate-pulse">▍</span>
                </p>
              </div>
            </motion.div>

            {/* Floating tech chips */}
            {[
              { label: 'React', top: '8%', left: '-8%', delay: 0 },
              { label: 'Python', top: '60%', left: '-12%', delay: 0.8 },
              { label: 'Quantum', top: '20%', right: '-10%', delay: 0.4 },
              { label: 'Unity', top: '75%', right: '-6%', delay: 1.2 },
            ].map((chip) => (
              <motion.div
                key={chip.label}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: chip.delay, ease: 'easeInOut' }}
                className="absolute glass px-3 py-1.5 rounded-full text-xs font-medium text-foreground/90 border border-primary/30 shadow-glow"
                style={{ top: chip.top, left: (chip as any).left, right: (chip as any).right }}
              >
                {chip.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;