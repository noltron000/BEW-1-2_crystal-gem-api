const express = require('express');
const Gem = require('../gem/gem-model.js');
const Fusion = require('../fusion/fusion-model.js');

const router = new express.Router();
router.get('/', (req, res) => { // DONE: INDEX //
	// indexes all fusions
	Fusion
		.find({})
		.then((fusions) => {
			res // here's where INDEX differs
				.render('fusion-index', { fusions });
		})
		.catch((err) => {
			console.log(err.message);
		});
});

router.get('/json', (req, res) => { // DONE: INDEX JSON //
	// indexes all fusions and returns json
	Fusion
		.find({})
		.then((fusions) => {
			res // here's where INDEX JSON differs
				.json({
					message: 'Get all fusions',
					fusions
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
		.then((gems) => {
			res.render('fusion-new.hbs', { gems });
		});
});

router.post('/', (req, res) => { // DONE: CREATE //
	// creates a new fusion
	const fusionBody = req.body;
	fusionBody.gems = [];
	// give gemIDs to fusion, in array
	for (const key in fusionBody) {
		if (fusionBody[key] === 'on') {
			fusionBody.gems.push(key);
		}
	}
	const fusion = new Fusion(fusionBody);
	fusion
		.save()
		.then(() => {
			// give fusionID to gems, in array
			for (const key in fusionBody) {
				if (fusionBody[key] === 'on') {
					Gem.findById(key, (err, gem) => {
						gem.fusions.push(fusion._id);
						gem.save();
					});
				}
			}
			res.redirect('/fusion');
		})
		.catch((err) => {
			console.log(err.message);
		});
});

router.get('/:fusionID', (req, res) => { // DONE: SHOW //
	// shows a single fusion in detail
	Fusion
		.findById(req.params.fusionID)
		.populate('gems')
		.then((fusions) => {
			res // here's where SHOW differs
				.render('fusion-show.hbs', { fusions });
		})
		.catch((err) => {
			console.log(err.message);
		});
});

router.get('/:fusionID/json', (req, res) => { // DONE: SHOW JSON //
	// shows a single fusion in detail
	Fusion
		.findById(req.params.fusionID)
		// .populate('gems')
		.then((fusions) => {
			res // here's where SHOW JSON differs
				.json({
					message: 'Show this fusion with the gems who create it',
					fusions
				})
				.status(200);
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
