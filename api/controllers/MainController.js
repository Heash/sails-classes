/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

// Initials

const animalJake = new Animal({
	name: 'Jake'
});

/*
 * ReferenceError: Dog is not defined
 * Uncomment next to test
 */

// const dogSpike = new Dog({
// 	'name': 'Spike'
// })

module.exports = {
	getAnimal: getAnimal,
	getDog: getDog
};

// This works like Dog class, because returning Animal class from "services/Dog.js"
function getAnimal(req, res) {
	res.send(animalJake.getDecription());
}

// This not working there is no Dog event if uncomment test at top
function getDog(req, res) {
	res.send(dogSpike.getDecription());
}