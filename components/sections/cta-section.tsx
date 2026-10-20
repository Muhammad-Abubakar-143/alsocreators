'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { MagneticButton } from '@/components/ui/magnetic';
import { Reveal } from '@/components/ui/animate';

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-40">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="mb-6 font-display text-xs uppercase tracking-[0.3em] text-accent">
            Let's build something
          </p>
        </Reveal>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-offwhite sm:text-7xl lg:text-8xl"
        >
          Ready to make
          <br />
          <span className="text-accent text-glow">something</span>
          <br />
          unforgettable?
        </motion.h2>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-lg font-body text-base text-soft/60">
            We partner with a handful of brands each season. If you're building something
            bold, we'd love to hear about it.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton href="/contact">
              Start a project
              <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton href="/work" variant="ghost">
              See the work
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
