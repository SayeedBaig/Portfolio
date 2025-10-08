const router = require('express').Router();
let Project = require('../models/project.model');

// GET all projects
router.route('/').get((req, res) => {
  Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
 
  const { title, description, imageUrl, projectUrl, technologies } = req.body;

  const newProject = new Project({
    title,
    description,
    imageUrl,
    projectUrl,
    technologies, 
  });

  newProject.save()
    .then(() => res.json('Project added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;