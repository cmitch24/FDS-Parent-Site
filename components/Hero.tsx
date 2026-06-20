import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero bg-cover bg-center opacity-30" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-28 sm:py-36">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Fly smarter with AviateVFR
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/80">
          The automatic VFR route finder that accounts for weather, terrain, and airspace — so you can go from start to destination in seconds, safely and legally.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/products/aviatevfr"
            className="inline-flex items-center justify-center rounded-xl bg-fds-cyan/90 text-fds-bg font-semibold px-5 py-3 shadow-glow hover:bg-fds-accent transition-colors"
            role="button"
          >
            Visit AviateVFR
          </Link>
        </div>
      </div>
    </section>
  )
}
