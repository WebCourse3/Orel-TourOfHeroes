var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');

const app = express();
router.use(bodyParser.json());

module.exports = router;

// var heroesList = [];

// {
//
// 	fs.readFile('./heroes.json', 'utf8', function readFileCallback(err, data){
// 		if (err){
// 			console.log(err);
// 		}
// 		else {
// 			heroesList = JSON.parse(data)["heroesList"];
// 		}});
// }

// Get all heroes
router.get('/heroes', function (req, res) {
	res.send(JSON.stringify(heroesList));
});

// Get hero by id
router.get('/heroes/:id', function (req, res) {

	var heroID = req.params.id;

	heroesList.forEach(function(currHero){
		if (currHero.id == heroID){
			res.send(JSON.stringify(currHero));
		}
	});
});

// Update hero by ID - put
router.put('/heroes/:id', function (req, res) {

	var heroID = req.params.id;
	var userExist = false;

	heroesList.forEach(function(currHero){
		if (currHero.id == heroID){
			currHero.name = req.query.name;
			userExist = true;
			res.send('updated');
		}
	});

	if (!userExist){
		res.send('user not exist');
	}
});

// Update hero by ID - post
router.post('/heroes', function(req, res){

	var rquestDetails = JSON.stringify(req.body);

	var heroID = req.body.id;
	var heroName = req.body.name;
	var userExist = false;

	heroesList.forEach(function(currHero){
		if (currHero.id == heroID){
			userExist = true;
			currHero.name = heroName;
		}
	});

	if (!userExist){
		heroesList.push({"id" : heroID, "name" : heroName});
	}

	res.send(JSON.stringify(heroesList));
});

// Delete hero by id
router.delete('/heroes/:id', function (req, res){

	var heroID = req.params.id;

	heroesList.forEach(function(currHero, index){

		if (currHero.id == heroID){

			heroesList.splice(index, 1);
			res.send('Hero deleted');
		}
	});

	res.send('Hero Not Found');
});

// Delete hero by term
router.delete('/heroes', function (req, res){

	var term = req.query.name;
	var herosToDelete = [];

	heroesList.forEach(function(currHero, index){

		if (currHero.name.includes(term)){
			herosToDelete.push(index);
		}
	});

	for (var index = herosToDelete.length - 1; index >= 0; index--){
		heroesList.splice(herosToDelete[index], 1);
	}

	if (herosToDelete.length == 0){
		res.send('No heroes with this term');
	}
	else {
		res.send('Heroes deleted');
	}
});


module.exports.heroesList = heroesList;

var heroesList =  [
	{
		"id": "1",
		"name": "Moshe"
	},
	{
		"id": "2",
		"name": "Juliet"
	},
	{
		"id": "3",
		"name": "Gilberto"
	},
	{
		"id": "4",
		"name": "Fanny"
	},
	{
		"id": "5",
		"name": "Elizbeth"
	},
	{
		"id": "6",
		"name": "Brendon"
	},
	{
		"id": "7",
		"name": "Victor"
	},
	{
		"id": "8",
		"name": "Messi"
	},
	{
		"id": "9",
		"name": "Hillary"
	},
	{
		"id": "10",
		"name": "Tamera"
	}
];


