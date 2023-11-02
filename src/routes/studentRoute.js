const express = require('express');
const studentController = require('../controller/studentController');
const router = express.Router();

router.post('/', studentController.createStudent);
router.post('/assign-mentor/:studentId/:mentorId', studentController.assignMentor);
router.get('/student-mentor/:studentId', studentController.getMentorFromStudent);


module.exports = router;