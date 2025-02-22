const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const pageRoutes = require('./routes/pages');

dotenv.config();

// Check for required environment variables
if (!process.env.MONGODB_URI) {
  console.error('MONGODB_URI environment variable is not defined');
  process.exit(1);
}

const app = express();
app.use(cors({
  origin: ['https://ashuwhy.vercel.app', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  retryWrites: true,
  w: 'majority',
  ssl: true,
  authSource: 'admin'
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

app.use('/api/auth', authRoutes);
app.use('/api/pages', pageRoutes);

// Keep-alive endpoint
app.get('/ping', (req, res) => {
  res.send('pong');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));