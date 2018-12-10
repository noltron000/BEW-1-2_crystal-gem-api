const express = require('express');
const Gem = require('../gems/gem-model.js');
const Fusion = require('../fusions/fusion-model.js');

const router = new express.Router();
router.get('/fusion', (req, res) => { // INDEX //
	// indexes all fusions
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

router.get('/fusion/new', (req, res) => { // NEW //
	// shows a fusion creation form
	res.render('fusions-new.hbs');
});

router.post('/fusion/', (req, res) => { // CREATE //
	// creates a new fusion
	const fusion = new Fusion(req.body);
	fusion
		.save(() => {
			res.redirect('/fusion');
		})
		.catch((err) => {
			console.log(err.message);
		});
});

router.get('/fusion/:fusionID', (req, res) => { // SHOW //
	// shows a single fusion in detail
	Fusion
		.findById(req.params.fusionID)
		.then((fusion) => {
			Gem
				.find({ fusion })
				.then((gem) => {
					res.render('fusion-show.hbs', { gem, fusion });
				});
		});
});


router.get('/fusion/:fusionID/edit', (req, res) => { // EDIT //
	console.log(res);
});

router.put('/fusion/:fusionID', (req, res) => { // UPDATE //
	// shows a fusion edit form
	res.render('fusions-edit');
});

router.delete('/fusion/:fusionID', (req, res) => { // DELETE //
	console.log(res);
});
