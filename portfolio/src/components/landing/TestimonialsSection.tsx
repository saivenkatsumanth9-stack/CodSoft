import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at TechFlow',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    content: 'Nexus transformed how our team builds products. The speed and quality improvements have been phenomenal. We shipped features 3x faster.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Founder at StartupLab',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: 'The best investment we made for our startup. The platform is intuitive, powerful, and the support team is incredibly responsive.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Lead at Scale Inc',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: 'From idea to production in weeks, not months. Nexus gave us the competitive edge we needed to disrupt our market.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-32 relative overflow-hidden bg-secondary/20">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-highlight/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Loved by <span className="gradient-text-primary">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of satisfied customers who've transformed their businesses with Nexus.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card p-8 relative group hover:border-primary/50 transition-all duration-500"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-highlight text-highlight" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground text-lg leading-relaxed mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logos Section */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-8 text-sm uppercase tracking-wider">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 opacity-50">
            {['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma'].map((company) => (
              <span key={company} className="font-display text-2xl font-bold text-muted-foreground">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
