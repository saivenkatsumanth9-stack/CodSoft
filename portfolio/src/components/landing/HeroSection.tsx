import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const handleAuthClick = () => {
    window.open('/auth', '_blank');
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-highlight" />
            <span className="text-sm font-medium text-muted-foreground">
              Introducing Nexus 2.0 — The Future is Here
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in delay-100">
            Build the Future with{' '}
            <span className="gradient-text-primary">
              Next-Gen
            </span>{' '}
            Innovation
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in delay-200">
            Transform your ideas into reality with our cutting-edge platform. 
            We combine AI-powered tools with elegant design to help you build 
            extraordinary digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-300">
            <Button variant="hero" size="xl" onClick={handleAuthClick}>
              Start Building Free
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button variant="glass" size="xl">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50 animate-fade-in delay-400">
            <div className="text-center">
              <p className="font-display text-3xl sm:text-4xl font-bold gradient-text-primary">10K+</p>
              <p className="text-sm text-muted-foreground mt-1">Active Users</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl sm:text-4xl font-bold gradient-text-primary">99.9%</p>
              <p className="text-sm text-muted-foreground mt-1">Uptime SLA</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl sm:text-4xl font-bold gradient-text-primary">500+</p>
              <p className="text-sm text-muted-foreground mt-1">Projects Built</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
