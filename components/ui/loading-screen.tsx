'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 12 + 4;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => setLoading(false), 350);
      }
      setProgress(Math.min(p, 100));
    }, 90);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="absolute inset-0 bg-radial-purple opacity-40" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col items-center gap-8"
          >
            <div className="relative h-20 w-20">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-accent/20"
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/logo/AlsoCreatorsLogo.png" alt="AlsoCreators Logo" className="h-9 w-9 object-contain"  />
                {/* <span className="font-display text-sm font-bold text-offwhite">AC</span> */}
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <p className="font-display text-xs uppercase tracking-[0.4em] text-soft/60">
                AlsoCreators
              </p>
              <div className="h-px w-48 overflow-hidden bg-white/10">
                <motion.div
                  className="h-full bg-accent"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="font-body text-[10px] tabular-nums tracking-widest text-soft/40">
                {Math.round(progress).toString().padStart(3, '0')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
