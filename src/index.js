// config should be imported before importing any other file
const config = require('./config/config');
const app = require('./config/express');
const exprHBS = require('express-handlebars');
const mongoose = require('mongoose');
const util = require('util');
const debug = require('debug')('auth-api-starterpack:index');

// get promise
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

// set up handlebars
app.engine('.hbs', exprHBS({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
	// listen on port config.port
	app.listen(config.port, () => {
		console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
	});
}

// start up basic routes
app.get('/', (req, res) => {
	res.render('home.hbs');
});

// require other routes
const gem = require('./server/gem/gem-controller.js');
const fusion = require('./server/fusion/fusion-controller.js');

// use the routes
app.use('/gem', gem);
app.use('/fusion', fusion);

// // get data
// const data = require('./data/flamewarz-db.js');

module.exports = app;
