const express = require('express');
const Gem = require('../gem/gem-model.js');
const Fusion = require('../fusion/fusion-model.js');

const router = new express.Router();
router.get('/', (req, res) => { // INDEX //
	// indexes all fusions
	Fusion
		.find({})
		.then((fusion) => {
			res
				// .render('fusion-index', { fusion })
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

router.get('/new', (req, res) => { // NEW //
	// shows a fusion creation form
	res.render('fusion-new.hbs');
});

router.post('/', (req, res) => { // CREATE //
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

router.get('/:fusionID', (req, res) => { // SHOW //
	// shows a single fusion in detail
	Fusion
		.findById(req.params.fusionID)
		.then((fusion) => {
			Gem
				.find({ fusion })
				.then((gem) => {
					res
						// .render('fusion-show.hbs', { gem, fusion })
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

router.get('/:fusionID/edit', (req, res) => { // EDIT //
	// shows a fusion edit form
	res.render('fusion-edit');
});

router.put('/:fusionID', (req, res) => { // UPDATE //
	console.log(res);
});

router.delete('/:fusionID', (req, res) => { // DELETE //
	console.log(res);
});

module.exports = router;
