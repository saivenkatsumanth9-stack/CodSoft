import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socials = [
    { Icon: Github, href: 'https://github.com/saivenkatsumanth9-stack', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/sai-venkat-sumanth-1217013a5/', label: 'LinkedIn' },
    { Icon: Mail, href: 'mailto:saivenkatsumanth9@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-12 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display font-bold text-primary-foreground">
              S
            </div>
            <div>
              <p className="font-display font-semibold text-foreground">Peddi Sai Venkat Sumanth</p>
              <p className="text-xs text-muted-foreground">© 2026 — Built with <Heart className="inline w-3 h-3 text-primary fill-primary" /> & React</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-glow transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;