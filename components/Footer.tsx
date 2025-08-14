import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-3">Flyer Design Solutions LLC</h3>
          <p className="text-sm text-white/70">Engineering-grade software and design services for aviation and manufacturing teams.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Products</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-fds-accent hover:underline underline-offset-4 decoration-fds-accent/60" href="/products/aviatecalc">AviateCalc (Beta)</Link></li>
            <li><Link className="hover:text-fds-accent hover:underline underline-offset-4 decoration-fds-accent/60" href="/products/quotex">QuoteX</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-fds-accent hover:underline underline-offset-4 decoration-fds-accent/60" href="/about">About</Link></li>
            <li><Link className="hover:text-fds-accent hover:underline underline-offset-4 decoration-fds-accent/60" href="/consulting">Consulting</Link></li>
            <li><Link className="hover:text-fds-accent hover:underline underline-offset-4 decoration-fds-accent/60" href="/contact">Contact</Link></li>
            <li className="pt-2 text-white/70">Support: <a className="hover:text-fds-accent hover:underline underline-offset-4 decoration-fds-accent/60" href="mailto:flyerdesignsolutions@gmail.com">flyerdesignsolutions@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-fds-accent hover:underline underline-offset-4 decoration-fds-accent/60" href="/legal/terms">Terms</Link></li>
            <li><Link className="hover:text-fds-accent hover:underline underline-offset-4 decoration-fds-accent/60" href="/legal/privacy">Privacy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {year} Flyer Design Solutions LLC — San Luis Obispo, CA, USA
      </div>
    </footer>
  )
}
