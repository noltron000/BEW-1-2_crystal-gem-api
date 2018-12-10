const express = require('express');
const Gem = require('../gems/gem-model.js');
const Fusion = require('../fusions/fusion-model.js');

const router = new express.Router();
router.get('/gem', (req, res) => { // INDEX //
	// indexes all gems
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

router.get('/gem/new', (req, res) => { // NEW //
	// shows a gem creation form
	res.render('gems-new.hbs');
});

router.post('/gem', (req, res) => { // CREATE //
	// creates a new gem
	const gem = new Gem(req.body);
	gem
		.save(() => {
			res.redirect('/gem');
		})
		.catch((err) => {
			console.log(err.message);
		});
});

router.get('/gem/:gemID', (req, res) => { // SHOW //
	// shows a single gem in detail
	Gem
		.findById(req.params.gemID)
		.then((gem) => {
			Fusion
				.find({ gem })
				.then((fusion) => {
					res.render('fusion-show.hbs', { gem, fusion });
				});
		});
});

router.get('/gem/:gemID/edit', (req, res) => { // EDIT //
	// shows a gem edit form
	res.render('gems-edit');
});

router.put('/gem/:gemID', (req, res) => { // UPDATE //
	console.log(res);
});

router.delete('/gem/:gemID', (req, res) => { // DELETE //
	console.log(res);
});
