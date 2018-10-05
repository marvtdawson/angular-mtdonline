const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const Project = require('./models/projects');
const globals = require('../config/lib/global-const');

/**
 * Mongodb connection data
 * // k4VvRlXICEFw8UyA
 */
// mongoose.connect('mongodb://localhost/27017/mtdOnline');

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

app.use("/api/projects", (req, res, next) => {
  const projects = [
    {
      id: "fjaidkakd39qee33_dka",
      title: "Marvin Portfolio",
      frameworkType: "Angular",
      summary: "My online portfolio is made with Angular 6"
    },
    {
      id: "wafaahetjkjwkdk",
      title: "Marvin React Portfolio",
      frameworkType: "React",
      summary: "My online portfolio is made with React 16"
    }
  ];
  res.status(200).json({
    message: 'Projects fetched successfully!',
    projects: projects
  });
});

module.exports = app;
