const Animal = require('./Animal');

// I think Sails parser gets service name from file context, NOT form file name
class Dog extends Animal {
	constructor(options) {
		super(options);
	}

	// Animal hasn't this method
	bark() {
		return 'BARK!';
	}

	// This method is defferent from Animal
	getDecription() {
		return `I'm a dog. My name is ${this.name}. Nice to meet you!`;
	}
}

module.exports = Dog;