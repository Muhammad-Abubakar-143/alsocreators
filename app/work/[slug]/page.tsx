'use client';

import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { AmbientScene } from '@/components/three/ambient-scene';
import { Reveal, TextReveal } from '@/components/ui/animate';
import { CTASection } from '@/components/sections/cta-section';
import { MagneticButton } from '@/components/ui/magnetic';
import { projects } from '@/lib/data';

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <AmbientScene count={300} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <Link
              href="/work"
              className="mb-10 inline-flex items-center gap-2 font-body text-sm text-soft/60 transition-colors hover:text-offwhite"
            >
              <ArrowLeft size={14} /> Back to work
            </Link>
          </Reveal>

          <div className="flex flex-wrap items-center gap-3">
            <Reveal>
              <span className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-display text-[10px] uppercase tracking-widest text-accent">
                {project.category}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <span className="font-body text-sm text-soft/50">{project.year}</span>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="font-body text-sm text-soft/50">· {project.client}</span>
            </Reveal>
          </div>

          <TextReveal
            text={project.title}
            className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-offwhite sm:text-7xl lg:text-8xl"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl font-body text-lg text-soft/70">{project.summary}</p>
          </Reveal>
        </div>
      </section>

      {/* Cover image */}
      <section className="relative">
        <Reveal>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="relative aspect-[21/9] overflow-hidden rounded-3xl border border-white/5">
              <motion.img
                src={project.cover}
                alt={project.title}
                className="h-full w-full object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Overview + Challenge */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="font-display text-xs uppercase tracking-[0.3em] text-accent">
                  The challenge
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <TextReveal
                text={project.challenge}
                className="font-display text-2xl font-medium leading-snug text-offwhite lg:text-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="relative border-y border-white/5 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="font-display text-xs uppercase tracking-[0.3em] text-accent">
                  Our approach
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal>
                <p className="font-body text-lg leading-relaxed text-soft/70">{project.approach}</p>
              </Reveal>
              <div className="mt-10 flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 px-4 py-2 font-body text-xs text-soft/60"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="mb-4 font-display text-xs uppercase tracking-[0.3em] text-accent">
              Results & impact
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-16 font-display text-4xl font-bold tracking-tight text-offwhite sm:text-5xl lg:text-6xl">
              The numbers
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {project.results.map((r, i) => (
              <Reveal key={r.label} delay={i * 0.1}>
                <div className="border-t border-accent/30 pt-6">
                  <p className="font-display text-5xl font-bold text-offwhite lg:text-6xl">
                    {r.value}
                  </p>
                  <p className="mt-2 font-body text-sm text-soft/50">{r.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="mb-12 font-display text-xs uppercase tracking-[0.3em] text-accent">
              Gallery
            </p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {projects
              .filter((p) => p.slug !== project.slug)
              .slice(0, 4)
              .map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.08} className={i % 3 === 0 ? 'md:col-span-2' : ''}>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                    <img
                      src={p.cover}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-ink/30" />
                  </div>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      {/* Next/Prev nav */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-px bg-white/5 md:grid-cols-2">
            <Link
              href={`/work/${prev.slug}`}
              className="group flex items-center gap-4 bg-ink p-8 transition-colors hover:bg-white/[0.02] lg:p-12"
            >
              <ArrowLeft size={20} className="text-soft/40 transition-colors group-hover:text-accent" />
              <div>
                <p className="font-display text-xs uppercase tracking-widest text-soft/40">Previous</p>
                <p className="mt-1 font-display text-xl font-semibold text-offwhite">{prev.title}</p>
              </div>
            </Link>
            <Link
              href={`/work/${next.slug}`}
              className="group flex items-center justify-end gap-4 bg-ink p-8 text-right transition-colors hover:bg-white/[0.02] lg:p-12"
            >
              <div>
                <p className="font-display text-xs uppercase tracking-widest text-soft/40">Next</p>
                <p className="mt-1 font-display text-xl font-semibold text-offwhite">{next.title}</p>
              </div>
              <ArrowRight size={20} className="text-soft/40 transition-colors group-hover:text-accent" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
