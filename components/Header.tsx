import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-fds-bg/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          {/* <Image src="/logo.png" alt="Flyer Design Solutions" width={48} height={48} priority /> */}
          <span className="text-lg font-semibold tracking-wide group-hover:text-fds-accent transition-colors">Flyer Design Solutions</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link className="hover:text-fds-accent hover:underline underline-offset-4 decoration-fds-accent/60 transition-colors" href="/products/aviatecalc">AviateCalc</Link>
          <Link className="hover:text-fds-accent hover:underline underline-offset-4 decoration-fds-accent/60 transition-colors" href="/products/quotex">QuoteX</Link>
          <Link className="hover:text-fds-accent hover:underline underline-offset-4 decoration-fds-accent/60 transition-colors" href="/consulting">Consulting</Link>
          <Link className="hover:text-fds-accent hover:underline underline-offset-4 decoration-fds-accent/60 transition-colors" href="/about">About</Link>
          <Link className="hover:text-fds-accent hover:underline underline-offset-4 decoration-fds-accent/60 transition-colors" href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
