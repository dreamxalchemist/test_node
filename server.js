

const express = require('express');
const sum = require('./sum');
// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('It\'s time to sum! ' + sum(14,14));
});

app.listen(PORT, HOST);
//console.log('Running on http://${HOST}:${PORT}');