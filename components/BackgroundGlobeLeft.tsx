// Renders a zoomed, spinning globe only on the left half of the screen.
export default function BackgroundGlobeLeft() {
  return (
    <div
      aria-hidden
      className="
        pointer-events-none absolute left-0 top-0 h-screen w-1/2 -z-10
        overflow-hidden
        sm:opacity-80 opacity-60
      "
    >
      {/* Rotating layer */}
      <div
        className="
          h-full w-full will-change-transform
          animate-[spin_60s_linear_infinite]
          motion-reduce:animate-none
        "
        style={{
          backgroundImage: "url('/img/globe-grid-bold.svg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: '180% 180%',     // zoomed in
          backgroundPosition: '60% 40%',   // adjust focal point
          filter: 'drop-shadow(0 0 16px rgba(0,0,0,0.25))',
        }}
      />
    </div>
  );
}
