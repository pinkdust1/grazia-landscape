
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ThankYou: React.FC = () => {
  const location = useLocation();
  const customerName = location.state?.customerName || 'Cliente';
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="magazine-container">
          <div className="max-w-3xl mx-auto text-center bg-white p-8 md:p-12 shadow-lg rounded-lg border border-magazine-black/10">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 rounded-full p-4">
                <CheckCircle size={60} className="text-green-600" />
              </div>
            </div>
            
            <span className="px-3 py-1 bg-magazine-yellow text-magazine-black text-xs uppercase tracking-wider font-medium inline-block mb-4">
              Ordine Confermato
            </span>
            
            <h1 className="text-3xl md:text-5xl font-grazia font-bold mb-6">
              Grazie, {customerName}!
            </h1>
            
            <p className="text-lg mb-8">
              Il tuo ordine di <span className="font-semibold">Keto Probiotix</span> è stato ricevuto con successo.
              Ti abbiamo inviato una conferma via email con tutti i dettagli dell'ordine.
            </p>
            
            <div className="bg-magazine-light-gray p-6 rounded-lg mb-8">
              <h2 className="text-xl font-grazia font-bold mb-3">Cosa Succede Ora?</h2>
              <ul className="text-left space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span>Il tuo ordine sarà elaborato entro 24 ore</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span>Riceverai un'email con il numero di tracciamento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span>La consegna avverrà entro 3-5 giorni lavorativi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span>Il nostro team di supporto è a tua disposizione per qualsiasi domanda</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <Link 
                to="/" 
                className="inline-block px-8 py-3 bg-magazine-black text-white font-medium uppercase tracking-wider text-sm button-hover transition-colors duration-300"
              >
                Torna alla Home
              </Link>
              
              <p className="text-sm text-magazine-black/60">
                Hai domande sul tuo ordine? Contattaci all'indirizzo <a href="mailto:supporto@ketoprobiotix.it" className="text-magazine-black underline">supporto@ketoprobiotix.it</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThankYou;
