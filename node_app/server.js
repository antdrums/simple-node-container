'use strict';

const express = require('express');

const pjson = require('./package.json')

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('This webpage does nothing, but it is currently at version ' + pjson.version + '\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);