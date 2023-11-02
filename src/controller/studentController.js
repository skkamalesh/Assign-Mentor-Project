const Student = require('../model/student');

const createStudent = async (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).send({ error: 'Name and age are required' });
  }

  try {
    const student = await Student.create({ name, age });
    res.send({ message: 'Student created successfully', student });
  } catch (err) {
    console.error('Error creating student:', err);
    res.status(500).send({ error: 'Internal server error' });
  }
};


const assignMentor = async (req, res) => {
  const { studentId, mentorId } = req.params;

  try {
    // Find the student by ID
    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).send({ error: 'Student not found' });
    }

    // Update the mentor field
    student.mentorId = mentorId;

    // Save the updated student
    await student.save();

    res.send({ message: 'Student assigned to mentor successfully', student });
  } catch (err) {
    console.error('Error assigning mentor to student:', err);
    res.status(500).send({ error: 'Internal server error' });
  }
};

const getMentorFromStudent = async (req, res) => {
  const { studentId } = req.params;

  try {
    const student = await Student.findById(studentId).populate('mentorId', 'name expertise');
    res.send(student.mentorId);
  } catch (err) {
    console.error('Error retrieving mentor for student:', err);
    res.status(500).send({ error: 'Internal server error' });
  }
};


module.exports = {
  createStudent, assignMentor, getMentorFromStudent
};