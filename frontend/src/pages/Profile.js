import React, { useState } from 'react';
import { gsap } from 'gsap';
import axios from 'axios';

const Profile = ({ user, setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const endpoint = isLogin ? 'login' : 'register';
      const response = await axios.post(`http://localhost:5000/api/users/${endpoint}`, formData);
      
      setUser(response.data.user);
      localStorage.setItem('token', response.data.token);
      
      // Success animation
      gsap.to('.form-container', {
        duration: 0.5,
        scale: 1.05,
        ease: "back.out(1.7)",
        onComplete: () => {
          gsap.to('.form-container', {
            duration: 0.3,
            scale: 1,
            ease: "power2.out"
          });
        }
      });
      
    } catch (error) {
      console.error('Authentication error:', error);
      
      // Error animation
      gsap.to('.form-container', {
        duration: 0.1,
        x: -10,
        repeat: 5,
        yoyo: true,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set('.form-container', { x: 0 });
        }
      });
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    
    // Form transition animation
    gsap.to('.form-container', {
      duration: 0.3,
      rotationY: 90,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to('.form-container', {
          duration: 0.3,
          rotationY: 0,
          ease: "power2.inOut"
        });
      }
    });
  };

  if (user) {
    return (
      <div className="profile-page">
        <div className="profile-container">
          <h2>Welcome, {user.name}!</h2>
          <div className="profile-info">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Member since:</strong> {new Date().toLocaleDateString()}</p>
          </div>
          <button 
            className="logout-btn"
            onClick={() => {
              setUser(null);
              localStorage.removeItem('token');
            }}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="form-container">
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required={!isLogin}
              />
            </div>
          )}
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <button type="submit" className="auth-btn">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        
        <p className="toggle-text">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span onClick={toggleMode} className="toggle-link">
            {isLogin ? 'Register' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Profile;