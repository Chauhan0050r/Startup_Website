const express = require('express');
const router = express.Router();

router.get('/example', (req, res) => {
  res.json({ message: 'Example API route is working!' });
});

module.exports = router;
