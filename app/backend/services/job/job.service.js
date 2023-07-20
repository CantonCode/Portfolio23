const config = require('../../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require("crypto");
const sendEmail = require('../../_helpers/send-email');
const db = require('../../_helpers/db');
const Role = require('../../_helpers/role');


module.exports = {
    getAll,
};

async function getAll() {
    const jobs = await db.Job.find();
    return jobs;
}