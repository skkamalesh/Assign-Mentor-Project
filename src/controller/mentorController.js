const Mentor = require('../model/mentor');
const Student = require('../model/student');

const createMentor = async (req, res) => {
  const { name, expertise } = req.body;

  if (!name || !expertise) {
    return res.status(400).send({ error: 'Name and expertise are required' });
  }

  try {
    const mentor = await Mentor.create({ name, expertise });
    res.send({ message: 'Mentor created successfully', mentor });
  } catch (err) {
    console.error('Error creating mentor:', err);
    res.status(500).send({ error: 'Internal server error' });
  }
};


const AssignStudents = async (req, res) => {
  const { mentorId } = req.params;
  const { studentIds } = req.body;

  try {
    const students = await Student.updateMany({ _id: { $in: studentIds } }, { mentorId: mentorId });
    res.send({ message: 'Students assigned to mentor successfully', students });
  } catch (err) {
    console.error('Error assigning mentor to students:', err);
    res.status(500).send({ error: 'Internal server error' });
  }
};

const getStudentsFromMentor = async (req, res) => {
  const { mentorId } = req.params;

  try {
    const students = await Student.find({ mentorId: mentorId });
    res.send(students);
  } catch (err) {
    console.error('Error retrieving students for mentor:', err);
    res.status(500).send({ error: 'Internal server error' });
  }
};


module.exports = {
  createMentor, AssignStudents, getStudentsFromMentor
};