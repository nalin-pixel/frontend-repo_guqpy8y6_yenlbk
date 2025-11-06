import { useState } from 'react';

export default function AuthPanel({ onGoogle, onRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
      const res = await fetch(`${base}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Registration failed');
      setMessage('Account created. You can now sign in with Google or email.');
      onRegister?.(data);
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    setMessage('');
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
      const res = await fetch(`${base}/auth/google`, { method: 'GET' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Google auth failed');
      onGoogle?.(data);
      setMessage('Signed in with Google (demo).');
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="auth" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Sign in to continue</h2>
            <p className="mt-3 text-slate-600">Use Google for one-tap access, or create an account with email.</p>
            <button onClick={handleGoogle} disabled={loading} className="mt-6 inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-600/20 hover:brightness-110 disabled:opacity-60">
              Continue with Google
            </button>
          </div>
          <form onSubmit={handleRegister} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
            <label className="mt-4 block text-sm font-medium text-slate-700">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" />
            <button type="submit" disabled={loading} className="mt-6 w-full rounded-lg bg-slate-900 text-white font-semibold py-2.5 hover:translate-y-[-1px] transition-transform disabled:opacity-60">Create account</button>
            {message && <p className="mt-3 text-sm text-slate-700">{message}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
