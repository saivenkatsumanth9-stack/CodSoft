import { motion, useScroll, useTransform } from 'framer-motion';
import heroBg from '@/assets/hero-bg-neon.jpg';

/**
 * Global fixed background that stays behind every section.
 * As the user scrolls, it progressively blurs, dims, and scales —
 * giving every "slide" the same cinematic depth effect.
 */
const ScrollBackdrop = () => {
  const { scrollYProgress } = useScroll();

  // Cycle blur/opacity gently across the whole page so each section feels alive
  const blur = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 14, 22, 14, 8]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.6, 1], [0.85, 0.45, 0.3, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.12, 1.05]);
  const filter = useTransform(blur, (v) => `blur(${v}px) saturate(1.1)`);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        style={{
          backgroundImage: `url(${heroBg})`,
          filter,
          opacity,
          scale,
        }}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
    </div>
  );
};

export default ScrollBackdrop;