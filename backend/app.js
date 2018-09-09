const express = require('express');
const app = express();
const globals = require('../config/lib/global-const');

app.use((req, res, next) => {
  console.log("First middleware");
  console.log(AUTHOR_NAME);
  console.log(COMPANY_NAME);

  next();
});

app.use((req, res) => {
  res.send('Hello from ExpressJs ' + AUTHOR_NAME + ' ' + COMPANY_NAME);
});

module.exports = app;
