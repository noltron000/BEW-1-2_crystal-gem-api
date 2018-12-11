// mongoose and util come first
const mongoose = require('mongoose');
const util = require('util');
// config & app should be imported before any other file
const config = require('./config/config');
const app = require('./config/express');
const debug = require('debug')('auth-api-starterpack:index');

mongoose.Promise = Promise;

// connect to mongo db
const mongoUri = config.mongo.host;
mongoose.connect(
	mongoUri,
	{ useNewUrlParser: true },
	{ server: { socketOptions: { keepAlive: 1 } } }
);

mongoose.connection.on('error', () => {
	throw new Error(`unable to connect to database: ${mongoUri}`);
});

// print mongoose logs in dev env
if (config.mongooseDebug) {
	mongoose.set('debug', (collectionName, method, query, doc) => {
		debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
	});
}

// # TODO: Any additional config changes belong here.

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
	// listen on port config.port
	app.listen(config.port, () => {
		console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
	});
}

// // get data
// const data = require('./data/flamewarz-db.js');

module.exports = app;
