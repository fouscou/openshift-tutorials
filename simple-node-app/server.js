'use strict';

const express = require('express');
const app = express();
const port = 8080;

app.get('/home', (req, res) => {
  res.send('This is the Home Page');
  console.log('The Home Page has been accessed');
});

app.get('/login', (req, res) => {
  res.send('This is the Login Page');
  console.log('The Login Page has been accessed');
});

app.listen(port, () => {
  console.log(`Simple application listening on port ${port}`);
});
