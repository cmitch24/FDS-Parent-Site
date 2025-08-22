// Renders a zoomed, spinning globe only on the left half of the screen.
export default function BackgroundGlobeLeft() {
  return (
    <div
      aria-hidden
      className="
        pointer-events-none fixed left-0 top-0 h-screen w-[50vw] z-0
        overflow-hidden
  sm:opacity-90 opacity-60
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
          backgroundSize: '200% 200%',     // zoomed in more for presence
          backgroundPosition: '40% 50%',   // shift focal point toward left-center
          filter: 'drop-shadow(0 0 16px rgba(0,0,0,0.25))',
          outline: '1px dashed rgba(126,252,255,0.5)', // DEBUG: see bounds
          boxShadow: 'inset 0 0 80px rgba(0,0,0,0.35)', // extra vignette
        }}
      />
    </div>
  );
}
