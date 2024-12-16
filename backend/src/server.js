const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config(); // Load environment variables

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Backend of Startup Website!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const cors = require('cors');
app.use(cors());
