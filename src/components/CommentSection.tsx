
import React, { useState } from 'react';
import { User } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

type Comment = {
  id: number;
  name: string;
  date: string;
  text: string;
  likes: number;
};

const initialComments: Comment[] = [
  {
    id: 1,
    name: 'Isabella Rossi',
    date: '2 ore fa',
    text: 'Questo articolo è molto interessante! Ho apprezzato i consigli sulle tendenze estive.',
    likes: 24
  },
  {
    id: 2,
    name: 'Marco Bianchi',
    date: '5 ore fa',
    text: 'Concordo con i suggerimenti per lo stile di vita mediterraneo. La dieta mediterranea ha davvero cambiato il mio modo di vivere.',
    likes: 16
  },
  {
    id: 3,
    name: 'Giulia Verdi',
    date: '1 giorno fa',
    text: 'Grazie per i consigli sui prodotti di bellezza naturali. Sto cercando di passare a un regime più ecologico.',
    likes: 32
  }
];

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');
  
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim() || !name.trim()) {
      toast({
        title: "Errore",
        description: "Per favore inserisci sia il tuo nome che un commento.",
        variant: "destructive"
      });
      return;
    }
    
    const comment: Comment = {
      id: comments.length + 1,
      name: name,
      date: 'Appena pubblicato',
      text: newComment,
      likes: 0
    };
    
    setComments([comment, ...comments]);
    setNewComment('');
    setName('');
    
    toast({
      title: "Commento pubblicato",
      description: "Il tuo commento è stato pubblicato con successo.",
    });
  };
  
  const handleLike = (id: number) => {
    setComments(
      comments.map(comment => 
        comment.id === id 
          ? { ...comment, likes: comment.likes + 1 } 
          : comment
      )
    );
  };
  
  return (
    <section className="py-16 bg-magazine-light-gray">
      <div className="magazine-container">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl lg:text-4xl font-grazia font-bold mb-2">
              Opinioni dei Lettori
            </h2>
            <p className="text-magazine-black/70">
              Unisciti alla conversazione e condividi i tuoi pensieri.
            </p>
          </div>
          
          {/* Add comment form */}
          <div className="bg-white shadow-sm p-6 mb-8">
            <h3 className="text-xl font-grazia font-bold mb-4">
              Lascia un commento
            </h3>
            
            <form onSubmit={handleAddComment} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm uppercase tracking-wider font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-b-2 border-magazine-black/20 focus:border-magazine-yellow outline-none transition-colors duration-300"
                  placeholder="Il tuo nome"
                />
              </div>
              
              <div>
                <label htmlFor="comment" className="block text-sm uppercase tracking-wider font-medium mb-2">
                  Commento
                </label>
                <textarea
                  id="comment"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border-b-2 border-magazine-black/20 focus:border-magazine-yellow outline-none transition-colors duration-300 resize-none"
                  placeholder="Il tuo commento"
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-magazine-black text-white font-medium uppercase tracking-wider text-sm button-hover relative overflow-hidden transition-all duration-300 hover:text-magazine-black"
                >
                  Pubblica
                </button>
              </div>
            </form>
          </div>
          
          {/* Comments list */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-white shadow-sm p-6 transition-transform duration-300 hover:translate-y-[-2px]">
                <div className="flex items-center mb-3">
                  <div className="bg-magazine-black/10 rounded-full p-2 mr-3">
                    <User size={20} className="text-magazine-black/70" />
                  </div>
                  <div>
                    <h4 className="font-medium">{comment.name}</h4>
                    <p className="text-xs text-magazine-black/60">{comment.date}</p>
                  </div>
                </div>
                
                <p className="text-magazine-black/80 mb-4">
                  {comment.text}
                </p>
                
                <div className="flex justify-end">
                  <button 
                    onClick={() => handleLike(comment.id)}
                    className="flex items-center text-sm text-magazine-black/60 hover:text-magazine-black transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>{comment.likes}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
