const express = require('express');
const Page = require('../models/Page');
const router = express.Router();
const NodeCache = require('node-cache');

// Cache with 5 minutes TTL
const pageCache = new NodeCache({ stdTTL: 300 });

router.get('/', async (req, res) => {
  try {
    // Check cache first
    const cachedPages = pageCache.get('allPages');
    if (cachedPages) {
      return res.json(cachedPages);
    }

    // If not in cache, fetch from DB
    const pages = await Page.find();
    
    // Store in cache
    pageCache.set('allPages', pages);
    
    res.json(pages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pages' });
  }
});

router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const newPage = new Page({ title, content });
  await newPage.save();
  res.status(201).send('Page created');
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  await Page.findByIdAndUpdate(id, { content });
  res.send('Page updated');
});

module.exports = router; 