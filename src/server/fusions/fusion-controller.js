const express = require('express');
const Fusion = require('./fusion-model.js');

const router = express.router();
router.get('/fusion', (req, res) => { // INDEX
	Fusion
		.find({})
		.then((fusion) => {
			res
				.status(200)
				.json({
					message: 'Get all fusions',
					fusion
				});
		})
		.catch((err) => {
			console.log(err.message);
		});
});

router.get('/fusion/new', (req, res) => { // NEW
	console.log(res);
});


router.post('/fusion/', (req, res) => { // CREATE
	console.log(res);
});


router.get('/fusion/:fusionID', (req, res) => { // SHOW
	console.log(res);
});


router.get('/fusion/:fusionID/edit', (req, res) => { // EDIT
	console.log(res);
});


router.put('/fusion/:fusionID', (req, res) => { // UPDATE
	console.log(res);
});


router.delete('/fusion/:fusionID', (req, res) => { // DELETE
	console.log(res);
});
