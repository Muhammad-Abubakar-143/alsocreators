'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { HeroScene } from '@/components/three/hero-scene';
import { MagneticButton } from '@/components/ui/magnetic';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const headline = ['We', 'craft', 'cinematic', 'brands'];

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <HeroScene />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink" />
      <div className="absolute inset-0 bg-radial-purple opacity-30" />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 font-display text-xs uppercase tracking-[0.4em] text-soft/60"
        >
          Digital Marketing & Content Creation
        </motion.p>

        <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-offwhite sm:text-7xl lg:text-[6.5rem]">
          {headline.map((word, i) => (
            <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {word === 'cinematic' && (
                  <span className="text-accent text-glow">{word}</span>
                )}
                {word !== 'cinematic' && word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-8 max-w-xl font-body text-base leading-relaxed text-soft/70 sm:text-lg"
        >
          A creative agency at the intersection of design, motion, and technology —
          building immersive identities that move people.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton href="/work">View our work</MagneticButton>
          <MagneticButton href="/contact" variant="ghost">Start a project</MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-display text-[10px] uppercase tracking-[0.3em] text-soft/40">
            Scroll
          </span>
          <div className="relative h-10 w-px overflow-hidden bg-white/10">
            <div className="absolute inset-0 origin-top animate-scroll-indicator bg-accent" />
          </div>
          <ArrowDown size={12} className="text-soft/30" />
        </div>
      </motion.div>
    </section>
  );
}
