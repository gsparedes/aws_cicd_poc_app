'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(`Hello World from Myself and Pulumi - ${process.env.SECRET_VALUE} ${process.env.SECRET_VALUE_2}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);