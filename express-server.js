const express = require('express')
const app = express()
const path = require('path');

// Render a static html file at the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'routes/base.html'));
})
// TODO: load static files from a "public" dir
app.use('/static', express.static(path.join(__dirname, 'routes/static')));

// Simple route example
app.get('/about', (req, res) => {
  res.send('this is an about page')
})

// Setup a route file, put multiple endpoints in that file
app.use('/api/user', require('./routes/api/user'));

// Start the server
const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})