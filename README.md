# 🛍️ Myntra Clone - MERN Stack E-commerce Website

A modern, fully-functional e-commerce website built with **MERN Stack** (MongoDB, Express.js, React, Node.js) featuring advanced **GSAP animations** and a complete shopping experience.

![Myntra Clone](https://img.shields.io/badge/Myntra-Clone-ff3f6c?style=for-the-badge&logo=shopping-cart)
![MERN Stack](https://img.shields.io/badge/MERN-Stack-61dafb?style=for-the-badge&logo=react)
![GSAP](https://img.shields.io/badge/GSAP-Animations-88ce02?style=for-the-badge&logo=greensock)

## 🚀 Live Demo

- **Working Version**: Open `working-index.html` for immediate testing
- **Full MERN App**: Follow installation instructions below

## ✨ Features

### 🎯 **Core Functionality**
- ✅ **Product Catalog** with category filtering (MEN, WOMEN, KIDS, HOME, BEAUTY, GENZ)
- ✅ **Real-time Search** with instant results
- ✅ **Shopping Cart** with add/remove functionality
- ✅ **Wishlist** with heart animations
- ✅ **User Authentication** (Login/Register)
- ✅ **Newsletter Subscription**
- ✅ **Responsive Design** for all devices

### 🎨 **Advanced GSAP Animations**
- 🌟 **Loading Screen** with brand animation
- 🌟 **3D Navigation** hover effects with rotation
- 🌟 **Hero Section** entrance animations
- 🌟 **Product Cards** stagger animations
- 🌟 **Floating Elements** with continuous motion
- 🌟 **Morphing Shapes** background elements
- 🌟 **Parallax Scrolling** effects
- 🌟 **Interactive Buttons** with feedback animations

### 🛒 **E-commerce Features**
- 📱 **Category Navigation** - Filter products by category
- 🔍 **Smart Search** - Find products by name, category, or description
- 🛍️ **Add to Cart** - Working cart with visual feedback
- ❤️ **Wishlist** - Save favorite products
- 👤 **User Profiles** - Login/Register system
- 📊 **Statistics Counter** - Animated counters
- 📧 **Newsletter** - Email subscription

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - Modern UI library
- **GSAP 3.12** - Professional animations
- **CSS3** - Modern styling with gradients and effects
- **Font Awesome** - Icon library
- **Webpack** - Module bundler

### **Backend**
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

## 📦 Installation

### **Quick Start (No Installation Required)**
```bash
# Just open this file in your browser
working-index.html
```

### **Full MERN Stack Setup**

1. **Clone the repository**
```bash
git clone https://github.com/Ansh-Srivastava-1425/Myntra-shopping-website.git
cd Myntra-shopping-website
```

2. **Backend Setup**
```bash
cd backend
npm install
npm run dev
```

3. **Frontend Setup**
```bash
cd frontend
npm install
npm start
```

4. **Database Setup**
```bash
# Seed sample products
curl -X POST http://localhost:5000/api/products/seed
```

### **Automated Setup**
```bash
# Run this for automatic setup
start-app.bat
```

## 🎮 Usage

### **Navigation**
- Click category buttons (MEN, WOMEN, KIDS, etc.) to filter products
- Use the search bar for real-time product search
- Click profile to login/register

### **Shopping**
- Browse products with beautiful animations
- Add items to cart with visual feedback
- Save favorites to wishlist with heart animations
- View cart and wishlist counters in navigation

### **Interactive Elements**
- Hover over navigation items for 3D effects
- Scroll to see parallax background animations
- Watch floating cards move continuously
- Experience smooth page transitions

## 📁 Project Structure

```
myntra/
├── 📄 working-index.html          # Standalone working version
├── 📄 index.html                  # Original HTML file
├── 📄 style.css                   # Main stylesheet
├── 📄 script.js                   # GSAP animations
├── 📁 backend/                    # Node.js backend
│   ├── 📄 server.js              # Express server
│   ├── 📁 models/                # MongoDB models
│   ├── 📁 routes/                # API routes
│   └── 📄 package.json           # Backend dependencies
├── 📁 frontend/                   # React frontend
│   ├── 📁 src/                   # React components
│   ├── 📁 public/                # Static files
│   └── 📄 package.json           # Frontend dependencies
└── 📄 README.md                  # This file
```

## 🌐 API Endpoints

### **Products**
- `GET /api/products` - Get all products
- `GET /api/products?category=MEN` - Filter by category
- `POST /api/products/seed` - Create sample data

### **Users**
- `POST /api/users/register` - Register user
- `POST /api/users/login` - Login user
- `POST /api/users/cart/:productId` - Add to cart
- `POST /api/users/wishlist/:productId` - Add to wishlist

### **Search & Newsletter**
- `GET /api/search?q=shirt` - Search products
- `POST /api/newsletter/subscribe` - Subscribe to newsletter

## 🎨 Animation Features

### **GSAP Timeline Animations**
- **Page Load Sequence**: Navbar → Hero → Cards (2-second choreography)
- **Scroll Triggers**: Products animate when scrolled into view
- **Hover Effects**: 3D transforms on navigation and cards

### **Interactive Animations**
- **Button Feedback**: Scale and color changes on click
- **Cart Animations**: Success feedback when adding items
- **Search Focus**: 3D tilt effect on search bar focus
- **Floating Cards**: Continuous sine wave movements

## 🛍️ Products Included

### **24 Products Across 6 Categories:**
- **MEN** (5): T-Shirts, Formal Shirts, Jeans, Hoodies, Sneakers
- **WOMEN** (5): Dresses, Handbags, Blouses, Heels, Leggings
- **KIDS** (4): Jackets, Backpacks, Sneakers, T-Shirts
- **HOME** (4): Cushions, Wall Art, Candles, Lamps
- **BEAUTY** (4): Lipstick, Serums, Brushes, Perfumes
- **GENZ** (4): Graphic Tees, Bucket Hats, Chunky Sneakers, Crop Tops

## 🚀 Performance Features

- **GPU-Accelerated Animations** - Smooth 60fps performance
- **Lazy Loading** - Images load as needed
- **Responsive Design** - Works on all screen sizes
- **Fast Search** - Instant results as you type
- **Optimized Assets** - Compressed images and minified code

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ansh Srivastava**
- GitHub: [@Ansh-Srivastava-1425](https://github.com/Ansh-Srivastava-1425)
- Repository: [Myntra Shopping Website](https://github.com/Ansh-Srivastava-1425/Myntra-shopping-website)

## 🙏 Acknowledgments

- **GSAP** for amazing animation library
- **Unsplash** for high-quality product images
- **Font Awesome** for beautiful icons
- **MongoDB** for flexible database solution

---

⭐ **Star this repository if you found it helpful!** ⭐