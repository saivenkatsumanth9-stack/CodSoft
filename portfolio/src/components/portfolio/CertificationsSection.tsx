import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

const certifications = [
  {
    title: 'Google AI Essentials Specialization',
    issuer: 'Google (Coursera)',
    year: '2026',
    file: '/certificates/google-ai-essentials.png',
    verifyUrl: 'https://coursera.org/verify/specialization/MWJ6LTH7LRCI',
  },
  {
    title: 'DevOps and AI on AWS: Upgrading Apps with Generative AI',
    issuer: 'Amazon Web Services (Coursera)',
    year: '2026',
    file: '/certificates/aws-devops-ai.png',
    verifyUrl: 'https://coursera.org/verify/BRJKC266KSXI',
  },
  {
    title: 'Discover the Art of Prompting',
    issuer: 'Google (Coursera)',
    year: '2026',
    file: '/certificates/google-prompting.png',
    verifyUrl: 'https://coursera.org/verify/ZJZ45G7E62DC',
  },
  {
    title: 'The Complete Quantum Computing Course',
    issuer: 'Udemy',
    year: '2026',
    file: '/certificates/udemy-quantum.png',
    verifyUrl: 'http://ude.my/UC-4513b9c8-e94c-4c93-b716-a41eca3c5952',
  },
  {
    title: 'Unity 6 & C# Full Master Course - Beginner to Intermediate',
    issuer: 'Udemy',
    year: '2026',
    file: '/certificates/udemy-unity.png',
    verifyUrl: 'http://ude.my/UC-eec41a08-b21d-4614-9346-de9a9a06ea26',
  },
  {
    title: 'Prompt Engineering',
    issuer: 'Coursera',
    year: '2024',
    file: 'https://mcralkyirinwykmxrxel.supabase.co/storage/v1/object/public/certificates/coursera-prompting.pdf',
    verifyUrl: 'https://mcralkyirinwykmxrxel.supabase.co/storage/v1/object/public/certificates/coursera-prompting.pdf',
  },
  {
    title: 'Data Analytics',
    issuer: 'Certification',
    year: '2024',
    file: 'https://mcralkyirinwykmxrxel.supabase.co/storage/v1/object/public/certificates/data-analytics.pdf',
    verifyUrl: 'https://mcralkyirinwykmxrxel.supabase.co/storage/v1/object/public/certificates/data-analytics.pdf',
  },
];

const CertificationsSection = () => {
  const [active, setActive] = useState<typeof certifications[number] | null>(null);

  return (
    <section id="certifications" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wider uppercase">
            Achievements
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Certifications & <span className="gradient-text-primary">Credentials</span>
          </h2>
          <p className="text-muted-foreground">Click a card to view the certificate</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((c, i) => (
            <motion.button
              key={c.title}
              type="button"
              onClick={() => setActive(c)}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, type: 'spring', stiffness: 90 }}
              whileHover={{ y: -8, scale: 1.03, rotateZ: -0.5 }}
              whileTap={{ scale: 0.98 }}
              className="glow-card glass-card p-6 text-left hover:shadow-glow transition-all duration-500 group cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[180px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div>
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="relative font-display text-base font-semibold mb-1 line-clamp-2">{c.title}</h3>
                <p className="relative text-xs text-muted-foreground">{c.issuer}</p>
              </div>
              <div className="relative flex items-center justify-between mt-4 w-full">
                <p className="text-xs text-accent font-medium">{c.year}</p>
                <span className="text-xs text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-x-[-6px] group-hover:translate-x-0 transition-all duration-300">
                  View <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 overflow-hidden bg-background/95 backdrop-blur-xl border-primary/20 flex flex-col">
          <AnimatePresence>
            {active && (
              <motion.div
                key={active.file}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, type: 'spring', stiffness: 120 }}
                className="flex flex-col h-full w-full"
              >
                <div className="flex items-center justify-between p-4 border-b border-border/40 shrink-0">
                  <div>
                    <DialogTitle className="font-display text-lg leading-tight">{active.title}</DialogTitle>
                    <p className="text-xs text-muted-foreground">{active.issuer} · {active.year}</p>
                  </div>
                  <div className="flex items-center gap-4 mr-8">
                    {active.verifyUrl && (
                      <a
                        href={active.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-accent hover:underline transition-colors flex items-center gap-1"
                      >
                        Verify Credential <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    <a
                      href={active.file}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-primary hover:text-accent transition-colors flex items-center gap-1"
                    >
                      Open in new tab <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <div className="flex-1 bg-black/40 flex items-center justify-center p-4 overflow-auto min-h-0">
                  {active.file.match(/\.(png|jpg|jpeg|gif|webp)$/i) ? (
                    <img
                      src={active.file}
                      alt={active.title}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                    />
                  ) : (
                    <iframe
                      src={active.file}
                      title={active.title}
                      className="w-full h-full border-none"
                    />
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificationsSection;