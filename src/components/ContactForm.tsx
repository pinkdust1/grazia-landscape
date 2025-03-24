
import React, { useState } from 'react';
import { toast } from "@/components/ui/use-toast";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Richiesta inviata",
        description: "Grazie per il tuo messaggio. Ti risponderemo presto.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };
  
  return (
    <section className="py-16">
      <div className="magazine-container">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10 text-center">
            <div className="inline-block">
              <span className="px-3 py-1 bg-magazine-yellow text-magazine-black text-xs uppercase tracking-wider font-medium">
                Esclusivo
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-grazia font-bold mt-4 mb-2">
              Iscriviti alla Newsletter
            </h2>
            <p className="text-magazine-black/70">
              Ricevi in anteprima le ultime tendenze e offerte speciali direttamente nella tua casella di posta.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm uppercase tracking-wider font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-b-2 border-magazine-black/20 focus:border-magazine-yellow outline-none transition-colors duration-300"
                  placeholder="Il tuo nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm uppercase tracking-wider font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-b-2 border-magazine-black/20 focus:border-magazine-yellow outline-none transition-colors duration-300"
                  placeholder="La tua email"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm uppercase tracking-wider font-medium mb-2">
                Oggetto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-b-2 border-magazine-black/20 focus:border-magazine-yellow outline-none transition-colors duration-300"
                placeholder="Oggetto del messaggio"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm uppercase tracking-wider font-medium mb-2">
                Messaggio
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border-b-2 border-magazine-black/20 focus:border-magazine-yellow outline-none transition-colors duration-300 resize-none"
                placeholder="Il tuo messaggio"
              ></textarea>
            </div>
            
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={loading}
                className={`px-8 py-3 bg-magazine-black text-white font-medium uppercase tracking-wider text-sm button-hover relative overflow-hidden transition-all duration-300 ${
                  loading ? 'opacity-70' : 'hover:text-magazine-black'
                }`}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Invio in corso...
                  </span>
                ) : 'Invia messaggio'}
              </button>
            </div>
            
            <div className="text-center text-xs text-magazine-black/60 mt-6">
              Iscrivendoti, accetti la nostra <a href="#" className="underline hover:text-magazine-yellow">Politica sulla Privacy</a> e acconsenti a ricevere aggiornamenti via email.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
