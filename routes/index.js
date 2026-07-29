const express = require("express");

const router = express.Router();

const aboutRoute = require("./AboutMe");
const technicalSkills = require("./tskills");
const projects = require("./projects");
const whyHireMe = require("./whyHM");
const contact = require("./contact.js");


router.use(technicalSkills);
router.use(aboutRoute);
router.use(projects);
router.use(whyHireMe);
router.use(contact);



module.exports = router;