

var express = require('express');
var router = express.Router();

router.get('/current', function (req, res) {
    res.json(['nobody is logged in', 1234]);
});

module.exports = router;