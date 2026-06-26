import { ArrowRight, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Roadmap'],
    Company: ['About', 'Blog', 'Careers', 'Press', 'Partners'],
    Resources: ['Documentation', 'Tutorials', 'Community', 'Support', 'Status'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="py-16 lg:py-24 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Newsletter */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Subscribe to our newsletter for the latest updates, tips, and exclusive offers.
            </p>
            <form className="flex gap-3 max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button variant="hero">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </form>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-foreground mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display font-bold text-primary-foreground text-lg">
              N
            </div>
            <span className="text-muted-foreground text-sm">
              © 2026 Nexus. All rights reserved.
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-xl bg-secondary hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
