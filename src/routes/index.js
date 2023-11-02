const express = require('express');
const router = express.Router();

const StudentRoutes = require('./studentRoute');
const MentorRoutes = require('./mentorRoute');

router.use('/students', StudentRoutes);
router.use('/mentors', MentorRoutes);

module.exports = router;