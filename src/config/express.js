// require middleware
const express = require('express');
const exprHBS = require('express-handlebars');
const bodyParser = require('body-parser');
const cors = require('cors');
// import other scripts
const routes = require('../index-route.js');
const gem = require('../server/gem/gem-controller.js');
const fusion = require('../server/fusion/fusion-controller.js');
// define app
const app = express();

// use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS - Cross Origin Resource Sharing.
app.use(cors());

// set up handlebars
app.engine('.hbs', exprHBS({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');

// start up basic routes
app.get('/', (req, res) => {
	res.render('home.hbs');
});

// Mount all other routes
app.use('/api', routes);
app.use('/gem', gem);
app.use('/fusion', fusion);

module.exports = app;
