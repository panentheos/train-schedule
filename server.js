const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const app = express();

app.get('/departures', (req, res) => {
  fetch('http://developer.mbta.com/lib/gtrtfs/Departures.csv')
    .then(r => r.text())
    .then(s => res.type('csv').send(s));
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(8080);
