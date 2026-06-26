import { Button } from '@/components/ui/button';
import { ArrowRight, Paintbrush, Code2, Megaphone, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that delight users and drive engagement.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    gradient: 'from-primary to-indigo-400',
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Scalable, performant applications built with modern technologies.',
    features: ['Web Apps', 'Mobile Apps', 'APIs', 'Cloud Infrastructure'],
    gradient: 'from-accent to-cyan-400',
  },
  {
    icon: Megaphone,
    title: 'Marketing',
    description: 'Strategic campaigns that amplify your brand and accelerate growth.',
    features: ['SEO/SEM', 'Content Strategy', 'Social Media', 'Analytics'],
    gradient: 'from-highlight to-amber-400',
  },
  {
    icon: BarChart3,
    title: 'Consulting',
    description: 'Expert guidance to help you make informed technology decisions.',
    features: ['Tech Strategy', 'Digital Transformation', 'Process Optimization', 'Team Training'],
    gradient: 'from-primary to-accent',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wider uppercase">
            Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            End-to-End Solutions for Your{' '}
            <span className="gradient-text-primary">Business</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to launch and beyond, we provide comprehensive services
            to bring your vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card p-8 lg:p-10 hover:border-primary/50 transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
