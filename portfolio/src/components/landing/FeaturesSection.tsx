import { Zap, Shield, Rocket, Code, Layers, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built for speed with optimized performance that keeps your users engaged.',
    color: 'from-highlight to-amber-400',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and security protocols to protect your data.',
    color: 'from-primary to-indigo-400',
  },
  {
    icon: Rocket,
    title: 'Scale Infinitely',
    description: 'From startup to enterprise, our platform grows with your ambitions.',
    color: 'from-accent to-cyan-400',
  },
  {
    icon: Code,
    title: 'Developer First',
    description: 'Clean APIs and comprehensive documentation for seamless integration.',
    color: 'from-primary to-accent',
  },
  {
    icon: Layers,
    title: 'Modular Design',
    description: 'Pick and choose components that fit your unique requirements.',
    color: 'from-highlight to-primary',
  },
  {
    icon: Globe,
    title: 'Global CDN',
    description: 'Content delivered from edge locations worldwide for minimal latency.',
    color: 'from-accent to-primary',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wider uppercase">
            Features
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to{' '}
            <span className="gradient-text-primary">Succeed</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Powerful features designed to accelerate your development workflow
            and deliver exceptional results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass-card p-8 hover:border-primary/50 transition-all duration-500 neon-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-full h-full text-white" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
