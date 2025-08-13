import Hero from '@/components/Hero'
import ProductCards from '@/components/ProductCards'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ProductCards />
      <section className="mx-auto max-w-3xl px-4 mt-10">
        <div className="glass p-6 text-center">
          <h2 className="text-xl font-semibold">Trusted engineering, practical tools</h2>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-white/80 text-left inline-block">
            <li>CAD/CAM expertise</li>
            <li>Aviation-focused calculators</li>
            <li>Rapid prototyping & manufacturability feedback</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
