'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export function Footer() {

  const SocialIcons = [
    {
      id:1, 
      href: 'https://www.instagram.com/alsocreators.studio/',
      Icon: Instagram
    },
    {
      id:2,
      href: 'https://www.linkedin.com/company/alsocreators/',
      Icon: Linkedin
    },
    {
      id:3,
      href: 'https://twitter.com/alsocreators',
      Icon: Twitter
    },
    {
      id:4,
      href: 'https://www.youtube.com/@alsocreators',
      Icon: Youtube
    }
  ]


  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-ink">
      <div className="absolute inset-0 bg-radial-purple opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-md">
            <Link href="/" className="flex items-center gap-2">
            <img src="/logo/AlsoCreatorsLogo.png" alt="AlsoCreators Logo" className='h-9 w-9 object-contain' />
              {/* <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-display text-sm font-bold">
                AC
              </span> */}
              <span className="font-display text-sm font-semibold">AlsoCreators</span>
            </Link>
            <p className="mt-6 font-body text-sm leading-relaxed text-soft/60">
              A digital marketing & content creation agency crafting cinematic brands
              and immersive experiences at the intersection of design, motion, and technology.
            </p>
            <div className="mt-6 flex gap-3">
              {SocialIcons.map(({ id, href, Icon }) => (
                <a
                  key={id}
                  href={href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-soft/60 transition-all hover:border-accent hover:text-accent"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterCol
              title="Navigate"
              links={[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/work', label: 'Work' },
                { href: '/contact', label: 'Contact' },
              ]}
            />
            <FooterCol
              title="Services"
              links={[
                { href: '/services', label: 'Graphic Design' },
                { href: '/services', label: 'Content Creation' },
                { href: '/services', label: 'Web Development' },
                { href: '/services', label: 'Event Coverage' },
                { href: '/services', label: 'Social Media' },
              ]}
            />
            <FooterCol
              title="Contact"
              links={[
                { href: 'mailto:alsocreators5@gmail.com', label: 'alsocreators5@gmail.com' },
                { href: 'tel:+923335371615', label: '+92 333 5371615' },
                { href: '/contact', label: 'Start a project' },
              ]}
            />
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/5 pt-8 sm:flex-row sm:items-center">
          <p className="font-body text-xs text-soft/40">
            © {new Date().getFullYear()} AlsoCreators. All rights reserved.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-xs uppercase tracking-[0.3em] text-soft/40"
          >
            Designed By AlsoCreators
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 overflow-hidden"
        >
          <h2 className="font-display text-[14vw] font-bold leading-none tracking-tighter text-white/[0.04] lg:text-[10vw]">
            ALSOCREATORS
          </h2>
        </motion.div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="font-display text-xs uppercase tracking-[0.2em] text-soft/40">{title}</p>
      <ul className="mt-4 space-y-3">
        {links.map((l, i) => (
          <li key={i}>
            <Link
              href={l.href}
              className="group inline-flex items-center gap-1 font-body text-sm text-soft/70 transition-colors hover:text-offwhite"
            >
              {l.label}
              <ArrowUpRight
                size={12}
                className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
