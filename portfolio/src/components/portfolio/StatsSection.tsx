import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FolderGit2, Cpu, Compass, Infinity as InfinityIcon } from 'lucide-react';

type Stat = {
  icon: typeof FolderGit2;
  value: number;
  suffix?: string;
  display?: string;
  label: string;
  sub: string;
};

const stats: Stat[] = [
  { icon: FolderGit2, value: 15, suffix: '+', label: 'Projects Built', sub: 'Shipped & in progress' },
  { icon: Cpu, value: 12, suffix: '+', label: 'Technologies Explored', sub: 'Languages, frameworks, tools' },
  { icon: Compass, value: 4, label: 'Domains Learning', sub: 'Full Stack · Data · AI · Quantum' },
  { icon: InfinityIcon, value: 0, display: '∞', label: 'Learning Mindset', sub: 'Continuous growth, always' },
];

const Counter = ({ to, suffix = '', display }: { to: number; suffix?: string; display?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || display) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, display]);

  return (
    <span ref={ref}>
      {display ?? `${n}${suffix}`}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glow-card group relative glass-card p-5 lg:p-6 overflow-hidden hover:shadow-glow hover:-translate-y-1 transition-all duration-500"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <s.icon className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
              <p className="relative font-display text-3xl lg:text-4xl font-bold gradient-text-primary leading-none">
                <Counter to={s.value} suffix={s.suffix} display={s.display} />
              </p>
              <p className="relative mt-2 text-sm font-medium text-foreground">{s.label}</p>
              <p className="relative text-[11px] text-muted-foreground mt-0.5">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;