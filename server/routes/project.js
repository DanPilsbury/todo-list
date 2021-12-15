const express = require("express");

const router = express.Router();

const Project = require("../controllers/project-controller.js");

/**
 * Get all project names
 * 
 * @name Get /project
 * 
 */
 router.get('/', async (req, res) => {
    const projects = await Project.findAll();
    res.status(200).json(projects).end();
});

/**
 * Create a new Project
 * 
 * @name POST /project
 * 
 * @param {String} name name of project
 */
router.post('/', async (req, res) => {
    const project = await Project.addOne(req.body.name);
    res.status(200).json(project).end();
});



module.exports = router;