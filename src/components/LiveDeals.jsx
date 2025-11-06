import { useEffect, useState } from 'react';
import { Plane, Clock, MapPin } from 'lucide-react';

export default function LiveDeals() {
  const [deals, setDeals] = useState([]);
  const [status, setStatus] = useState('connecting');

  useEffect(() => {
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
    const url = base.replace('http', 'ws') + '/realtime/deals';
    const ws = new WebSocket(url);

    ws.onopen = () => setStatus('connected');
    ws.onmessage = (ev) => {
      try {
        const msg = JSON.parse(ev.data);
        if (msg.type === 'deal') {
          setDeals((prev) => [msg.payload, ...prev].slice(0, 6));
        }
      } catch (e) {}
    };
    ws.onclose = () => setStatus('closed');

    return () => ws.close();
  }, []);

  return (
    <section id="destinations" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Live deals</h2>
            <p className="mt-2 text-slate-600">Streaming the latest fares and stays as they happen.</p>
          </div>
          <div className="text-sm text-slate-600 inline-flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {status}
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deals.length === 0 && (
            <div className="col-span-full text-slate-500">Waiting for live updates…</div>
          )}
          {deals.map((d, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 p-5 bg-gradient-to-br from-white to-slate-50 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                  <Plane className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{d.route}</div>
                  <div className="text-sm text-slate-600 inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{d.destination}</div>
                </div>
                <div className="ml-auto font-semibold text-emerald-600">${'{'}d.price{'}'}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
