import Link from 'next/link'

function Card({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <div className="glass p-6 flex flex-col gap-4">
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-white/75 mt-1">{desc}</p>
      </div>
      <div>
  <Link href={href} className="inline-flex items-center rounded-lg border border-white/20 px-4 py-2 hover:border-fds-accent/60 hover:text-fds-accent hover:underline underline-offset-4 decoration-fds-accent/60 transition-colors" role="button">
          Learn more
        </Link>
      </div>
    </div>
  )
}

export default function ProductCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="AviateCalc"
          desc="Weight & balance range finder and aviation calculators."
          href="/products/aviatecalc"
        />
        <Card
          title="QuoteX"
          desc="Design‑stage manufacturability insights and cost estimation."
          href="/products/quotex"
        />
        <Card
          title="Design Consulting"
          desc="CAD/CAM, CNC DFM, and avionics‑adjacent software consulting."
          href="/consulting"
        />
      </div>
    </section>
  )
}
