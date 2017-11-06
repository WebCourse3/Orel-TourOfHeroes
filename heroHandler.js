var exports = module.exports;

// Get functions

// Get all heroes
exports.getAllHeroes = function() {
	return (heroesList);
};

// Get hero by id
exports.getHeroByID = function(heroID) {

	var foundHero;

	heroesList.forEach(function (currHero) {
		if (currHero.id == heroID) {
			foundHero = currHero;
			return;
		}
	});

	return (foundHero);
};

// Update functions

// Update hero by id
exports.updateHeroByID = function(heroID, heroName) {

	var userExist = false;

	heroesList.forEach(function (currHero) {
		if (currHero.id == heroID) {
			currHero.name = heroName;
			userExist = true;
		}
	});

	return (userExist);
};

// Add functions

// Add new hero
exports.addHero = function(heroID, heroName) {

	var addStatus = false;

	if (!this.getHeroByID(heroID)){
		heroesList.push({"id": heroID, "name": heroName});
		addStatus = true;
	}

	return (addStatus);
};

// Delete functions

// delete hero by id
exports.deleteHeroByID = function(heroID) {

	var deletedStatus = false;

	heroesList.forEach(function (currHero, index) {
		if (currHero.id == heroID) {
			heroesList.splice(index, 1);
			deletedStatus = true;
		}
	});

	return (deletedStatus);
};

// Delete hero by term
exports.deleteHeroByTerm = function(heroTerm) {

	var deletedCount = 0;

	for (var index = heroesList.length - 1; index >= 0; index--) {

		if (heroesList[index].name.includes(heroTerm)) {

			heroesList.splice(index, 1);
			deletedCount++;
		}
	}

	return (deletedCount);
};

var heroesList = [
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