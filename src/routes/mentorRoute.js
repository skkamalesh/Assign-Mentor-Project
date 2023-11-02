const express = require('express');
const mentorController = require('../controller/mentorController');
const router = express.Router();

router.post('/', mentorController.createMentor);
router.get('/mentor-students/:mentorId', mentorController.getStudentsFromMentor);
router.post('/add-students-to-mentor/:mentorId', mentorController.AssignStudents);

module.exports = router;