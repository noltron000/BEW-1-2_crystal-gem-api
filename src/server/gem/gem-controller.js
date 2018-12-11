const express = require('express');
const Gem = require('../gem/gem-model.js');
const Fusion = require('../fusion/fusion-model.js');

const router = new express.Router();
router.get('/', (req, res) => { // INDEX //
	// indexes all gems
	Gem
		.find({})
		.then((gem) => {
			res
				// .render('gem-index', { gem })
				.json({
					message: 'Get all gems',
					gem
				})
				.status(200);
		})
		.catch((err) => {
			console.log(err.message);
		});
});

router.get('/new', (req, res) => { // NEW //
	// shows a gem creation form
	res.render('gem-new.hbs');
});

router.post('/', (req, res) => { // CREATE //
	// creates a new gem
	const gem = new Gem(req.body);
	gem
		.save(() => {
			res.redirect('/gem');
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get('/:gemID', (req, res) => { // SHOW //
	// shows a single gem in detail
	Gem
		.findById(req.params.gemID)
		.then((gem) => {
			Fusion
				.find({ gem })
				.then((fusion) => {
					res
						// .render('gem-show.hbs', { gem, fusion })
						.json({
							message: 'Show this fusion with the gems who create it',
							gem,
							fusion
						})
						.status(200);
				});
		})
		.catch((err) => {
			console.log(err.message);
		});
});

router.get('/:gemID/edit', (req, res) => { // EDIT //
	// shows a gem edit form
	res.render('gem-edit');
});

router.put('/:gemID', (req, res) => { // UPDATE //
	console.log(res);
});

router.delete('/:gemID', (req, res) => { // DELETE //
	console.log(res);
});

module.exports = router;
