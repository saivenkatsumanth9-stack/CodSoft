import { motion } from 'framer-motion';
import { GitBranch, Star, GitCommit, Users } from 'lucide-react';

const stats = [
  { icon: GitCommit, label: 'Total Commits', value: '1.2K+' },
  { icon: GitBranch, label: 'Repositories', value: '40+' },
  { icon: Star, label: 'Stars Earned', value: '120+' },
  { icon: Users, label: 'Followers', value: '80+' },
];

const GitHubStatsSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wider uppercase">
            Open Source
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            GitHub <span className="gradient-text-primary">Stats</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Building, shipping, and contributing in the open.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card glass-card p-6 text-center hover:shadow-glow hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent mx-auto flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <p className="font-display text-3xl font-bold gradient-text-primary mb-1">
                {s.value}
              </p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubStatsSection;