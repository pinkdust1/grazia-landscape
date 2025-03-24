
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-magazine-black text-white pt-16 pb-8">
      <div className="magazine-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-grazia font-bold uppercase tracking-wider mb-6">
              GRAZIA
            </h3>
            <p className="text-white/70 mb-6">
              La tua fonte di ispirazione per moda, bellezza e lifestyle. Rimani aggiornato sulle ultime tendenze e scopri il meglio della cultura italiana.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'pinterest'].map((social) => (
                <a 
                  key={social}
                  href="#"
                  className="text-white/70 hover:text-magazine-yellow transition-colors duration-300"
                  aria-label={`Follow us on ${social}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium uppercase tracking-wider mb-6">
              Categorie
            </h4>
            <ul className="space-y-3">
              {['Moda', 'Bellezza', 'Lifestyle', 'Cultura', 'Celebrity', 'Viaggi'].map((category) => (
                <li key={category}>
                  <a 
                    href="#"
                    className="text-white/70 hover:text-magazine-yellow transition-colors duration-300"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium uppercase tracking-wider mb-6">
              Link Utili
            </h4>
            <ul className="space-y-3">
              {['Chi Siamo', 'Contatti', 'Pubblicità', 'Abbonamenti', 'FAQ', 'Termini e Condizioni'].map((link) => (
                <li key={link}>
                  <a 
                    href="#"
                    className="text-white/70 hover:text-magazine-yellow transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium uppercase tracking-wider mb-6">
              Newsletter
            </h4>
            <p className="text-white/70 mb-4">
              Iscriviti alla nostra newsletter per ricevere aggiornamenti e offerte esclusive.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="La tua email"
                className="flex-1 px-4 py-2 bg-white/10 border-2 border-white/20 text-white outline-none focus:border-magazine-yellow transition-colors duration-300"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-magazine-yellow text-magazine-black font-medium hover:bg-white transition-colors duration-300"
              >
                Iscriviti
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 mt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 lg:mb-0">
              &copy; {currentYear} GRAZIA. Tutti i diritti riservati.
            </p>
            
            <div className="flex space-x-6">
              {['Privacy Policy', 'Cookie Policy', 'Preferenze Cookie'].map((policy) => (
                <a 
                  key={policy}
                  href="#"
                  className="text-white/60 text-sm hover:text-magazine-yellow transition-colors duration-300"
                >
                  {policy}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
