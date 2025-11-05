const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Search products
router.get('/', async (req, res) => {
  try {
    const { q } = req.query;
    
    if (!q) return res.json([]);
    
    const products = await Product.find({
      $or: [
        { name: { $regex: q, $options: 'i' } },
        { category: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } }
      ]
    }).limit(10);
    
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;