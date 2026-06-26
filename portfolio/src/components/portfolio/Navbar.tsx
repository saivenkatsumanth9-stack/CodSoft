import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download } from 'lucide-react';
import logo from '@/assets/psvs-logo.jpeg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <img
              src={logo}
              alt="PSVS logo"
              className="w-10 h-10 rounded-xl object-cover ring-1 ring-primary/30 group-hover:shadow-glow transition-shadow duration-300"
            />
            <span className="font-display font-bold text-xl text-foreground hidden sm:block">
              Sumanth<span className="text-primary">.</span>dev
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-accent hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="hero" size="default" asChild>
              <a href="/resume.png" download="Peddi_Sai_Venkat_Sumanth_Resume.png">
                <Download className="w-4 h-4" />
                Resume
              </a>
            </Button>
          </div>

          <button className="lg:hidden text-foreground p-2" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-base font-medium py-2"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <Button variant="hero" asChild>
                <a href="/resume.png" download="Peddi_Sai_Venkat_Sumanth_Resume.png">
                  <Download className="w-4 h-4" /> Resume
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;