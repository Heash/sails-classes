class Animal {
	constructor(options) {
		this.name = options.name;
	}

	getName() {
		return this.name;
	}

	getDecription() {
		return `i'm just animal. My name is ${this.name}. Nice to meet you!`;
	}

}

module.exports = Animal;