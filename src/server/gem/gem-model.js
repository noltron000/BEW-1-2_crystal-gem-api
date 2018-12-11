// Implement gem-model.js.
const mongoose = require('mongoose');

// Set Schema
const Schema = mongoose.Schema;
const GemSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	weapon: {
		type: String,
		required: true
	},
	power: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Gem', GemSchema);
