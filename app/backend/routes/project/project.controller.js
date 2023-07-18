const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../../_middleware/validate-request');
const authorize = require('../../_middleware/authorize')
const Role = require('../../_helpers/role');
const { array, string } = require('joi');
const project = require('../../models/project/project');
const projectService = require('../../services/project/project.service');

router.get('/getAll', getAllProjects);

module.exports = router;


//Get all projects
function getAllProjects(req, res, next) {
    // accountService.getAll()
    //     .then(accounts => res.json(accounts))
    //     .catch(next);

    projectService.getAll().
    then(projects => res.json(projects))
    .catch(next);
}