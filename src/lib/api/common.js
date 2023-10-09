var express = require('express');
var router = express.Router();

router.get('/random-number', function (req, res) {
    res.json({number: Math.random()});
});

module.exports = router;