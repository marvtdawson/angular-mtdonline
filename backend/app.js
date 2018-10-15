const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const Project = require('./models/projects-model');
const globals = require('../config/lib/global-const');

// api routes
const projectRoutes = require('routes/projectsRouter');
const skillsRoutes = require('reoutes/skills-route');

/**
 * Mongodb connection data
 * // k4VvRlXICEFw8UyA
 */

mongoose.connect('mongodb://localhost/27017/mtdOnline')
  .then(() => {
    console.log('Connected to Local DB');
  })
  .catch((err) => {
    console.error(err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
  console.log("First middleware");
  console.log(AUTHOR_NAME);
  console.log(COMPANY_NAME);

  next();
});


app.use((req, res) => {
  res.send('Hello from ExpressJs ' + AUTHOR_NAME + ' ' + COMPANY_NAME);
});



app.use("api/projects", projectRoutes);
app.use("api/skills", skillsRoutes);

module.exports = app;
