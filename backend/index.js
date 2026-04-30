const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const inquiryRoutes = require('./routes/inquiryRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Database connection
const connectDB = async () => {
  try {
    const bypassUri = "mongodb://divyang:divyang9099@ac-ng5937g-shard-00-00.0qbq0bf.mongodb.net:27017,ac-ng5937g-shard-00-01.0qbq0bf.mongodb.net:27017,ac-ng5937g-shard-00-02.0qbq0bf.mongodb.net:27017/therealyoga?ssl=true&replicaSet=atlas-v3rv04-shard-0&authSource=admin&retryWrites=true&w=majority";
    const conn = await mongoose.connect(bypassUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();

// Routes
app.use('/api/inquiries', inquiryRoutes);

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.get('/', (req, res) => {
  res.send('TheRealYoga Backend is running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  
  // Render Warm-up Script: Pings the server every 8 minutes to prevent spin-down
  const URL = "https://therealyog.onrender.com/api/health";
  const interval = 8 * 60 * 1000; // 8 minutes

  setInterval(() => {
    const https = require('https');
    https.get(URL, (res) => {
      console.log(`Self-ping successful: ${res.statusCode} at ${new Date().toISOString()}`);
    }).on('error', (err) => {
      console.error(`Self-ping failed: ${err.message}`);
    });
  }, interval);
});
