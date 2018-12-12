const express = require('express');
const Gem = require('../gem/gem-model.js');
const Fusion = require('../fusion/fusion-model.js');

const router = new express.Router();
router.get('/', (req, res) => { // DONE: INDEX //
	// indexes all fusions
	Fusion
		.find({})
		.then((fusion) => {
			res // here's where INDEX differs
				.render('fusion-index', { fusion });
		})
		.catch((err) => {
			console.log(err.message);
		});
});

router.get('/json', (req, res) => { // DONE: INDEX JSON //
	// indexes all fusions
	Fusion
		.find({})
		.then((fusion) => {
			res // here's where INDEX JSON differs
				.json({
					message: 'Get all fusions',
					fusion
				})
				.status(200);
		})
		.catch((err) => {
			console.log(err.message);
		});
});

router.get('/new', (req, res) => { // DONE: NEW //
	// shows a fusion creation form
	Gem
		.find({})
		.then((gem) => {
			res.render('fusion-new.hbs', { gem });
		});
});

router.post('/', (req, res) => { // TODO: CREATE //
	// creates a new fusion
	const fusionBody = req.body;
	fusionBody.gems = [];
	for (const key in fusionBody) {
		if (fusionBody[key] === 'on') {
			fusionBody.gems.append(key);
		}
	}
	// find chosen gems by id
	// give gemIDs to fusion
	// give fusionID to gems
	const fusion = new Fusion(fusionBody);
	fusion
		.save()
		.then(() => {
			res.redirect('/fusion');
		})
		.catch((err) => {
			console.log(err.message);
		});
});

router.get('/:fusionID', (req, res) => { // TODO: SHOW //
	// shows a single fusion in detail
	Fusion
		.findById(req.params.fusionID)
		.then((fusion) => {
			Gem
				.find({ fusions: fusion }) // there's a problem here, its an array! wont be exact match
				.then((gem) => {
					res  // here's where SHOW differs
						.render('fusion-show.hbs', { gem, fusion });
				});
		})
		.catch((err) => {
			console.log(err.message);
		});
});

router.get('/:fusionID/json', (req, res) => { // TODO: SHOW JSON //
	// shows a single fusion in detail
	Fusion
		.findById(req.params.fusionID)
		.then((fusion) => {
			Gem
				.find({ fusion })
				.then((gem) => {
					res // here's where SHOW JSON differs
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

router.get('/:fusionID/edit', (req, res) => { // TODO: EDIT //
	// shows a fusion edit form
	res.render('fusion-edit');
});

router.put('/:fusionID', (req, res) => { // TODO: UPDATE //
	console.log(res);
});

router.delete('/:fusionID', (req, res) => { // TODO: DELETE //
	console.log(res);
});

module.exports = router;
