const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const Project = require('./models/projects');
const globals = require('../config/lib/global-const');

mongoose.connect('mongodb://localhost/27017/mtdonline');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
  console.log("First middleware");
  console.log(AUTHOR_NAME);
  console.log(COMPANY_NAME);

  next();
});

/**
 * Mongodb connection data
 * // k4VvRlXICEFw8UyA
 */
mongoose.connect()

app.use((req, res) => {
  res.send('Hello from ExpressJs ' + AUTHOR_NAME + ' ' + COMPANY_NAME);
});

app.post("/api/projects")

module.exports = app;
