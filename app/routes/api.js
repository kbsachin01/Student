var Student = require('../models/student');
var config = require('../../config');


module.exports = function(app, express, io) {


	var api = express.Router();

	api.get('/all_studetails', function(req, res) {
		
		Student.find({}, function(err, students) {
			if(err) {
				res.send(err);
				return;
			}
			res.json(students);
		});
	});

	api.post('/stuform', function(req, res) {

		var student = new Student({
			name: req.body.name,
			usn: req.body.usn,
			course: req.body.course,
			branch: req.body.branch,
			email: req.body.email,
			phone: req.body.phone,

		});
		
		student.save(function(err) {
			if(err) {
				res.send(err);
				return;
			}

			res.json({ 
				success: true,
				message: 'Student Deatils have been added!',
				});
		});
	});


	return api;
}