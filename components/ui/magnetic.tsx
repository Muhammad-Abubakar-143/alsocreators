'use client';

import { useRef, type ReactNode, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';

export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  function handleMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = e.clientX - rect.left - rect.width / 2;
    const my = e.clientY - rect.top - rect.height / 2;
    x.set(mx * 0.35);
    y.set(my * 0.35);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 font-body text-sm font-medium transition-colors duration-300';
  const styles =
    variant === 'primary'
      ? 'bg-accent text-offwhite glow-purple hover:glow-purple-strong'
      : 'border border-white/15 text-offwhite hover:border-accent';

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 z-0 scale-0 rounded-full bg-white/20 transition-transform duration-500 group-hover:scale-100" />
      )}
    </>
  );

  const motionProps = {
    ref: ref as never,
    style: { x: sx, y: sy },
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    whileTap: { scale: 0.95 },
    className: `${base} ${styles} ${className}`,
  };

  if (href) {
    return (
      <motion.a href={href} {...motionProps}>
        {content}
      </motion.a>
    );
  }
  return (
    <motion.button onClick={onClick} {...motionProps}>
      {content}
    </motion.button>
  );
}

export function MagneticLink({
  children,
  href,
  className = '',
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  function handleMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.25);
  }

  return (
    <Link href={href} ref={ref as never} className={className}>
      <motion.span
        style={{ x: sx, y: sy }}
        onMouseMove={handleMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </Link>
  );
}
