var express = require('express');
var app = express();
var path = require('path');

// Render a static html file at the root path
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'routes/base.html'));
});
// TODO: load static files from a "public" dir
app.use('/static', express.static(path.join(__dirname, 'routes/static')));

// Simple route example
app.get('/about', function (req, res) {
  res.send('this is an about page');
});

// Setup a route file, put multiple endpoints in that file
app.use('/api/user', require('./routes/api/user'));

// Start the server
var port = 3000;
app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});