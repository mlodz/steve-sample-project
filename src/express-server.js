var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')

var app = express();
var jsonParser = bodyParser.json()

// Simple Middleware, log each request
app.use(function(req, res, next) {
  console.log(`${(new Date()).toISOString()} ${req.method} ${req.path}`);
  next();
});

// Setup a route file, put multiple endpoints in that file
app.use('/api/common', jsonParser, require('./lib/api/common'));
app.use('/api/cards', jsonParser, require('./lib/api/cards'));
app.use('/api/user', require('./lib/api/user'));


// Start the server
var port = 3000;
app.listen(port, function () {
  console.log('Node/Express server listening on port ' + port);
});
