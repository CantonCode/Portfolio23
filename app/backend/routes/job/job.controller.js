const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../../_middleware/validate-request');
const authorize = require('../../_middleware/authorize')
const Role = require('../../_helpers/role');
const { array, string } = require('joi');
const project = require('../../models/project/project');
const projectService = require('../../services/project/project.service');
const jobService = require('../../services/job/job.service');

router.get('/getAll', getAllJobs);

module.exports = router;


//Get all jobs
function getAllJobs(req, res, next) {
    jobService.getAll().
    then(jobs => res.json(jobs))
    .catch(next);
}