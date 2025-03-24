
import React from 'react';

const StorySection: React.FC = () => {
  const storyBlocks = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "La mia storia con Keto Probiotix",
      content: "Voglio condividere una storia che è quasi finita male per me. Ciao a tutti. Non ne ho mai parlato. E non mi piace lamentarmi. Ma mi è successo quello di cui avevo tanta paura: la mia vita si è quasi trasformata in un inferno in un istante. Fin dall'infanzia amo i pasticcini. Crescendo ho iniziato a cucinarli tutti i giorni a casa. Cupcakes, muffin, crostate, torte: non è stato difficile per me alzarmi presto la mattina per cuocere qualcosa di delizioso prima del lavoro."
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "La mia routine quotidiana",
      content: "Prima della pandemia lavoravo in ufficio come designer e poi siamo stati trasferiti in una località remota. Ora il mio posto di lavoro era a casa e cucinare era ancora più facile. Potrei mettere il cupcake nel forno tra un compito e l'altro. Mi piaceva soprattutto quando nel frigorifero era rimasta la pasta sfoglia e ho già cotto la pasta sfoglia con la marmellata per il mio caffè mattutino. Come capisci, ho mangiato molti cibi ricchi di carboidrati, ma non mi muovevo molto a causa del lavoro. Non mi piace andare in palestra e la più vicina è piuttosto lontana da casa mia."
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Un momento ha cambiato la mia vita",
      content: "Stavo tornando a casa dopo una passeggiata con le amiche. Sulle strisce pedonali mi faceva molto male lo stomaco. Ero stravolta dal dolore, nel vero senso della parola. A causa di ciò, mi sono fermata bruscamente e per poco non sono stata investita da un'auto. Più precisamente, se avessi fatto almeno un passo, allora sarebbe andata a sbattere contro di me. Ero molto spaventata, mi tremavano le gambe e le braccia, dentro tutto si contraeva e continuava a farmi male. Ho vomitato per strada e sono svenuta."
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Ho raggiunto il limite",
      content: "È successo tutto il giorno in cui è iniziata la mia vacanza. Sei mesi fa, abbiamo concordato con le amiche che avremmo trascorso una vacanza insieme: saremmo andati al fiume o al lago con le tende. Ma la mattina non riuscivo ad alzarmi dal letto. Il mio stomaco faceva molto male e non avevo la forza. L'ambulanza mi ha portato. Ho trascorso tre ore in ospedale per un esame. Ho fatto una risonanza magnetica, una TAC, un sacco di test. Per tutto questo tempo sono stato trasportato su una barella speciale dell'ospedale, perché mi era difficile persino sedermi."
    },
    {
      id: 5,
      imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "La soluzione: Keto Probiotix",
      content: "Il medico mi ha indicato il sito ufficiale del produttore, dove posso ordinare Keto Probiotix. Sono stata fortunata, perché sono arrivata all'azione -50%! Anche la consegna mi ha fatto piacere: il giorno dopo il corriere aveva già portato la merce. Ho seguito il corso Keto Probiotix e una volta alla settimana controllava le misurazioni e pesava. Non credevo ai miei occhi: i chilogrammi sembravano sciogliersi davanti ai miei occhi, il mio stomaco ha smesso di farmi male e lo svenimento è finito. E questo nonostante non sia morta di fame, ma in palestra ho preso un peso normale. Sono molto felice dell'occasione e dell'aiuto di Keto Probiotix."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="magazine-container">
        <div className="text-center mb-12">
          <span className="px-3 py-1 bg-magazine-yellow text-magazine-black text-xs uppercase tracking-wider font-medium inline-block mb-4">
            Esperienza Personale
          </span>
          <h2 className="text-4xl lg:text-5xl font-grazia font-bold mb-4">La Mia Trasformazione</h2>
          <p className="text-lg font-sans max-w-2xl mx-auto">
            Una storia vera di come Keto Probiotix ha cambiato la mia vita
          </p>
        </div>

        <div className="space-y-16">
          {storyBlocks.map((block, index) => (
            <div 
              key={block.id} 
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`reveal-container ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <div className="bg-magazine-yellow p-2">
                  <img 
                    src={block.imageUrl} 
                    alt={`Story illustration ${block.id}`} 
                    className="w-full h-auto object-cover max-h-[400px]"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div className={`space-y-4 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                <span className="text-xs font-medium uppercase tracking-wider text-magazine-black/60">Parte {block.id}</span>
                <h3 className="text-2xl md:text-3xl font-grazia font-bold">{block.title}</h3>
                <div className="w-16 h-1 bg-magazine-yellow"></div>
                <p className="text-magazine-black/80 leading-relaxed">
                  {block.content}
                </p>
                {block.id === 5 && (
                  <a 
                    href="#order-form" 
                    className="inline-block mt-4 px-8 py-3 bg-magazine-black text-white font-medium uppercase tracking-wider text-sm button-hover transition-colors duration-300"
                  >
                    Ordina Ora
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
