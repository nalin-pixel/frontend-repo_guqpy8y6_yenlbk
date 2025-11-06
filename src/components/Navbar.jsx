import { Rocket, Globe2, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur-md/80 bg-white/40 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-fuchsia-500 p-[2px]">
            <div className="h-full w-full rounded-[10px] bg-white/90 flex items-center justify-center">
              <Rocket className="h-5 w-5 text-blue-600" />
            </div>
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-800">Nebula Trips</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#destinations" className="hover:text-slate-900 transition-colors inline-flex items-center gap-2"><Globe2 className="h-4 w-4"/>Destinations</a>
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#auth" className="hover:text-slate-900 transition-colors inline-flex items-center gap-2"><User className="h-4 w-4"/>Account</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex rounded-full border border-slate-300/70 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-white shadow-sm">Contact</button>
          <a href="#auth" className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:brightness-110">Get started</a>
        </div>
      </div>
    </header>
  );
}
