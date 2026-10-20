'use client';

import { Hero } from '@/components/sections/hero';
import { ServicesPreview } from '@/components/sections/services-preview';
import { WorkPreview } from '@/components/sections/work-preview';
import { AboutTeaser } from '@/components/sections/about-teaser';
import { CTASection } from '@/components/sections/cta-section';

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <WorkPreview />
      <AboutTeaser />
      <CTASection />
    </main>
  );
}
