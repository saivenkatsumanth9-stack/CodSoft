import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Home, User, Code2, GitBranch, FolderGit2, Award, Mail, Download,
  Github, Linkedin, MapPin,
} from 'lucide-react';
import logo from '@/assets/psvs-logo.jpeg';

const navItems = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'about', label: 'About', Icon: User },
  { id: 'skills', label: 'Skills', Icon: Code2 },
  { id: 'learning', label: 'Learning', Icon: GitBranch },
  { id: 'timeline', label: 'Journey', Icon: GitBranch },
  { id: 'projects', label: 'Projects', Icon: FolderGit2 },
  { id: 'certifications', label: 'Certifications', Icon: Award },
  { id: 'contact', label: 'Contact', Icon: Mail },
];

const socials = [
  { Icon: Github, href: 'https://github.com/saivenkatsumanth9-stack', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/sai-venkat-sumanth-1217013a5/', label: 'LinkedIn' },
  { Icon: Mail, href: 'mailto:saivenkatsumanth9@gmail.com', label: 'Email' },
];

const ProfileSidebar = () => {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const ids = navItems.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden lg:flex fixed top-6 left-6 bottom-6 w-[300px] z-40 flex-col">
      <div className="glass-card flex-1 flex flex-col p-6 overflow-hidden">
        {/* Profile */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent blur-2xl opacity-50" />
            <img
              src={logo}
              alt="Sumanth"
              className="relative w-28 h-28 rounded-full object-cover ring-2 ring-primary/60 shadow-glow"
            />
            <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-accent ring-2 ring-background animate-pulse" />
          </motion.div>
          <h2 className="font-display text-xl font-bold mt-4">Sumanth</h2>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
            Full Stack Developer · Quantum & AI Explorer
          </p>
          <p className="flex items-center gap-1 text-[11px] text-muted-foreground mt-2">
            <MapPin className="w-3 h-3" /> India
          </p>
        </div>

        {/* Nav */}
        <nav className="mt-6 flex-1 overflow-y-auto -mx-2 px-2">
          <ul className="space-y-1">
            {navItems.map(({ id, label, Icon }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group ${
                      isActive
                        ? 'text-foreground bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="sidebar-active"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-full bg-gradient-to-b from-primary to-accent shadow-glow"
                      />
                    )}
                    <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-primary' : ''}`} />
                    <span>{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Socials + Resume */}
        <div className="pt-4 border-t border-white/10">
          <div className="flex items-center justify-center gap-2 mb-4">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <a
            href="/resume.png"
            download="Peddi_Sai_Venkat_Sumanth_Resume.png"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium text-sm hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
          >
            <Download className="w-4 h-4" /> Download Resume
          </a>
        </div>
      </div>
    </aside>
  );
};

export default ProfileSidebar;