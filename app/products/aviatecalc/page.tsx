import Image from 'next/image'

export default function Page() {
  return (
    <div className="py-16 flex flex-col items-center text-center gap-10">

      {/* Logo + Headline together */}
      <div className="flex flex-col items-center gap-3">
        <Image
          src="/this ones gotta work.png"
          alt="AviateVFR"
          width={320}
          height={320}
          className="rounded-2xl"
          priority
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">AviateVFR</h1>
      </div>

      {/* Description */}
      <div className="max-w-2xl flex flex-col gap-4">
        <p className="text-lg text-white/75 leading-relaxed">
          The automatic VFR route finder that accounts for weather, terrain, and airspace
          to create a safe and legal route from start to destination in seconds.
        </p>
      </div>

      {/* CTA */}
      <a
        href="https://aviatecalc.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-xl bg-fds-cyan/90 text-fds-bg font-semibold px-8 py-4 text-lg shadow-glow hover:bg-fds-accent transition-colors"
        role="button"
      >
        Visit AviateVFR
      </a>

      {/* Feature highlights */}
      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {[
          { label: 'Weather-aware', detail: 'Routes built around real-time and forecast conditions.' },
          { label: 'Terrain-safe', detail: 'Automatic obstacle and elevation clearance checking.' },
          { label: 'Airspace-legal', detail: 'Avoids restricted, prohibited, and controlled airspace.' },
        ].map(({ label, detail }) => (
          <div key={label} className="glass p-5 text-left flex flex-col gap-2">
            <span className="text-fds-accent font-semibold">{label}</span>
            <span className="text-sm text-white/70">{detail}</span>
          </div>
        ))}
      </div>

    </div>
  )
}
