import Link from 'next/link'
import Image from 'next/image'

export default function ProductCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 mt-16">
      <div className="glass p-8 flex flex-col sm:flex-row items-center gap-8">
        <Image
          src="/AviateVFR_transparent_background.png"
          alt="AviateVFR"
          width={180}
          height={180}
          className="rounded-xl shrink-0"
        />
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-2xl font-semibold">AviateVFR</h3>
            <p className="text-sm text-white/75 mt-2">The automatic VFR route finder that accounts for weather, terrain, and airspace to create a safe and legal route from start to destination in seconds.</p>
          </div>
          <Link
            href="/products/aviatecalc"
            className="self-start inline-flex items-center rounded-lg border border-white/20 px-4 py-2 hover:border-fds-accent/60 hover:text-fds-accent hover:underline underline-offset-4 decoration-fds-accent/60 transition-colors"
            role="button"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  )
}
