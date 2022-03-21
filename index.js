const data = require("./quotes.js");

function getRandomQuote(quantity = 1) {
	let result = [];

	for (let i = 0; i < quantity; i++) {
		result.push(data[Math.floor(Math.random() * data.length)]);
	}

	return result; // credits: https://stackoverflow.com/a/5915122
}

module.exports = getRandomQuote;
