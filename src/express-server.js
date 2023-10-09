var express = require('express');
var app = express();
var path = require('path');

// Setup a route file, put multiple endpoints in that file
app.use('/api/common', require('./lib/api/common'));
app.use('/api/user', require('./lib/api/user'));

// Start the server
var port = 3000;
app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});