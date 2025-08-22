import Link from 'next/link'
// import BackgroundGlobeLeft from './BackgroundGlobeLeft'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
  <div className="absolute inset-0 bg-hero bg-cover bg-center opacity-30" aria-hidden="true" />
      {/* Decorative globe on left half */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {/* BackgroundGlobeLeft renders via CSS background to avoid layout shift */}
      {/* Component is pointer-events-none and -z-10 so content stays interactive */}
  {/** <BackgroundGlobeLeft /> */}
  <div className="relative mx-auto max-w-6xl px-4 py-28 sm:py-36">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Engineering‑grade software & design services
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/80">
          Tools for aviation and manufacturing teams. Built by aerospace engineers in California.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/products/aviatecalc"
            className="inline-flex items-center justify-center rounded-xl bg-fds-cyan/90 text-fds-bg font-semibold px-5 py-3 shadow-glow hover:bg-fds-accent transition-colors"
            role="button"
          >
            Visit AviateCalc (Beta)
          </Link>
          <Link
            href="/consulting"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-fds-text hover:border-fds-accent/60 hover:text-fds-accent transition-colors"
            role="button"
          >
            Design Consulting
          </Link>
        </div>
      </div>
    </section>
  )
}
