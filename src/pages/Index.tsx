
import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductInfo from '../components/ProductInfo';
import StorySection from '../components/StorySection';
import CombinedFeedback from '../components/CombinedFeedback';
import OrderForm from '../components/OrderForm';
import Footer from '../components/Footer';

const Index = () => {
  // Simulate page load animation
  useEffect(() => {
    // Add a class to the body when component mounts to trigger animations
    document.body.classList.add('page-loaded');
    
    // For smooth reveal animations on scroll
    const revealContainers = document.querySelectorAll('.reveal-container');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    });
    
    revealContainers.forEach(container => {
      observer.observe(container);
    });
    
    return () => {
      document.body.classList.remove('page-loaded');
      observer.disconnect();
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProductInfo />
        <StorySection />
        <CombinedFeedback />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
