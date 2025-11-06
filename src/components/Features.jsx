import { Shield, Zap, Globe2, Ticket } from 'lucide-react';

const items = [
  {
    icon: Globe2,
    title: 'Live Global Inventory',
    desc: 'Search flights, stays, and experiences with real-time availability across 120+ providers.'
  },
  {
    icon: Zap,
    title: 'Instant Pricing',
    desc: 'Streaming prices update as you filter, ensuring you always catch the lowest fare.'
  },
  {
    icon: Shield,
    title: 'Secure Digital Identity',
    desc: 'One-tap Google sign-in with end-to-end encryption and device trust checks.'
  },
  {
    icon: Ticket,
    title: 'Smart Rewards',
    desc: 'Earn points on every booking and redeem dynamically for upgrades and perks.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Why travelers choose us</h2>
          <p className="mt-3 text-slate-600">Built on a modern, real-time stack to keep your plans fluid and your identity safe.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
