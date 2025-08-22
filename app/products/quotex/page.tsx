export default function Page() {
  return (
    <section className="py-12">
      <h1 className="text-3xl sm:text-4xl font-bold">QuoteX (Preview)</h1>
      <p className="mt-4 text-white/80 max-w-2xl">
        A design‑stage manufacturability and quoting assistant for engineers.
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <form action="/api/consulting" method="post" className="glass p-6 grid gap-4">
          <input name="type" defaultValue="quotex-waitlist" type="hidden" />
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input id="name" name="name" placeholder="Name" required className="w-full rounded-xl bg-transparent border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-fds-cyan/70" />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input id="email" name="email" type="email" placeholder="Email" required className="w-full rounded-xl bg-transparent border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-fds-cyan/70" />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea id="message" name="message" placeholder="What are you hoping QuoteX will help with?" rows={4} className="w-full rounded-xl bg-transparent border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-fds-cyan/70" />
          </div>
          <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-fds-cyan/90 text-fds-bg font-semibold px-5 py-3 shadow-glow hover:bg-fds-accent transition-colors">
            Join Waitlist
          </button>
        </form>

        <aside className="glass p-6 h-full">
          <h2 className="text-xl font-semibold">Why QuoteX?</h2>
          <p className="mt-3 text-white/80">
            Getting a prototype made shouldn’t take weeks of back-and-forth with machine shops. QuoteX gives engineers instant manufacturability insights and cost estimates directly from their CAD files.
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-white/80">
            <li>Upload a model → see where designs may be hard or expensive to machine.</li>
            <li>Get real-time cost estimates → based on geometry, stock size, and machining complexity.</li>
            <li>Design smarter, faster → catch problems early, cut iteration cycles, and reduce wasted spend.</li>
          </ul>
          <p className="mt-4 text-white/80">
            QuoteX is not just a quoting tool — it’s a design assistant that helps you move from idea to manufacturable part with confidence.
          </p>
        </aside>
      </div>
    </section>
  )
}
