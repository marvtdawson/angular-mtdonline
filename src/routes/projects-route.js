const express = require('express');
const projectsRouter = express.Router();

projectsRouter.post("/create", (req, res, next) => {
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


module.exports = projectsRouter;

