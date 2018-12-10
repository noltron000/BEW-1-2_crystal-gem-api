const express = require('express');
const Gem = require('./gem-model.js');

const router = express.router();
router.get('/gem', (req, res) => { // INDEX
	Gem
		.find({})
		.then((gem) => {
			res
				.status(200)
				.json({
					message: 'Get all gems',
					gem
				});
		})
		.catch((err) => {
			console.log(err.message);
		});
});

router.get('/gem/new', (req, res) => { // NEW
	console.log(res);
});


router.post('/gem', (req, res) => { // CREATE
	console.log(res);
});


router.get('/gem/:gemID', (req, res) => { // SHOW
	console.log(res);
});


router.get('/gem/:gemID/edit', (req, res) => { // EDIT
	console.log(res);
});


router.put('/gem/:gemID', (req, res) => { // UPDATE
	console.log(res);
});


router.delete('/gem/:gemID', (req, res) => { // DELETE
	console.log(res);
});
