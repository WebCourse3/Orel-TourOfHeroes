const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Get all heroes
app.get('/heroes', function (req, res) {
	res.send(JSON.stringify(heroesList));
});

// Get hero by id
app.get('/heroes/:id', function (req, res) {

	var heroID = req.params.id;

	heroesList.forEach(function(currHero){
		if (currHero.id == heroID){
			res.send(JSON.stringify(currHero));
		}
	});
});

app.put('/heroes/:id', function (req, res) {

	var heroID = req.params.id;

	heroesList.forEach(function(currHero){
		if (currHero.id == heroID){
			currHero.name = req.query.name;

			res.send('updated');

		}
	});
});

// Post
app.post('/heroes', function(req, res){


	var rquestDetails = JSON.stringify(req.body);

	var heroID = req.body.id;
	var heroName = req.body.name;

	heroesList.forEach(function(currHero){
		if (currHero.id == heroID){
			currHero.name = heroName;
		}
	});

	res.send(JSON.stringify(heroesList));
});


// Delete hero by id
app.delete('/heroes/:id', function (req, res){

	var heroID = req.params.id;

	heroesList.forEach(function(currHero, index){

		if (currHero.id == heroID){

			heroesList.splice(index, 1);
			res.send('Hero deleted');
		}
	});

	res.send('Hero Not Found');
});

// DELETE
app.delete('/heroes', function (req, res){

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




app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
});


var heroesList = [

	{
		id: '1',
		name: 'Moshe'
	},
	{
		id: '2',
		name: 'Juliet'
	},
	{
		id: '3',
		name: 'Gilberto'
	},
	{
		id: '4',
		name: 'Fanny'
	},
	{
		id: '5',
		name: 'Elizbeth'
	},
	{
		id: '6',
		name: 'Brendon'
	},
	{
		id: '7',
		name: 'Victor'
	},
	{
		id: '8',
		name: 'Messi'
	},
	{
		id: '9',
		name: 'Hillary'
	},
	{
		id: '10',
		name: 'Tamera'
	},
];