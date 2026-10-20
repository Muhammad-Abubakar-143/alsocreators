'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/data';
import { Reveal } from '@/components/ui/animate';

export function WorkPreview() {
  const featured = projects.slice(0, 3);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="mb-4 font-display text-xs uppercase tracking-[0.3em] text-accent">
                Selected work
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl font-bold tracking-tight text-offwhite sm:text-5xl lg:text-6xl">
                Recent case studies
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 font-body text-sm text-soft/70 transition-colors hover:text-offwhite"
            >
              All projects
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {featured.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={i * 0.1}
              className={i === 0 ? 'lg:col-span-3' : i === 1 ? 'lg:col-span-3' : 'lg:col-span-6'}
            >
              <Link href={`/work/${p.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white/[0.02]">
                  <motion.img
                    src={p.cover}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
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
                    <p className="mt-2 max-w-md font-body text-sm text-soft/70">
                      {p.summary}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 font-body text-xs text-accent opacity-0 transition-all duration-500 group-hover:opacity-100">
                      View case study
                      <ArrowUpRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
