var assert = require('assert');
var mocha = require('mocha');
var sinon = require('sinon');

var heroHandler = require('../heroHandler');

describe('heroHandler functions', function() {

	// Get functions test
	describe('GET functions', function () {
		describe('Get all heroes', function () {
			it('get all heroes', function () {

				var heroesList = heroHandler.getAllHeroes();
				assert.equal(heroesList.length, 10);
			});
		});
	});

	describe('Get selected hero', function () {
		it('get an existing hero', function () {

			var currHero = heroHandler.getHeroByID(1);
			console.log(currHero);
			assert.equal(currHero.name, "Moshe");
		});
		it('get a not existing hero', function () {

			var currHero = heroHandler.getHeroByID(15);
			assert.equal(currHero, undefined);
		});
	});

	// Update functions test
	describe('Update functions', function () {

		it('update an exiting hero', function () {

			assert.equal(heroHandler.updateHeroByID(1, "Orel"), true);
		});
		it('update a not exiting hero', function () {

			assert.equal(heroHandler.updateHeroByID(15, "Orel"), false);
		});

	});

	// Add functions test
	describe('Add functions', function () {
		it('add hero with not existing id', function () {

			var getHeroByIDStub = {};
			getHeroByIDStub.getHeroByID = sinon.stub();

			// Save the origin function
			var tempGetHeroByID = heroHandler.getHeroByID;

			// Override the function getHeroByID
			getHeroByIDStub.getHeroByID.withArgs(11).returns(undefined);
			heroHandler.getHeroByID = getHeroByIDStub.getHeroByID;

			var addStatus = heroHandler.addHero(11, "Orel");

			heroHandler.getHeroByID = tempGetHeroByID;
			assert.equal(addStatus, true);
		});
		it('add hero with existing id', function () {

			var getHeroByIDStub = {};
			getHeroByIDStub.getHeroByID = sinon.stub();

			// Save the origin function
			var tempGetHeroByID = heroHandler.getHeroByID;

			// Override the function getHeroByID
			getHeroByIDStub.getHeroByID.withArgs(1).returns({"id" : 1, "name" : "Moshe"});
			heroHandler.getHeroByID = getHeroByIDStub.getHeroByID;

			var addStatus = heroHandler.addHero(1, "Orel");

			heroHandler.getHeroByID = tempGetHeroByID;
			assert.equal(addStatus, false);
		});
	});

	// Delete functions test
	describe('Delete functions', function () {
		// Delete hero by id
		describe('Delete hero by id', function () {
			it('delete an existing hero', function(){

				var deletedStatus = heroHandler.deleteHeroByID(1);
				assert.equal(deletedStatus, true);
			});
			it('delete a not existing hero', function(){

				var deletedStatus = heroHandler.deleteHeroByID(15);
				assert.equal(deletedStatus, false);
			});
		});
		// Delete hero by term
		describe('Delete hero by term', function () {
			it('delete one existing hero', function() {
				var deletedStatus = heroHandler.deleteHeroByTerm("J");
				assert.equal(deletedStatus, 1);
			});
			it('delete more than one existing hero', function() {
				var deletedStatus = heroHandler.deleteHeroByTerm("i");
				assert(deletedStatus > 1);
			});
			it('delete a not existing hero', function() {
				var deletedStatus = heroHandler.deleteHeroByTerm("q");
				assert.equal(deletedStatus, 0);
			});
		});
	});
});

