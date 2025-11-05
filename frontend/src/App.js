import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Profile from './pages/Profile';
import { gsap } from 'gsap';

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Loading animation
    const tl = gsap.timeline();
    tl.from('.loading-screen', {
      duration: 2,
      opacity: 1,
      display: 'flex'
    })
    .to('.loading-screen', {
      duration: 1,
      y: '-100%',
      ease: 'power4.inOut'
    });
  }, []);

  return (
    <div className="App">
      <div className="loading-screen">
        <div className="loading-text">MYNTRA</div>
      </div>
      
      <Navbar user={user} setUser={setUser} cart={cart} wishlist={wishlist} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Products cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} />} />
        <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
      </Routes>
      
      <div className="cursor-follower"></div>
      <div className="parallax-bg"></div>
      <div className="morphing-shape shape-1"></div>
      <div className="morphing-shape shape-2"></div>
      <div className="morphing-shape shape-3"></div>
    </div>
  );
}

export default App;