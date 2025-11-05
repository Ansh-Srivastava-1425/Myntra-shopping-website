const express = require('express');
const router = express.Router();

// Newsletter subscription
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    
    // Here you would typically save to database and send email
    console.log(`Newsletter subscription: ${email}`);
    
    res.json({ message: 'Successfully subscribed to newsletter!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;