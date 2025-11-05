import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import axios from 'axios';

const Navbar = ({ user, setUser, cart, wishlist }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Navigation animations
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        gsap.to(this, {
          duration: 0.3,
          scale: 1.1,
          y: -3,
          rotationX: 5,
          ease: "back.out(1.7)"
        });
      });
      
      item.addEventListener('mouseleave', function() {
        gsap.to(this, {
          duration: 0.3,
          scale: 1,
          y: 0,
          rotationX: 0,
          ease: "power2.out"
        });
      });
    });
  }, []);

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 2) {
      try {
        const response = await axios.get(`http://localhost:5000/api/search?q=${query}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error('Search error:', error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleCategoryClick = (category) => {
    navigate(`/products/${category.toLowerCase()}`);
  };

  const handleLogin = () => {
    // Simple mock login
    setUser({ name: 'John Doe', email: 'john@example.com' });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav className="nav-iteam">
      <Link to="/">
        <img src="/myntra.svg" height="36px" width="53px" alt="Logo" />
      </Link>
      
      <ul>
        {['MEN', 'WOMEN', 'KIDS', 'HOME', 'BEAUTY', 'GENZ'].map(category => (
          <li key={category} className="nav-item" onClick={() => handleCategoryClick(category)}>
            {category}
          </li>
        ))}
        <li className="nav-item">
          STUDIO <sup className="nav-sub-iteam">NEW</sup>
        </li>
      </ul>

      <div className="search-container">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input 
          placeholder="Search for products, brands and more" 
          className="desktop-searchBar" 
          value={searchQuery}
          onChange={handleSearch}
        />
        {searchResults.length > 0 && (
          <div className="search-dropdown">
            {searchResults.map(product => (
              <div key={product._id} className="search-item">
                {product.name} - ₹{product.price}
              </div>
            ))}
          </div>
        )}
      </div>

      <ul className="nav-profile">
        <li onClick={user ? handleLogout : handleLogin}>
          <i className="fa-solid fa-user"></i>
          <span>{user ? 'Logout' : 'Profile'}</span>
        </li>
        <li>
          <i className="fa-regular fa-heart"></i>
          <span>Wishlist ({wishlist.length})</span>
        </li>
        <li>
          <i className="fa-solid fa-bag-shopping"></i>
          <span>Bag ({cart.length})</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;