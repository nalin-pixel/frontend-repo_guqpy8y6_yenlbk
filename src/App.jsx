import { useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import LiveDeals from './components/LiveDeals';
import AuthPanel from './components/AuthPanel';

function App() {
  const handleGoogle = useCallback((data) => {
    console.log('Google signed in', data);
  }, []);

  const handleRegister = useCallback((data) => {
    console.log('Registered', data);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <Navbar />
      <Hero onPrimaryAction={handleGoogle} />
      <Features />
      <LiveDeals />
      <AuthPanel onGoogle={handleGoogle} onRegister={handleRegister} />
      <footer className="py-10 text-center text-sm text-slate-500">© {new Date().getFullYear()} Nebula Trips — Travel beyond limits.</footer>
    </div>
  );
}

export default App;
