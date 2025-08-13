export default function Page() {
  return (
    <section className="py-12">
      <h1 className="text-3xl sm:text-4xl font-bold">Contact</h1>
      <p className="mt-2 text-white/80">We typically respond within 1–2 business days.</p>
      <form action="/api/contact" method="post" className="glass p-6 mt-6 grid gap-4 max-w-xl">
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
          <textarea id="message" name="message" placeholder="How can we help?" rows={5} className="w-full rounded-xl bg-transparent border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-fds-cyan/70" />
        </div>
        <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-fds-cyan/90 text-fds-bg font-semibold px-5 py-3 shadow-glow hover:bg-fds-accent transition-colors">
          Send
        </button>
      </form>
    </section>
  )
}
