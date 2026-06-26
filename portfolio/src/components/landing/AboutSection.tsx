import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const highlights = [
  'Founded by industry veterans with 20+ years experience',
  'Backed by leading venture capital firms',
  'Trusted by Fortune 500 companies worldwide',
  'Award-winning customer support team',
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden bg-secondary/20">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wider uppercase">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              We're on a Mission to{' '}
              <span className="gradient-text-primary">Transform</span> Digital Innovation
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Nexus, we believe that the best technology should be accessible to everyone. 
              Our platform combines cutting-edge AI with intuitive design, enabling teams of 
              all sizes to build extraordinary digital experiences without complexity.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-10">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Learn Our Story
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="glass-card p-8 lg:p-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                  <p className="font-display text-4xl lg:text-5xl font-bold gradient-text-primary">8+</p>
                  <p className="text-muted-foreground text-sm mt-2">Years in Business</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20">
                  <p className="font-display text-4xl lg:text-5xl font-bold text-accent">150+</p>
                  <p className="text-muted-foreground text-sm mt-2">Team Members</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-highlight/20 to-highlight/5 border border-highlight/20">
                  <p className="font-display text-4xl lg:text-5xl font-bold text-highlight">50M+</p>
                  <p className="text-muted-foreground text-sm mt-2">API Requests/Day</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20">
                  <p className="font-display text-4xl lg:text-5xl font-bold gradient-text-primary">99.9%</p>
                  <p className="text-muted-foreground text-sm mt-2">Uptime Guarantee</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl blur-2xl opacity-50" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-accent to-highlight rounded-full blur-3xl opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
