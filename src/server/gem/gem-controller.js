const express = require('express');
const Gem = require('../gem/gem-model.js');
const Fusion = require('../fusion/fusion-model.js');

const router = new express.Router();
router.get('/', (req, res) => { // DONE: INDEX //
	// indexes all gems
	Gem
		.find({})
		.then((gem) => {
			res
				.render('gem-index', { gem });
		})
		.catch((err) => {
			console.log(err.message);
		});
});

router.get('/json', (req, res) => { // DONE: INDEX JSON //
	// indexes all gems and returns json
	Gem
		.find({})
		.then((gem) => {
			res
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

router.get('/new', (req, res) => { // DONE: NEW //
	// shows a gem creation form
	res.render('gem-new.hbs');
});

router.post('/', (req, res) => { // TODO: CREATE //
	// creates a new gem
	const gem = new Gem(req.body);
	gem
		.save()
		.then(() => {
			res.redirect('/gem');
		})
		.catch((err) => {
			console.log(err.message);
		});
});

router.get('/:gemID', (req, res) => { // TODO: SHOW //
	// shows a single gem in detail
	Gem
		.findById(req.params.gemID)
		.then((gem) => {
			Fusion
				.find({ gems: gem }) // there's a problem here, its an array! wont be exact match
				.then((fusion) => {
					res
						.render('gem-show.hbs', { gem, fusion });
				});
		})
		.catch((err) => {
			console.log(err.message);
		});
});

router.get('/:gemID/json', (req, res) => { // TODO: SHOW JSON //
	// shows a single gem in detail
	Gem
		.findById(req.params.gemID)
		.then((gem) => {
			Fusion
				.find({ gem })
				.then((fusion) => {
					res
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

router.get('/:gemID/edit', (req, res) => { // TODO: EDIT //
	// shows a gem edit form
	res.render('gem-edit');
});

router.put('/:gemID', (req, res) => { // TODO: UPDATE //
	console.log(res);
});

router.delete('/:gemID', (req, res) => { // TODO: DELETE //
	console.log(res);
});

module.exports = router;
