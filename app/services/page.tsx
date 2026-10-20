'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { AmbientScene } from '@/components/three/ambient-scene';
import { Reveal, Stagger, StaggerItem, TextReveal } from '@/components/ui/animate';
import { CTASection } from '@/components/sections/cta-section';
import { services } from '@/lib/data';
import * as Icons from 'lucide-react';

const iconMap: Record<string, string> = {
  Palette: '◈',
  Clapperboard: '▣',
  Code: '⌘',
  Camera: '◉',
  Share2: '⬡',
};

export default function ServicesPage() {
  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <AmbientScene count={400} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <p className="mb-6 font-display text-xs uppercase tracking-[0.3em] text-accent">
              Capabilities
            </p>
          </Reveal>
          <TextReveal
            text="Everything you need to be seen, felt, and remembered."
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-offwhite sm:text-6xl lg:text-7xl"
          />
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl font-body text-base text-soft/60">
              Five core disciplines, one integrated practice. We assemble teams around your
              challenge — not the other way around.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services list */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Stagger className="flex flex-col gap-6">
            {services.map((s, i) => (
              <StaggerItem key={s.slug}>
                <Link
                  href="/contact"
                  className="group relative grid gap-8 overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:border-accent/30 hover:bg-white/[0.04] lg:grid-cols-12 lg:p-12"
                >
                  <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                  {/* Number + icon */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4">
                      <span className="font-display text-xs text-soft/30">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 font-display text-xl text-accent transition-all duration-500 group-hover:border-accent group-hover:bg-accent/10 group-hover:glow-purple">
                        {iconMap[s.icon]}
                      </span>
                    </div>
                  </div>

                  {/* Title + desc */}
                  <div className="lg:col-span-6">
                    <h3 className="font-display text-3xl font-bold text-offwhite transition-colors group-hover:text-accent lg:text-4xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 font-body text-base leading-relaxed text-soft/60">
                      {s.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="lg:col-span-3">
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 font-body text-xs text-soft/50">
                          <Check size={12} className="text-accent" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-end justify-end lg:col-span-1">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-offwhite transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:glow-purple">
                      <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}

            {/* And more */}
            <StaggerItem>
              <div className="flex items-center justify-center rounded-3xl border border-dashed border-accent/20 p-12 text-center">
                <div>
                  <p className="font-display text-2xl font-bold text-offwhite">
                    Need something else?
                  </p>
                  <p className="mt-2 font-body text-sm text-soft/60">
                    Strategy, branding, sound design, print, and more — just ask.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1 font-body text-sm text-accent hover:underline"
                  >
                    Get in touch <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
