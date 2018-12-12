/* Mongoose Connection */
const mongoose = require('mongoose');
const assert = require('assert');

const url = 'mongodb://localhost/gem-api';
mongoose.Promise = global.Promise;
mongoose.connect(
	url,
	{ useNewUrlParser: true },
	(err) => {
		assert.equal(null, err);
		console.log('Connected successfully to database');
	}
);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'));
mongoose.set('debug', true);
mongoose.set('useCreateIndex', true);

module.exports = mongoose.connection;
