const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = {};
    
    if (category && category !== 'all') {
      query.category = category.toUpperCase();
    }
    
    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }
    
    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create sample products
router.post('/seed', async (req, res) => {
  try {
    const sampleProducts = [
      // MEN Category
      { name: 'Classic Cotton T-Shirt', price: 1299, category: 'MEN', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop', description: 'Premium cotton t-shirt for everyday comfort', rating: 4.5, reviews: 128 },
      { name: 'Formal Business Shirt', price: 2499, category: 'MEN', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=400&fit=crop', description: 'Professional formal shirt for office wear', rating: 4.3, reviews: 89 },
      { name: 'Denim Jeans', price: 3299, category: 'MEN', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop', description: 'Classic blue denim jeans with perfect fit', rating: 4.7, reviews: 203 },
      { name: 'Casual Hoodie', price: 2199, category: 'MEN', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=400&fit=crop', description: 'Comfortable hoodie for casual outings', rating: 4.4, reviews: 156 },
      { name: 'Sports Sneakers', price: 4999, category: 'MEN', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop', description: 'High-performance sports sneakers', rating: 4.6, reviews: 312 },
      
      // WOMEN Category
      { name: 'Elegant Summer Dress', price: 3499, category: 'WOMEN', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop', description: 'Beautiful floral summer dress', rating: 4.8, reviews: 245 },
      { name: 'Designer Handbag', price: 5999, category: 'WOMEN', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=400&fit=crop', description: 'Luxury designer handbag', rating: 4.5, reviews: 178 },
      { name: 'Silk Blouse', price: 2799, category: 'WOMEN', image: 'https://images.unsplash.com/photo-1564257577-0a4b8e0b8e0e?w=300&h=400&fit=crop', description: 'Premium silk blouse for formal occasions', rating: 4.4, reviews: 134 },
      { name: 'High Heels', price: 3799, category: 'WOMEN', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&h=400&fit=crop', description: 'Stylish high heels for parties', rating: 4.2, reviews: 98 },
      { name: 'Yoga Leggings', price: 1899, category: 'WOMEN', image: 'https://images.unsplash.com/photo-1506629905607-d9c297d3f5f5?w=300&h=400&fit=crop', description: 'Comfortable yoga and workout leggings', rating: 4.7, reviews: 267 },
      
      // KIDS Category
      { name: 'Kids Winter Jacket', price: 2299, category: 'KIDS', image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=300&h=400&fit=crop', description: 'Warm and cozy winter jacket for kids', rating: 4.6, reviews: 89 },
      { name: 'School Backpack', price: 1599, category: 'KIDS', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop', description: 'Durable school backpack with multiple compartments', rating: 4.5, reviews: 156 },
      { name: 'Kids Sneakers', price: 2499, category: 'KIDS', image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=300&h=400&fit=crop', description: 'Comfortable sneakers for active kids', rating: 4.4, reviews: 123 },
      { name: 'Cartoon T-Shirt', price: 899, category: 'KIDS', image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=300&h=400&fit=crop', description: 'Fun cartoon printed t-shirt', rating: 4.3, reviews: 78 },
      
      // HOME Category
      { name: 'Decorative Cushions', price: 1299, category: 'HOME', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=400&fit=crop', description: 'Beautiful decorative cushions for living room', rating: 4.4, reviews: 67 },
      { name: 'Wall Art Canvas', price: 2199, category: 'HOME', image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=400&fit=crop', description: 'Modern wall art canvas for home decoration', rating: 4.6, reviews: 89 },
      { name: 'Scented Candles', price: 799, category: 'HOME', image: 'https://images.unsplash.com/photo-1602874801006-e26c4c5b5e8e?w=300&h=400&fit=crop', description: 'Aromatic scented candles set', rating: 4.5, reviews: 134 },
      { name: 'Table Lamp', price: 3499, category: 'HOME', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop', description: 'Modern LED table lamp', rating: 4.3, reviews: 56 },
      
      // BEAUTY Category
      { name: 'Matte Lipstick Set', price: 1299, category: 'BEAUTY', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=400&fit=crop', description: 'Long-lasting matte lipstick collection', rating: 4.7, reviews: 234 },
      { name: 'Face Serum', price: 2499, category: 'BEAUTY', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=400&fit=crop', description: 'Anti-aging vitamin C face serum', rating: 4.8, reviews: 189 },
      { name: 'Makeup Brush Set', price: 1899, category: 'BEAUTY', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=400&fit=crop', description: 'Professional makeup brush collection', rating: 4.5, reviews: 167 },
      { name: 'Perfume', price: 3999, category: 'BEAUTY', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=400&fit=crop', description: 'Luxury fragrance for special occasions', rating: 4.6, reviews: 145 },
      
      // GENZ Category
      { name: 'Oversized Graphic Tee', price: 1599, category: 'GENZ', image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=300&h=400&fit=crop', description: 'Trendy oversized graphic t-shirt', rating: 4.4, reviews: 198 },
      { name: 'Bucket Hat', price: 899, category: 'GENZ', image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=300&h=400&fit=crop', description: 'Stylish bucket hat for street fashion', rating: 4.2, reviews: 87 },
      { name: 'Chunky Sneakers', price: 4299, category: 'GENZ', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=300&h=400&fit=crop', description: 'Trendy chunky sneakers', rating: 4.5, reviews: 156 },
      { name: 'Crop Top', price: 1199, category: 'GENZ', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', description: 'Stylish crop top for casual wear', rating: 4.3, reviews: 123 }
    ];
    
    await Product.deleteMany({});
    const products = await Product.insertMany(sampleProducts);
    res.json({ message: 'Sample products created', count: products.length, products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;