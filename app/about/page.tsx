'use client';

import { motion } from 'framer-motion';
import { AmbientScene } from '@/components/three/ambient-scene';
import { TextReveal, Reveal, Stagger, StaggerItem } from '@/components/ui/animate';
import { CTASection } from '@/components/sections/cta-section';
import { values, team, stats } from '@/lib/data';
import * as Icons from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="pt-32">
      {/* Manifesto */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <AmbientScene count={500} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <p className="mb-8 font-display text-xs uppercase tracking-[0.3em] text-accent">
              Our manifesto
            </p>
          </Reveal>
          <TextReveal
            text="We believe great work isn't made — it's distilled. Every brand has a frequency. Our job is to find it, amplify it, and make it impossible to ignore."
            className="font-display text-3xl font-medium leading-snug tracking-tight text-offwhite sm:text-4xl lg:text-[3.5rem] lg:leading-[1.15]"
          />
        </div>
      </section>

      {/* Story */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal>
            <p className="mb-6 font-display text-xs uppercase tracking-[0.3em] text-accent">
              The studio
            </p>
          </Reveal>
          <div className="space-y-8 font-body text-lg leading-relaxed text-soft/70">
            <Reveal>
              <p>
                AlsoCreators was founded in 2019 by a small group of designers and filmmakers
                who shared a single frustration: most marketing felt like noise. We set out to
                build a studio that treated attention as something sacred — something earned,
                not demanded.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Today we partner with brands across fashion, music, tech, and culture — building
                identities, content systems, and digital experiences designed to live in motion.
                We're small by choice, selective by design, and obsessive about the craft.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                We don't do deliverables. We do decisions — hundreds of them, made with intention,
                until what remains feels inevitable.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative border-y border-white/5 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Stagger className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="text-center lg:text-left">
                  <p className="font-display text-5xl font-bold text-offwhite lg:text-6xl">{s.value}</p>
                  <p className="mt-2 font-body text-sm text-soft/50">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="mb-4 font-display text-xs uppercase tracking-[0.3em] text-accent">
              How we work
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-16 font-display text-4xl font-bold tracking-tight text-offwhite sm:text-5xl lg:text-6xl">
              The principles
            </h2>
          </Reveal>
          <Stagger className="grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 md:grid-cols-2">
            {values.map((v) => {
              const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[v.icon] ?? Icons.Sparkles;
              return (
                <StaggerItem key={v.title}>
                  <div className="group relative h-full bg-ink p-8 transition-colors hover:bg-white/[0.02] lg:p-10">
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
                    <Icon className="mb-6 text-accent" size={28} />
                    <h3 className="font-display text-xl font-semibold text-offwhite">{v.title}</h3>
                    <p className="mt-3 font-body text-sm leading-relaxed text-soft/60">
                      {v.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="mb-4 font-display text-xs uppercase tracking-[0.3em] text-accent">
              The people
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-16 font-display text-4xl font-bold tracking-tight text-offwhite sm:text-5xl lg:text-6xl">
              Small team. <span className="text-soft/40">Big obsession.</span>
            </h2>
          </Reveal>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <StaggerItem key={m.name}>
                <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-accent/30 bg-accent/10 font-display text-xl font-bold text-accent transition-all duration-500 group-hover:scale-110 group-hover:glow-purple">
                    {m.initials}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-offwhite">{m.name}</h3>
                  <p className="mt-1 font-body text-sm text-soft/50">{m.role}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
