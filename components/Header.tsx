import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-fds-bg/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <span className="text-lg font-semibold tracking-wide">Flyer Design Solutions</span>
        <nav className="flex items-center gap-6 text-sm">
          <Link className="hover:text-fds-accent hover:underline underline-offset-4 decoration-fds-accent/60 transition-colors" href="/products/aviatecalc">AviateVFR</Link>
          <Link className="hover:text-fds-accent hover:underline underline-offset-4 decoration-fds-accent/60 transition-colors" href="/about">About</Link>
          <Link className="hover:text-fds-accent hover:underline underline-offset-4 decoration-fds-accent/60 transition-colors" href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
