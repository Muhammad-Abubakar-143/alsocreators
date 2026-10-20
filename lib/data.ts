export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: 'graphic-designing',
    title: 'Graphic Designing',
    tagline: 'Visual identities that command attention.',
    description:
      'Brand systems, campaign visuals, and design language engineered to make your mark unforgettable across every touchpoint.',
    features: ['Brand Identity Systems', 'Campaign Visuals', 'Art Direction', 'Print & Editorial'],
    icon: 'Palette',
  },
  {
    slug: 'content-creation',
    title: 'Content Creation',
    tagline: 'Stories that move people to act.',
    description:
      'Photography, video, and copy crafted with cinematic intent — content engineered to stop the scroll and build desire.',
    features: ['Video Production', 'Photography', 'Copywriting', 'Creative Strategy'],
    icon: 'Clapperboard',
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    tagline: 'Immersive digital experiences.',
    description:
      'High-performance websites and platforms built with modern technology, motion, and obsessive attention to detail.',
    features: ['Web Design', 'Frontend Engineering', '3D & Motion', 'E-commerce'],
    icon: 'Code',
  },
  {
    slug: 'event-coverage',
    title: 'Event Coverage',
    tagline: 'Every moment, captured cinematic.',
    description:
      'Full-spectrum event coverage — from live capture to post-produced highlight films that extend the life of your moment.',
    features: ['Live Capture', 'Highlight Films', 'Photography', 'Real-time Edits'],
    icon: 'Camera',
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    tagline: 'Cultural relevance, engineered.',
    description:
      'End-to-end social strategy and management — growing communities and turning attention into measurable brand equity.',
    features: ['Strategy & Planning', 'Community Management', 'Paid Social', 'Analytics & Reporting'],
    icon: 'Share2',
  },
];

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  cover: string;
  summary: string;
  challenge: string;
  approach: string;
  results: { label: string; value: string }[];
  services: string[];
};

export const projects: Project[] = [
  {
    slug: 'lumen-brand-system',
    title: 'Lumen',
    client: 'Lumen Studios',
    category: 'Branding',
    year: '2025',
    cover: 'https://images.pexels.com/photos/6214/purple-fashion.jpg?auto=compress&cs=tinysrgb&w=1600',
    summary: 'A luminous identity for a next-gen lighting design studio.',
    challenge:
      'Lumen needed a brand that felt as alive and atmospheric as their lighting installations — something that could live in motion as naturally as in print.',
    approach:
      'We built a generative identity system around a single volumetric motif, then extended it across digital, print, and spatial touchpoints with a custom motion language.',
    results: [
      { label: 'Brand Recall Lift', value: '+64%' },
      { label: 'Inquiries', value: '3.2x' },
      { label: 'Timeline', value: '8 weeks' },
    ],
    services: ['Graphic Designing', 'Web Development'],
  },
  {
    slug: 'aurora-campaign',
    title: 'Aurora',
    client: 'Aurora Cosmetics',
    category: 'Content Creation',
    year: '2025',
    cover: '/projects/aurora.gif',
    summary: 'A cinematic launch campaign for a skincare disruptor.',
    challenge:
      'Aurora was entering a saturated market and needed a launch that felt nothing like its competitors — premium, sensorial, and instantly shareable.',
    approach:
      'We produced a hero film and 40-piece content suite shot on a custom built set, paired with a scroll-stopping social rollout and an immersive launch microsite.',
    results: [
      { label: 'Launch Reach', value: '12M+' },
      { label: 'Engagement Rate', value: '9.4%' },
      { label: 'Sell-through', value: '94%' },
    ],
    services: ['Content Creation', 'Social Media Marketing'],
  },
  {
    slug: 'monolith-web',
    title: 'Monolith',
    client: 'Monolith Architecture',
    category: 'Web Development',
    year: '2024',
    cover: '/projects/monolith.gif',
    summary: 'An immersive portfolio for a brutalist architecture firm.',
    challenge:
      'Monolith wanted a digital presence as bold and intentional as their built work — one that showcased scale and materiality without slowing the experience.',
    approach:
      'We engineered a 3D-driven portfolio with scroll-synced architectural reveals, custom WebGL transitions, and a CMS that lets the studio publish projects in minutes.',
    results: [
      { label: 'Avg. Session', value: '4m 12s' },
      { label: 'Project Inquiries', value: '+210%' },
      { label: 'Load Time', value: '1.1s' },
    ],
    services: ['Web Development', 'Graphic Designing'],
  },
  {
    slug: 'pulse-festival',
    title: 'Pulse',
    client: 'Pulse Festival',
    category: 'Event Coverage',
    year: '2024',
    cover: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1600',
    summary: 'Three days of music, captured into one living film.',
    challenge:
      'A 40,000-attendee festival needed real-time content for social alongside a post-event hero film — without compromising either.',
    approach:
      'We deployed a six-person crew with a live edit pipeline pushing social cuts within the hour, and a cinematic afterfilm cut from 60+ hours of footage.',
    results: [
      { label: 'Social Impressions', value: '28M' },
      { label: 'Follower Growth', value: '+38%' },
      { label: 'Afterfilm Views', value: '4.1M' },
    ],
    services: ['Event Coverage', 'Content Creation'],
  },
  {
    slug: 'echo-social',
    title: 'Echo',
    client: 'Echo Audio',
    category: 'Social Media Marketing',
    year: '2025',
    cover: 'https://images.pexels.com/photos/3771818/pexels-photo-3771818.jpeg?auto=compress&cs=tinysrgb&w=1600',
    summary: 'Building a culture-led community for an audio hardware brand.',
    challenge:
      'Echo had great product and no cultural presence. They needed a social engine that turned specs into stories and customers into advocates.',
    approach:
      'We restructured their social around a three-tier content system — cultural, educational, and product — backed by a quarterly strategy cadence and creator partnerships.',
    results: [
      { label: 'Community Growth', value: '+412%' },
      { label: 'Engagement', value: '11.2%' },
      { label: 'ROAS', value: '4.7x' },
    ],
    services: ['Social Media Marketing', 'Content Creation'],
  },
  {
    slug: 'veil-identity',
    title: 'Veil',
    client: 'Veil Atelier',
    category: 'Branding',
    year: '2024',
    cover: 'https://images.pexels.com/photos/1303091/pexels-photo-1303091.jpeg?auto=compress&cs=tinysrgb&w=1600',
    summary: 'An identity of restraint for a luxury fashion atelier.',
    challenge:
      'Veil wanted a presence defined by what it withheld — an identity of negative space, texture, and quiet confidence.',
    approach:
      'We crafted a minimal monogram, an editorial type system, and a film-forward website that lets the work breathe.',
    results: [
      { label: 'Press Features', value: '17' },
      { label: 'Client List', value: '+45%' },
      { label: 'Awwwards', value: 'SOTD' },
    ],
    services: ['Graphic Designing', 'Web Development'],
  },
];

export const values = [
  {
    title: 'Intention Over Trend',
    description:
      'We design for longevity, not novelty. Every decision earns its place or gets cut.',
    icon: 'Target',
  },
  {
    title: 'Motion Is Meaning',
    description:
      'We treat animation as language — every transition carries intent and information.',
    icon: 'Wind',
  },
  {
    title: 'Craft Compromise Zero',
    description:
      'The details are the design. We obsess over the millisecond and the pixel.',
    icon: 'Sparkles',
  },
  {
    title: 'Collaboration First',
    description:
      'Great work is a conversation. We embed with your team, not above it.',
    icon: 'Users',
  },
];

export const team = [
  { name: 'Mara Vance', role: 'Founder & Creative Director', initials: 'MV' },
  { name: 'Kai Okonkwo', role: 'Head of Motion', initials: 'KO' },
  { name: 'Sofia Reyes', role: 'Design Lead', initials: 'SR' },
  { name: 'Daniel Hart', role: 'Engineering Lead', initials: 'DH' },
];

export const stats = [
  { value: '120+', label: 'Projects Shipped' },
  { value: '38', label: 'Global Clients' },
  { value: '14', label: 'Industry Awards' },
  { value: '6yr', label: 'Crafting Since 2019' },
];
