// overlays.js

const express = require('express');
const router = express.Router();

// In-memory data store (you should use a database in production)
const overlays = [];

// Create an overlay
router.post('/', (req, res) => {
  const { content, position, size } = req.body;
  const overlay = { content, position, size };
  overlays.push(overlay);
  res.status(201).json(overlay);
});

// Define other CRUD routes (GET, PUT, DELETE) for overlays here

module.exports = router;
