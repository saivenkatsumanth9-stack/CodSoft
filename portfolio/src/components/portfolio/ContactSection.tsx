import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Mail, Github, Linkedin, CheckCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { error } = await supabase.from('contact_messages').insert([formData]);
      if (error) throw error;
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      toast.success('Message sent! I\'ll get back to you soon.');
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (err) {
      console.error(err);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const channels = [
    { Icon: Mail, label: 'Email', value: 'saivenkatsumanth9@gmail.com', href: 'mailto:saivenkatsumanth9@gmail.com' },
    { Icon: Linkedin, label: 'LinkedIn', value: 'Sai Venkat Sumanth', href: 'https://www.linkedin.com/in/sai-venkat-sumanth-1217013a5/' },
    { Icon: Github, label: 'GitHub', value: '@saivenkatsumanth9-stack', href: 'https://github.com/saivenkatsumanth9-stack' },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wider uppercase">
              Contact
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Let's build something{' '}
              <span className="gradient-text-primary">amazing</span> together
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Have a project, role, or quantum experiment in mind? Drop a message —
              I'll get back within 24 hours.
            </p>

            <div className="space-y-5">
              {channels.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent transition-all duration-300">
                    <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{label}</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 lg:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input id="name" name="name" value={formData.name} onChange={onChange} placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={onChange} placeholder="you@example.com" required />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <Input id="subject" name="subject" value={formData.subject} onChange={onChange} placeholder="Project / opportunity" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea id="message" name="message" value={formData.message} onChange={onChange} placeholder="Tell me about it..." required />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isLoading || isSuccess}>
                {isLoading ? (<><Loader2 className="w-5 h-5 animate-spin" />Sending...</>)
                  : isSuccess ? (<><CheckCircle className="w-5 h-5" />Sent!</>)
                  : (<><Send className="w-5 h-5" />Send Message</>)}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;