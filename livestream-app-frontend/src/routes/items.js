// routes/items.js

const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

// Create a new item
router.post('/create', itemsController.createItem);

// Read all items
router.get('/read', itemsController.getAllItems);

// Read a single item by ID
router.get('/read/:id', itemsController.getItemById);

// Update an existing item by ID
router.put('/update/:id', itemsController.updateItem);

// Delete an item by ID
router.delete('/delete/:id', itemsController.deleteItem);

module.exports = router;
