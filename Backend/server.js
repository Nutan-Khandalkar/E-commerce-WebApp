const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoutes = require('./src/routes/userRoutes');


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/E-commerce';
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET", "POST","DELETE","PUT"],
  credentials: true
}));




// Middleware
app.use(express.json());

app.use(bodyParser.urlencoded())


//database connection

mongoose.connect(MONGODB_URI, {
  serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
})
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    console.log('💡 TIP: If this is an IP whitelist error, please:');
    console.log('   1. Log in to MongoDB Atlas');
    console.log('   2. Go to "Network Access"');
    console.log('   3. Click "Add IP Address" and select "Allow Access From Anywhere" (or add your current IP)');
    
    // Fallback to local MongoDB if Atlas fails (optional, but helpful for dev)
    
    console.log(`🔄 Attempting to connect to local MongoDB at ${localURI}...`);
    
    mongoose.connect(MONGODB_URI)
      .then(() => console.log('✅ Connected to local MongoDB'))
      .catch(() => {
        console.error('❌ Could not connect to local MongoDB either. Please ensure MongoDB is installed and running.');
      });
  });

// Disable buffering so that operations fail immediately if not connected
mongoose.set('bufferCommands', false);


// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('Server is healthy');
});

app.use('/user',userRoutes)


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 

