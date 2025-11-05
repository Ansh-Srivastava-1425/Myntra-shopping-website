import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { gsap } from 'gsap';
import axios from 'axios';

const Products = ({ cart, setCart, wishlist, setWishlist }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [category]);

  useEffect(() => {
    // Product cards animation
    gsap.fromTo('.product-card', 
      { opacity: 0, y: 50 },
      { 
        duration: 0.8,
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: "back.out(1.7)"
      }
    );

    // Product card hover animations
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        gsap.to(this, {
          duration: 0.3,
          scale: 1.05,
          rotationY: 5,
          ease: "power2.out"
        });
      });
      
      card.addEventListener('mouseleave', function() {
        gsap.to(this, {
          duration: 0.3,
          scale: 1,
          rotationY: 0,
          ease: "power2.out"
        });
      });
    });
  }, [products]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/api/products?category=${category}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (product) => {
    try {
      setCart([...cart, product]);
      
      // Animation feedback
      gsap.to(event.target, {
        duration: 0.2,
        scale: 0.95,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(event.target, {
            duration: 0.3,
            scale: 1,
            backgroundColor: "#4CAF50",
            color: "white",
            ease: "back.out(1.7)"
          });
        }
      });
      
      setTimeout(() => {
        gsap.to(event.target, {
          duration: 0.3,
          backgroundColor: "#ff3f6c",
          ease: "power2.out"
        });
      }, 1000);
      
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const addToWishlist = async (product) => {
    try {
      if (!wishlist.find(item => item._id === product._id)) {
        setWishlist([...wishlist, product]);
        
        // Heart animation
        const heartIcon = event.target.querySelector('i');
        gsap.to(heartIcon, {
          duration: 0.3,
          scale: 1.3,
          color: "#ff3f6c",
          ease: "back.out(2)"
        });
      }
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="products-page">
      <section className="products">
        <h2 className="section-title">
          {category === 'all' ? 'All Products' : category.toUpperCase()} Collection
        </h2>
        
        <div className="product-grid">
          {products.map(product => (
            <div key={product._id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <div className="product-actions">
                <button 
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
                <button 
                  className="wishlist-btn"
                  onClick={() => addToWishlist(product)}
                >
                  <i className="fa-regular fa-heart"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {products.length === 0 && (
          <div className="no-products">
            <p>No products found in this category.</p>
            <button onClick={() => window.location.href = '/products/all'}>
              View All Products
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Products;