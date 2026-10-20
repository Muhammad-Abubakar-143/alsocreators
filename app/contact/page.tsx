'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter } from 'lucide-react';
import { AmbientScene } from '@/components/three/ambient-scene';
import { Reveal, TextReveal } from '@/components/ui/animate';
import { MagneticButton } from '@/components/ui/magnetic';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1200);
  }

  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <AmbientScene count={400} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <p className="mb-6 font-display text-xs uppercase tracking-[0.3em] text-accent">
              Get in touch
            </p>
          </Reveal>
          <TextReveal
            text="Let's make something unforgettable."
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-offwhite sm:text-6xl lg:text-7xl"
          />
        </div>
      </section>

      {/* Form + info */}
      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Name" name="name" type="text" placeholder="Jane Doe" />
                    <Field label="Email" name="email" type="email" placeholder="jane@brand.com" />
                  </div>
                  <Field label="Company" name="company" type="text" placeholder="Your brand" />
                  <div>
                    <label className="mb-2 block font-display text-xs uppercase tracking-[0.2em] text-soft/50">
                      What do you need?
                    </label>
                    <select
                      name="service"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 font-body text-sm text-offwhite outline-none transition-colors focus:border-accent"
                    >
                      <option className="bg-ink">Graphic Designing</option>
                      <option className="bg-ink">Content Creation</option>
                      <option className="bg-ink">Web Development</option>
                      <option className="bg-ink">Event Coverage</option>
                      <option className="bg-ink">Social Media Marketing</option>
                      <option className="bg-ink">Something else</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block font-display text-xs uppercase tracking-[0.2em] text-soft/50">
                      Project details
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 font-body text-sm text-offwhite outline-none transition-colors placeholder:text-soft/30 focus:border-accent"
                    />
                  </div>
                  <MagneticButton onClick={() => handleSubmit({ preventDefault: () => {} } as never)}>
                    {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Send message'}
                    <Send size={14} />
                  </MagneticButton>
                  {status === 'sent' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-body text-sm text-accent"
                    >
                      Thanks — we'll be in touch within 48 hours.
                    </motion.p>
                  )}
                </form>
              </Reveal>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <p className="font-display text-xs uppercase tracking-[0.3em] text-accent">
                  Direct lines
                </p>
              </Reveal>
              <div className="mt-8 space-y-6">
                <ContactItem icon={Mail} label="Email" value="hello@alsoccreators.com" href="mailto:hello@alsoccreators.com" />
                <ContactItem icon={Phone} label="Phone" value="+1 (000) 000-0000" href="tel:+10000000000" />
                <ContactItem icon={MapPin} label="Studio" value="Remote-first · Worldwide" />
              </div>

              <Reveal delay={0.2}>
                <div className="mt-12 border-t border-white/5 pt-8">
                  <p className="font-display text-xs uppercase tracking-[0.3em] text-soft/40">
                    Follow
                  </p>
                  <div className="mt-4 flex gap-3">
                    {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-soft/60 transition-all hover:border-accent hover:text-accent hover:glow-purple"
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-12 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                  <p className="font-body text-sm leading-relaxed text-soft/60">
                    We take on a limited number of projects each season to keep our craft sharp.
                    Reach out early — we typically book 6–8 weeks ahead.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({ label, name, type, placeholder }: { label: string; name: string; type: string; placeholder: string }) {
  return (
    <div>
      <label className="mb-2 block font-display text-xs uppercase tracking-[0.2em] text-soft/50">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 font-body text-sm text-offwhite outline-none transition-colors placeholder:text-soft/30 focus:border-accent"
      />
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: React.ElementType; label: string; value: string; href?: string }) {
  const inner = (
    <div className="group flex items-center gap-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-accent transition-all group-hover:border-accent group-hover:glow-purple">
        <Icon size={16} />
      </span>
      <div>
        <p className="font-display text-xs uppercase tracking-widest text-soft/40">{label}</p>
        <p className="mt-0.5 font-body text-sm text-offwhite">{value}</p>
      </div>
    </div>
  );
  if (href) return <a href={href}>{inner}</a>;
  return inner;
}
