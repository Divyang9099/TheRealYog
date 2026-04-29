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

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
