var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StudentSchema = new Schema({
	
	name: String,
	usn: { type: String, required: true, index: { unique: true }},
	course: String,
	branch: String,
	email: String,
	phone: String

});

module.exports = mongoose.model('Student', StudentSchema);