const express = require('express');
const skillsRouter = express.Router();

skillsRouter.post("/create", (req, res, next) => {
  const skills = [
    {
      id: "fjaidkakd39qee33_dka",
      title: "HTMl, CSS & ES6",
      summary: "Web design using HTML5, CSS3, Javascript and TypeScript.",
      imagePath: "some_font_awesome_icon"
    },
    {
      id: "mfi3t0p6hoqmb03mnpjpsjgdat4",
      title: "Front End",
      summary: "Proficient in JavaScript frameworks such as: Angular 6 / 7, ReactJS v16.",
      imagePath: "some_font_awesome_icon"
    },
    {
      id: "akknauhlkjhje87582",
      title: "Back End",
      summary: "Proficient in server-side languages such as PHP, Node.JS & C#, Java",
      imagePath: "some_font_awesome_icon"
    },
    {
      id: "pk38u5kplynicjqi4ml",
      title: "Open Source",
      summary: "Knowledgeable of Linux for dev environment setup via Ubuntu.",
      imagePath: "some_font_awesome_icon"
    },
    {
      id: "iijaim5kgjapoqf8d",
      title: "Version Control",
      summary: "Possess knowledge of version control tools such as GIT or Mercurial.",
      imagePath: "some_font_awesome_icon"
    },
    {
      id: "kjain56p8mhsp8hkdpid",
      title: "RESTFul API",
      summary: "Possess the ability to build custom API's and consume third party API's using tools like Postman.",
      imagePath: "some_font_awesome_icon"
    },
    {
      id: "oing98hjiqopqjdiuj4idh",
      title: "Cloud",
      summary: "Capable of CI/CD via cloud environment such as AWS, Google Cloud and Azure.",
      imagePath: "some_font_awesome_icon"
    },
    {
      id: "ntuqf8h56moqlakbbn3odj",
      title: "Mobile Deployment",
      summary: "Experienced in app deployment for Android to the Google Play App Store.",
      imagePath: "some_font_awesome_icon"
    },
    {
      id: "aiubhitidowpp4di3o390kh",
      title: "Data Storage",
      summary: "Proficient in MySQL and NoSQL databases MongoDB & Firebase for persistent data capturing.",
      imagePath: "some_font_awesome_icon"
    },
  ];
  res.status(200).json({
    message: 'Skills fetched successfully!',
    projects: skills
  });
});


module.exports = skillsRouter;
