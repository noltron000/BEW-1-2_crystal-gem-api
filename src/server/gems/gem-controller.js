// #TODO: Implement thing.controller.js.
const mongoose = require('mongoose');

// Set Schema
const Schema = mongoose.Schema;
const GemSchema = new Schema({
	name: String,
	colors: String,
	fusions: String
});

module.exports = mongoose.model('Gem', GemSchema);
