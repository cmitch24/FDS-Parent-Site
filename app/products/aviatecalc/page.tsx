export default function Page() {
  return (
    <section className="py-12">
  <h1 className="text-3xl sm:text-4xl font-bold">AviateCalc (Beta)</h1>
      <p className="mt-4 text-white/80 max-w-2xl">
        Engineering-grade calculators for pilots and maintainers. Weight & balance range finder is available now.
      </p>
      <div className="mt-6 flex gap-4">
        <a href="https://aviatecalc.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-xl bg-fds-cyan/90 text-fds-bg font-semibold px-5 py-3 shadow-glow hover:bg-fds-accent transition-colors" role="button">
          Visit aviatecalc.com
        </a>
      </div>
    </section>
  )
}
