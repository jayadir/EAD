const express = require('express');
const router = express.Router();
const Students = require('../models/Students');
const studentController = require('../Controllers/studentsController');

router.get('/',studentController.getStudents);
router.get('/:Student_roll', studentController.getStudent);
router.post('/', studentController.addStudent);
router.patch('/:Student_roll', studentController.updateStudent);
module.exports = router;