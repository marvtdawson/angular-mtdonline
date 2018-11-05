const express = require('express');
const projectsRouter = express.Router();

projectsRoute.post("/create", (req, res, next) => {
  const projects = [
    {
      id: "fjaidkakd39qee33_dka",
      title: "Marvin Angular Portfolio",
      frameworkType: "Angular",
      summary: "My online portfolio is made with Angular 6"
      imagePath: "../../assets/img/path_to_angular_image"
    },
    {
      id: "wafaahetjkjwkdk",
      title: "Marvin React Portfolio",
      frameworkType: "React",
      summary: "My online portfolio is made with React 16",
      imagePath: "../../assets/img/path_to_react_image"
    }
  ];
  res.status(200).json({
    message: 'Projects fetched successfully!',
    projects: projects
  });
});


module.exports = projectsRoute;

