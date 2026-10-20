import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="absolute inset-0 bg-radial-purple opacity-30" />
      <p className="relative font-display text-[20vw] font-bold leading-none text-white/[0.04] lg:text-[12rem]">
        404
      </p>
      <h1 className="relative -mt-8 font-display text-3xl font-bold text-offwhite">
        Lost in the void
      </h1>
      <p className="relative mt-4 max-w-md font-body text-sm text-soft/60">
        The page you're looking for drifted off into the dark. Let's get you back.
      </p>
      <Link
        href="/"
        className="relative mt-8 inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 font-body text-sm font-medium text-offwhite glow-purple transition-all hover:glow-purple-strong"
      >
        Back home
      </Link>
    </main>
  );
}
