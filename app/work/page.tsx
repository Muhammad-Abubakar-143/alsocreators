'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { AmbientScene } from '@/components/three/ambient-scene';
import { Reveal, TextReveal } from '@/components/ui/animate';
import { CTASection } from '@/components/sections/cta-section';
import { projects } from '@/lib/data';

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

export default function WorkPage() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <AmbientScene count={350} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <p className="mb-6 font-display text-xs uppercase tracking-[0.3em] text-accent">
              The portfolio
            </p>
          </Reveal>
          <TextReveal
            text="Work we're proud to sign."
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-offwhite sm:text-6xl lg:text-7xl"
          />
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-30 border-y border-white/5 bg-ink/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-6 py-4 lg:px-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`relative whitespace-nowrap rounded-full px-4 py-2 font-body text-sm transition-colors ${
                filter === c ? 'text-offwhite' : 'text-soft/50 hover:text-offwhite'
              }`}
            >
              {filter === c && (
                <motion.span
                  layoutId="filter-active"
                  className="absolute inset-0 rounded-full border border-accent bg-accent/10"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              <span className="relative z-10">{c}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div layout className="grid gap-6 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={`/work/${p.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/[0.02]">
                      <motion.img
                        src={p.cover}
                        alt={p.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                        <div className="flex items-center gap-3">
                          <span className="rounded-full border border-white/20 px-3 py-1 font-display text-[10px] uppercase tracking-widest text-offwhite backdrop-blur-sm">
                            {p.category}
                          </span>
                          <span className="font-body text-xs text-soft/50">{p.year}</span>
                        </div>
                        <h3 className="mt-4 font-display text-2xl font-bold text-offwhite lg:text-3xl">
                          {p.title}
                        </h3>
                        <p className="mt-2 max-w-sm font-body text-sm text-soft/70">{p.summary}</p>
                        <span className="mt-4 inline-flex items-center gap-1 font-body text-xs text-accent opacity-0 transition-all duration-500 group-hover:opacity-100">
                          View case study <ArrowUpRight size={12} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
