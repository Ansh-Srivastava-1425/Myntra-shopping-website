import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import axios from 'axios';

const Home = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    // Hero animations
    const tl = gsap.timeline();
    tl.to('.hero-title', {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power3.out"
    })
    .to('.hero-subtitle', {
      duration: 0.8,
      opacity: 1,
      y: 0,
      ease: "power2.out"
    }, "-=0.3")
    .to('.cta-button', {
      duration: 0.6,
      opacity: 1,
      y: 0,
      ease: "back.out(1.7)"
    }, "-=0.2")
    .to('.floating-card', {
      duration: 1,
      opacity: 1,
      y: 0,
      rotation: 360,
      stagger: 0.2,
      ease: "elastic.out(1, 0.3)"
    }, "-=0.5");

    // Floating animations
    gsap.to('.card-1', {
      duration: 3,
      y: -20,
      rotation: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to('.card-2', {
      duration: 4,
      y: -15,
      rotation: -3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5
    });

    gsap.to('.card-3', {
      duration: 3.5,
      y: -25,
      rotation: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1
    });

    // Stats counter animation
    const animateCounter = (element, target) => {
      gsap.to(element, {
        duration: 2,
        innerHTML: target,
        ease: "power2.out",
        snap: { innerHTML: 1 }
      });
    };

    // Scroll animations
    const handleScroll = () => {
      const statsSection = document.querySelector('.stats');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          document.querySelectorAll('.stat-number').forEach((el, index) => {
            const targets = [10000, 500, 50, 99];
            animateCounter(el, targets[index]);
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/newsletter/subscribe', { email });
      setSubscribed(true);
      gsap.to('.newsletter-btn', {
        duration: 0.5,
        backgroundColor: "#4CAF50",
        innerHTML: "Subscribed!",
        ease: "back.out(1.7)"
      });
    } catch (error) {
      console.error('Newsletter subscription error:', error);
    }
  };

  const handleShopNow = () => {
    window.location.href = '/products/all';
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Fashion Forward</h1>
          <p className="hero-subtitle">Discover the latest trends in fashion</p>
          <button className="cta-button" onClick={handleShopNow}>Shop Now</button>
        </div>
        <div className="hero-image">
          <div className="floating-card card-1">50% OFF</div>
          <div className="floating-card card-2">New Arrivals</div>
          <div className="floating-card card-3">Free Shipping</div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">0</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">0</div>
            <div className="stat-label">Products</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">0</div>
            <div className="stat-label">Cities</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">0</div>
            <div className="stat-label">Satisfaction %</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial active">
            <p className="testimonial-text">"Amazing quality and fast delivery! Love shopping here."</p>
            <div className="testimonial-author">- Sarah Johnson</div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2>Stay Updated</h2>
          <p>Get the latest fashion trends and exclusive offers delivered to your inbox</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input 
              type="email" 
              className="newsletter-input" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-btn" disabled={subscribed}>
              {subscribed ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;