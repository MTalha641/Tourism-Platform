// src/routes/index.js

const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');

// Define routes
router.get('/', indexController.index);

module.exports = router;
