/**
 * Apple Notes Portfolio
 * Original Author: Ashutosh Sharma (@ashuwhy)
 * GitHub: https://github.com/ashuwhy/reactfolio
 *
 * While this template is available for use, proper attribution
 * to the original author is required.
 */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const pageRoutes = require('./routes/pages');
const https = require('https');

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

// Enhanced keep-alive endpoint with comprehensive status check
app.get('/ping', async (req, res) => {
  try {
    // Test MongoDB connection
    await mongoose.connection.db.admin().ping();
    
    const status = {
      status: 'ok',
      server: {
        timestamp: new Date().toISOString(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        uptime: {
          seconds: Math.floor(process.uptime()),
          formatted: formatUptime(process.uptime())
        },
        version: {
          node: process.version,
          platform: process.platform,
          arch: process.arch
        }
      },
      database: {
        status: 'connected',
        type: 'MongoDB',
        ping: 'successful'
      },
      performance: {
        memory: {
          used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100,
          total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024 * 100) / 100,
          unit: 'MB',
          percentUsed: Math.round(process.memoryUsage().heapUsed / process.memoryUsage().heapTotal * 100)
        },
        cpu: {
          load: Math.round(process.cpuUsage().user / 1000000),
          unit: 'ms'
        }
      },
      lastPing: {
        time: new Date().toISOString(),
        success: true
      }
    };
    res.json(status);
  } catch (error) {
    res.status(500).json({
      status: 'error',
      timestamp: new Date().toISOString(),
      error: 'Database connection failed',
      details: {
        message: error.message,
        time: new Date().toISOString()
      }
    });
  }
});

// Helper function to format uptime in a human-readable format
function formatUptime(uptime) {
  const days = Math.floor(uptime / 86400);
  const hours = Math.floor((uptime % 86400) / 3600);
  const minutes = Math.floor((uptime % 3600) / 60);
  const seconds = Math.floor(uptime % 60);

  const parts = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  if (seconds > 0) parts.push(`${seconds}s`);

  return parts.join(' ');
}

function pingSelf() {
  https.get(`${process.env.REACT_APP_API_URL}/ping`, (resp) => {
    console.log('Self-ping successful:', new Date().toISOString());
  }).on('error', (err) => {
    console.error('Self-ping failed:', err.message);
  });
}

// Ping every 14 minutes (840000 ms)
setInterval(pingSelf, 840000);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));