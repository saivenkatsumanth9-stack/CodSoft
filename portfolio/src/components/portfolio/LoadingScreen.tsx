import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import logo from '@/assets/psvs-logo.jpeg';

const LoadingScreen = () => {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setShow(false), 400);
          return 100;
        }
        return p + 4;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10 mb-8"
          >
            <img
              src={logo}
              alt="PSVS logo"
              className="w-28 h-28 rounded-3xl object-cover shadow-glow ring-1 ring-primary/40"
            />
          </motion.div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-display text-2xl font-bold gradient-text-primary mb-6 relative z-10"
          >
            Peddi Sai Venkat Sumanth
          </motion.h2>

          <div className="w-64 h-1 bg-secondary rounded-full overflow-hidden relative z-10">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
          <p className="mt-3 text-xs text-muted-foreground tracking-widest relative z-10">
            LOADING {progress}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;