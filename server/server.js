const express = require('express');
const server = express();
const port = process.env.SERVER_PORT;

app.get('/', (req, res) => {
  res.send('connected to gg backend')
})