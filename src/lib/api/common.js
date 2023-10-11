var express = require('express');
var router = express.Router();
var cards = require('../models/cards');

router.get('/random-number', function (req, res) {
  res.json({
    number: Math.floor(Math.random() * 100)
  });
});

module.exports = router;
