'use client'

import { useEffect, useRef } from 'react'

export default function BackgroundGlobe() {
  const globeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const SIZE = Math.min(window.innerWidth * 0.9, 900)
    let x = window.innerWidth / 2 - SIZE / 2
    let y = window.innerHeight / 2 - SIZE / 2
    let vx = 0.4
    let vy = 0.3
    let raf: number

    function tick() {
      x += vx
      y += vy

      const maxX = window.innerWidth - SIZE
      const maxY = window.innerHeight - SIZE

      if (x <= 0) { x = 0; vx = Math.abs(vx) }
      if (x >= maxX) { x = maxX; vx = -Math.abs(vx) }
      if (y <= 0) { y = 0; vy = Math.abs(vy) }
      if (y >= maxY) { y = maxY; vy = -Math.abs(vy) }

      if (globeRef.current) {
        globeRef.current.style.transform = `translate(${x}px, ${y}px)`
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-60">
      <div
        ref={globeRef}
        className="absolute top-0 left-0 will-change-transform"
        style={{ width: 'min(90vw, 900px)', height: 'min(90vw, 900px)' }}
      >
        <div
          className="w-full h-full animate-[spin_90s_linear_infinite] motion-reduce:animate-none"
          style={{
            backgroundImage: "url('/img/globe-grid-bold.svg')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }}
        />
      </div>
    </div>
  )
}
