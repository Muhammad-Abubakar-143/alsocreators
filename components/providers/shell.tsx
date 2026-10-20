'use client';

import { SmoothScroll } from '@/components/providers/smooth-scroll';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { LoadingScreen } from '@/components/ui/loading-screen';
import { TransitionShell } from '@/components/providers/transition-shell';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <TransitionShell>{children}</TransitionShell>
      <Footer />
    </SmoothScroll>
  );
}
