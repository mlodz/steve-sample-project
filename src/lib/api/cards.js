var express = require('express');
var router = express.Router();
var cards = require('../models/cards');

router.post('/card', function(req, res, next) {
  let {title, body} = req.body;
  cards.createCard(title, body);
  res.json({saved: true});
});

router.get('/cards', async function(req, res, next) {
  let myCards = cards.readCards();
  await new Promise(res => setTimeout(res, 500)); // sleep 1 sec
  res.json({cards: myCards});
});

router.get('/card/:id', function(req, res, next) {
  let cards = cards.readCards();
  let targetId = parseInt(req.params.id, 10);
  res.json({card: myCards.find(c => c.id === targetId)});
});



module.exports = router;
