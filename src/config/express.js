// Require middleware
const express = require('express');
const exprHBS = require('express-handlebars');
const bodyParser = require('body-parser');
const cors = require('cors');
// Required files
const routes = require('../index-route.js');
const auth = require('../server/auth/auth-route');
const gem = require('../server/gem/gem-controller.js');
const fusion = require('../server/fusion/fusion-controller.js');
// Define app
const app = express();

// Use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS - Cross Origin Resource Sharing.
app.use(cors());

// Set up handlebars
app.engine('.hbs', exprHBS({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');

// Start up basic routes
app.get('/', (req, res) => {
	res.render('home.hbs');
});

// Mount all other routes
app.use('/api', routes);
app.use('/auth', auth);
app.use('/gem', gem);
app.use('/fusion', fusion);

module.exports = app;
