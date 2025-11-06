import Spline from '@splinetool/react-spline';

export default function Hero({ onPrimaryAction }) {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 md:pt-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/30 px-3 py-1 text-xs font-medium text-slate-800 backdrop-blur-md">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
            Real-time travel engine
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]">
            Explore the future of travel
          </h1>
          <p className="mt-4 text-slate-700 text-lg md:text-xl max-w-xl">
            Book holographic journeys, find live deals, and manage your identity across the galaxy. Powered by a real‑time API and secure auth.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button onClick={onPrimaryAction} className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-white font-semibold shadow-lg shadow-slate-900/20 hover:translate-y-[-1px] transition-transform">
              Start with Google
            </button>
            <a href="#destinations" className="inline-flex items-center justify-center rounded-full bg-white/70 px-6 py-3 text-slate-900 font-semibold border border-white/60 backdrop-blur-md hover:bg-white">
              Browse live deals
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white"></div>
    </section>
  );
}
