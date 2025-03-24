
// Global variables
let currentSlide = 0;
const testimonials = [
  {
    name: "Marta Bianchi",
    date: "15 settembre 2023",
    rating: 5,
    text: "Ho provato Keto Probiotix dopo mesi di tentativi falliti con altre diete. In sole 3 settimane ho perso 6 kg e mi sento piena di energia. La cosa migliore è che non ho sofferto la fame e ho potuto mantenere una vita sociale normale!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Luca Romano",
    date: "3 ottobre 2023",
    rating: 5,
    text: "Da uomo di 45 anni, pensavo che perdere peso fosse ormai impossibile alla mia età. Keto Probiotix mi ha dimostrato il contrario. Ho perso 8 kg in un mese e la mia digestione è migliorata notevolmente. Lo consiglio a tutti!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Sofia Esposito",
    date: "20 ottobre 2023",
    rating: 4,
    text: "Ero scettica all'inizio, ma dopo aver visto i risultati di un'amica ho deciso di provare. Il primo risultato che ho notato è stato la riduzione del gonfiore addominale, che era il mio problema principale. Ora sono alla mia terza settimana e ho già perso 4 kg!",
    avatar: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

const comments = [
  {
    id: 1,
    author: "Giovanni Rossi",
    date: "10 ottobre 2023",
    rating: 5,
    text: "Non credevo nel potere dei probiotici fino a quando non ho provato Keto Probiotix. La differenza è stata incredibile. Non solo ho perso peso, ma mi sento molto più energico. Lo consiglio vivamente a chi cerca una soluzione naturale.",
    replies: [
      {
        author: "Team Keto Probiotix",
        date: "11 ottobre 2023",
        text: "Grazie Giovanni per la tua testimonianza! Siamo felici che Keto Probiotix ti abbia aiutato a raggiungere i tuoi obiettivi."
      }
    ]
  },
  {
    id: 2,
    author: "Alessia Conti",
    date: "5 ottobre 2023",
    rating: 4,
    text: "Dopo la nascita del mio secondo figlio, ho lottato per perdere i chili di troppo. Keto Probiotix mi ha aiutato a ritrovare la mia forma. L'unico motivo per cui do 4 stelle è che ho avuto un po' di nausea nei primi giorni, ma poi è passata.",
    replies: [
      {
        author: "Giulia Marino",
        date: "6 ottobre 2023",
        text: "Ho avuto la stessa esperienza Alessia! Anche io ho avuto un po' di nausea all'inizio, ma è durata solo un paio di giorni. Continua così!"
      },
      {
        author: "Team Keto Probiotix",
        date: "7 ottobre 2023",
        text: "Ciao Alessia, grazie per il feedback. La nausea iniziale può essere una reazione al cambiamento del metabolismo. Di solito scompare dopo pochi giorni, come hai notato. Siamo felici che tu stia vedendo risultati positivi!"
      }
    ]
  },
  {
    id: 3,
    author: "Marco Ferretti",
    date: "28 settembre 2023",
    rating: 5,
    text: "Ho avuto problemi digestivi per anni e niente sembrava funzionare. Un amico mi ha consigliato Keto Probiotix e devo dire che è stato un cambiamento radicale. Non solo i problemi digestivi sono migliorati, ma ho anche perso peso senza sforzo.",
    replies: []
  },
  {
    id: 4,
    author: "Francesca Neri",
    date: "20 settembre 2023",
    rating: 5,
    text: "Fantastico prodotto! Ho notato risultati già dalla prima settimana. Il mio metabolismo è migliorato e il gonfiore è sparito. Lo consiglio a tutte le donne che hanno provato di tutto senza successo.",
    replies: [
      {
        author: "Laura Belli",
        date: "21 settembre 2023",
        text: "Francesca, dopo quanto tempo hai iniziato a vedere i primi risultati? Sto pensando di provarlo anche io."
      },
      {
        author: "Francesca Neri",
        date: "22 settembre 2023",
        text: "Ciao Laura! Ho notato meno gonfiore già dopo 3-4 giorni, e dopo una settimana avevo perso circa 1 kg. È stato davvero sorprendente perché non ho cambiato molto la mia alimentazione."
      }
    ]
  }
];

// DOM Ready function
document.addEventListener('DOMContentLoaded', function() {
  // Initialize current date display
  initializeDate();
  
  // Initialize mobile menu
  initializeMobileMenu();
  
  // Initialize header scroll effect
  initializeHeaderScroll();
  
  // Initialize testimonials slider
  initializeTestimonialsSlider();
  
  // Initialize comments section
  initializeComments();
  
  // Initialize comment form
  initializeCommentForm();
  
  // Initialize star rating
  initializeStarRating();
  
  // Initialize order form
  initializeOrderForm();
  
  // Initialize animations
  initializeAnimations();
});

// Initialize current date display
function initializeDate() {
  const date = new Date();
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const formattedDate = date.toLocaleDateString('it-IT', options);
  
  const currentDateElement = document.getElementById('currentDate');
  const mobileDateElement = document.getElementById('mobileDateDisplay');
  const copyrightElement = document.getElementById('copyright');
  
  if (currentDateElement) {
    currentDateElement.textContent = formattedDate;
  }
  
  if (mobileDateElement) {
    mobileDateElement.textContent = formattedDate;
  }
  
  if (copyrightElement) {
    const currentYear = new Date().getFullYear();
    copyrightElement.textContent = `© ${currentYear} GRAZIA. Tutti i diritti riservati.`;
  }
}

// Initialize mobile menu
function initializeMobileMenu() {
  const menuButton = document.getElementById('menuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function() {
      if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        menuButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
        document.body.style.overflow = 'auto';
      } else {
        mobileMenu.classList.add('active');
        menuButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
        document.body.style.overflow = 'hidden';
      }
    });
    
    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        menuButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
        document.body.style.overflow = 'auto';
      });
    });
  }
}

// Initialize header scroll effect
function initializeHeaderScroll() {
  const header = document.querySelector('.header');
  
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
}

// Initialize testimonials slider
function initializeTestimonialsSlider() {
  const sliderContainer = document.getElementById('testimonials-slider');
  
  if (sliderContainer) {
    // Create slider HTML
    let sliderHTML = '';
    
    // Add testimonial slides
    testimonials.forEach((testimonial, index) => {
      sliderHTML += `
        <div class="testimonial-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
          <div class="testimonial-header">
            <div class="testimonial-avatar">
              <img src="${testimonial.avatar}" alt="${testimonial.name}">
            </div>
            <div class="testimonial-author">
              <h4>${testimonial.name}</h4>
              <div class="testimonial-date">${testimonial.date}</div>
            </div>
            <div class="testimonial-rating">
              ${generateStarRating(testimonial.rating)}
            </div>
          </div>
          <div class="testimonial-content">
            <p>${testimonial.text}</p>
          </div>
        </div>
      `;
    });
    
    // Add slider controls
    sliderHTML += `
      <div class="slider-controls">
        <button class="slider-control prev-slide">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button class="slider-control next-slide">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    `;
    
    // Set slider HTML
    sliderContainer.innerHTML = sliderHTML;
    
    // Add event listeners to slider controls
    const prevButton = sliderContainer.querySelector('.prev-slide');
    const nextButton = sliderContainer.querySelector('.next-slide');
    
    if (prevButton && nextButton) {
      prevButton.addEventListener('click', function() {
        changeSlide(-1);
      });
      
      nextButton.addEventListener('click', function() {
        changeSlide(1);
      });
    }
    
    // Auto-change slides every 5 seconds
    setInterval(function() {
      changeSlide(1);
    }, 5000);
  }
}

// Change testimonial slide
function changeSlide(direction) {
  const slides = document.querySelectorAll('.testimonial-slide');
  
  if (slides.length > 0) {
    // Hide current slide
    slides[currentSlide].classList.remove('active');
    
    // Calculate new slide index
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    
    // Show new slide
    slides[currentSlide].classList.add('active');
  }
}

// Generate star rating HTML
function generateStarRating(rating) {
  let starsHTML = '';
  
  for (let i = 1; i <= 5; i++) {
    starsHTML += `<span class="star ${i <= rating ? 'active' : ''}">★</span>`;
  }
  
  return starsHTML;
}

// Initialize comments section
function initializeComments() {
  const commentsContainer = document.getElementById('comments-container');
  
  if (commentsContainer) {
    let commentsHTML = '';
    
    comments.forEach(comment => {
      commentsHTML += `
        <div class="comment" data-id="${comment.id}">
          <div class="comment-header">
            <div class="comment-author">${comment.author}</div>
            <div class="comment-date">${comment.date}</div>
          </div>
          <div class="comment-rating">
            ${generateStarRating(comment.rating)}
          </div>
          <div class="comment-text">
            <p>${comment.text}</p>
          </div>
          <div class="comment-actions">
            <div class="comment-action reply-action" data-id="${comment.id}">Rispondi</div>
          </div>
          
          ${comment.replies.length > 0 ? `
            <div class="comment-replies">
              ${comment.replies.map(reply => `
                <div class="reply">
                  <div class="reply-header">
                    <div class="reply-author">${reply.author}</div>
                    <div class="reply-date">${reply.date}</div>
                  </div>
                  <div class="reply-text">
                    <p>${reply.text}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      `;
    });
    
    commentsContainer.innerHTML = commentsHTML;
    
    // Add event listeners to reply buttons
    const replyButtons = document.querySelectorAll('.reply-action');
    
    replyButtons.forEach(button => {
      button.addEventListener('click', function() {
        const commentId = this.getAttribute('data-id');
        const comment = document.querySelector(`.comment[data-id="${commentId}"]`);
        
        // Check if reply form already exists
        if (!comment.querySelector('.reply-form')) {
          const replyForm = document.createElement('div');
          replyForm.className = 'reply-form';
          replyForm.innerHTML = `
            <form class="comment-form">
              <div class="form-group">
                <input type="text" placeholder="Il tuo nome" required>
              </div>
              <div class="form-group">
                <textarea placeholder="La tua risposta" required></textarea>
              </div>
              <div class="form-actions">
                <button type="submit" class="button-hover">Invia Risposta</button>
                <button type="button" class="cancel-reply">Annulla</button>
              </div>
            </form>
          `;
          
          // Insert reply form after comment actions
          this.parentNode.after(replyForm);
          
          // Focus on textarea
          setTimeout(() => {
            replyForm.querySelector('textarea').focus();
          }, 100);
          
          // Add event listener to submit button
          replyForm.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input').value;
            const text = this.querySelector('textarea').value;
            
            if (name && text) {
              // Get or create replies container
              let repliesContainer = comment.querySelector('.comment-replies');
              
              if (!repliesContainer) {
                repliesContainer = document.createElement('div');
                repliesContainer.className = 'comment-replies';
                comment.appendChild(repliesContainer);
              }
              
              // Create new reply element
              const newReply = document.createElement('div');
              newReply.className = 'reply';
              
              const today = new Date();
              const formattedDate = today.toLocaleDateString('it-IT', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              });
              
              newReply.innerHTML = `
                <div class="reply-header">
                  <div class="reply-author">${name}</div>
                  <div class="reply-date">${formattedDate}</div>
                </div>
                <div class="reply-text">
                  <p>${text}</p>
                </div>
              `;
              
              // Add new reply to replies container
              repliesContainer.appendChild(newReply);
              
              // Remove reply form
              replyForm.remove();
            }
          });
          
          // Add event listener to cancel button
          replyForm.querySelector('.cancel-reply').addEventListener('click', function() {
            replyForm.remove();
          });
        }
      });
    });
  }
}

// Initialize comment form
function initializeCommentForm() {
  const commentForm = document.getElementById('commentForm');
  
  if (commentForm) {
    commentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('commentName').value;
      const text = document.getElementById('commentText').value;
      const rating = parseInt(document.getElementById('ratingValue').value);
      
      if (name && text && rating) {
        // Create new comment
        const newComment = {
          id: comments.length + 1,
          author: name,
          date: new Date().toLocaleDateString('it-IT', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }),
          rating: rating,
          text: text,
          replies: []
        };
        
        // Add comment to array
        comments.unshift(newComment);
        
        // Refresh comments section
        initializeComments();
        
        // Reset form
        commentForm.reset();
        
        // Reset star rating
        const stars = document.querySelectorAll('.star-rating .star');
        stars.forEach(function(star) {
          star.classList.add('active');
        });
        
        // Show thank you message
        alert('Grazie per il tuo commento!');
      }
    });
  }
}

// Initialize star rating functionality
function initializeStarRating() {
  const stars = document.querySelectorAll('.star-rating .star');
  const ratingValue = document.getElementById('ratingValue');
  
  if (stars.length > 0 && ratingValue) {
    // Set all stars active by default
    stars.forEach(function(star) {
      star.classList.add('active');
    });
    
    // Add event listeners to stars
    stars.forEach(function(star) {
      star.addEventListener('click', function() {
        const rating = parseInt(this.getAttribute('data-rating'));
        
        // Update ratingValue input
        ratingValue.value = rating;
        
        // Update star display
        stars.forEach(function(s) {
          const starRating = parseInt(s.getAttribute('data-rating'));
          
          if (starRating <= rating) {
            s.classList.add('active');
          } else {
            s.classList.remove('active');
          }
        });
      });
    });
  }
}

// Initialize order form
function initializeOrderForm() {
  const orderForm = document.getElementById('productOrderForm');
  const modal = document.getElementById('thankYouModal');
  const closeModal = document.getElementById('closeModal');
  const backToHomeBtn = document.getElementById('backToHomeBtn');
  
  if (orderForm && modal && closeModal && backToHomeBtn) {
    orderForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get customer name
      const customerName = document.getElementById('fullName').value;
      
      // Set customer name in modal
      document.getElementById('customerName').textContent = customerName.split(' ')[0] || 'Cliente';
      
      // Show modal
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    
    // Close modal events
    closeModal.addEventListener('click', function() {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
    
    backToHomeBtn.addEventListener('click', function() {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }
}

// Initialize animations
function initializeAnimations() {
  // Reveal containers on scroll
  const revealContainers = document.querySelectorAll('.reveal-container');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  revealContainers.forEach(container => {
    observer.observe(container);
  });
  
  // Hero content animation
  setTimeout(() => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.classList.add('animate');
    }
    
    const photoCollage = document.querySelector('.photo-collage');
    if (photoCollage) {
      photoCollage.classList.add('animate');
    }
  }, 300);
}
