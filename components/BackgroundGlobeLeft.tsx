export default function BackgroundGlobe() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-60"
    >
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[900px] max-h-[900px] will-change-transform animate-[spin_90s_linear_infinite] motion-reduce:animate-none"
        style={{
          backgroundImage: "url('/img/globe-grid-bold.svg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        }}
      />
    </div>
  )
}
