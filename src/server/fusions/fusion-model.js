// #TODO: Implement thing.model.js.
const mongoose = require('mongoose');

// Set Schema
const Schema = mongoose.Schema;
const FusionSchema = new Schema({
	name: String,
	colors: String,
	gems: String
});

module.exports = mongoose.model('Fusion', FusionSchema);
