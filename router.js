var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');

const app = express();
router.use(bodyParser.json());

module.exports = router;

var heroHandler = require('./heroHandler');

// Get all heroes
router.get('/heroes', function (req, res) {

	var heroesList = heroHandler.getAllHeroes();

	res.send(JSON.stringify(heroesList));
});

// Get hero by id
router.get('/heroes/:id', function (req, res) {

	var currHero = heroHandler.getHeroByID(req.params.id);

	res.send(JSON.stringify(currHero));
});

// Update hero by ID - put
router.put('/heroes/:id', function (req, res) {

	var updatedStatus = heroHandler.updateHeroByID(req.params.id, req.params.name);

	if (updatedStatus){
		res.send('Hero Updated');
	}
	else{
		res.send('Hero not found');
	}
});

// Update hero by ID - post
router.post('/heroes', function(req, res){

	var heroID = req.body.id;
	var heroName = req.body.name;

	var updatedStatus = heroHandler.updateHeroByID(heroID, heroName);

	if (!userExist){
		addHero(heroID, heroName);
	}

	res.send(JSON.stringify(heroHandler.getAllHeroes()));
});

// Delete hero by id
router.delete('/heroes/:id', function (req, res){

	var heroID = req.params.id;

	var deletedStatus = heroHandler.deleteHeroByID(heroID);

	if (deletedStatus){
		res.send('Hero deleted');
	}
	else {
		res.send('Hero Not Found');
	}
});

// Delete hero by term
router.delete('/heroes', function (req, res) {

	var heroTerm = req.query.name;

	var deletedStatus = heroHandler.deleteHeroByTerm(heroTerm);

	if (deletedStatus) {
		res.send('Heroes deleted');
	}
	else {
		res.send('No heroes with this term');
	}
});
