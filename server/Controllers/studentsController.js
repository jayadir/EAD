const Students = require('../models/Students');
exports.getStudents =  async (req, res) => {
    try {
        const students = await Students.find();
        res.json(students);
        console.log(students);
    } catch (err) {
        res.send('Error' + err);
    }
}
exports.getStudent = async (req, res) => {
    try {
        const student = await Students.find({ Student_roll: req.params.Student_roll });
        res.json(student);
        console.log(student);
    } catch (err) {
        res.send('Error' + err);
    }
}
exports.addStudent = async (req, res) => {
    const student = new Students({
        Student_name: req.body.Student_name,
        Student_age: req.body.Student_age,
        Student_roll: req.body.Student_roll,
        Student_email: req.body.Student_email,
        isCurrentStudent: req.body.isCurrentStudent,
        Student_DOB: req.body.Student_DOB
    });
    try {
        const result = await student.save();
        res.status(200).json(result);
        console.log(result);
    } catch (err) {
        res.send('Error');
    }
}
exports.updateStudent = async (req, res) => {
    try {
        const student = await Students.find({ Student_roll: req.params.Student_roll });
        student[0].Student_name = req.body.Student_name;
        student[0].Student_age = req.body.Student_age;
        student[0].Student_email = req.body.Student_email;
        student[0].Student_DOB = req.body.Student_DOB;
        const result = await student[0].save();
        res.json(result);
    } catch (err) {
        res.send('Error');
    }
}
exports.deleteStudent = async (req, res) => {
    try {
        const student = await Students.find({ Student_roll: req.params.Student_roll });
        const result = await student[0].remove();
        res.json(result);
    } catch (err) {
        res.send('Error');
    }
}