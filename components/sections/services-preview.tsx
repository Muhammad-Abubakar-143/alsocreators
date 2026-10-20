'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/data';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/animate';

const iconMap: Record<string, string> = {
  Palette: '◈',
  Clapperboard: '▣',
  Code: '⌘',
  Camera: '◉',
  Share2: '⬡',
};

export function ServicesPreview() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="mb-4 font-display text-xs uppercase tracking-[0.3em] text-accent">
                What we do
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl font-bold tracking-tight text-offwhite sm:text-5xl lg:text-6xl">
                Services built for
                <br />
                <span className="text-soft/40">the attention economy.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 font-body text-sm text-soft/70 transition-colors hover:text-offwhite"
            >
              All services
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {services.slice(0, 5).map((s) => (
            <StaggerItem key={s.slug}>
              <Link
                href="/services"
                className="group relative block h-full overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:border-accent/40 hover:bg-white/[0.04]"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                <div className="relative flex h-full flex-col">
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 font-display text-xl text-accent transition-all duration-500 group-hover:border-accent group-hover:bg-accent/10">
                    {iconMap[s.icon]}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-offwhite">
                    {s.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-soft/60">
                    {s.tagline}
                  </p>
                  <div className="mt-auto pt-6">
                    <span className="inline-flex items-center gap-1 font-body text-xs text-soft/40 transition-colors group-hover:text-accent">
                      Explore
                      <ArrowUpRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
          <StaggerItem>
            <Link
              href="/services"
              className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-accent/30 p-8 text-center transition-all hover:border-accent hover:bg-accent/5"
            >
              <span className="font-display text-3xl font-bold text-accent">+</span>
              <p className="mt-2 font-body text-sm text-soft/60">And much more</p>
            </Link>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
