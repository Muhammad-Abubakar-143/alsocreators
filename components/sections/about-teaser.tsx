'use client';

import Link from 'next/link';
import { Reveal, TextReveal } from '@/components/ui/animate';
import { MagneticButton } from '@/components/ui/magnetic';
import { stats } from '@/lib/data';

export function AboutTeaser() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal>
          <p className="mb-8 font-display text-xs uppercase tracking-[0.3em] text-accent">
            Who we are
          </p>
        </Reveal>

        <TextReveal
          text="We are a collective of designers, filmmakers, and engineers obsessed with the craft of attention — turning brands into experiences people feel before they think."
          className="font-display text-2xl font-medium leading-snug tracking-tight text-offwhite sm:text-3xl lg:text-[2.75rem] lg:leading-[1.2]"
        />

        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="border-t border-white/10 pt-4">
                <p className="font-display text-4xl font-bold text-offwhite lg:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 font-body text-xs text-soft/50">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <MagneticButton href="/about">More about us</MagneticButton>
        </div>
      </div>
    </section>
  );
}
