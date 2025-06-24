const express = require('express');
const router = express.Router();
const { getBidSuggestion} = require('../controllers/geminiController');

router.get('/', getBidSuggestion);

module.exports = router;
