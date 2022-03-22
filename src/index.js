const { data } = require("../quotes.json");

//prettier-ignore
function getRandomQuotes(quantity = 1, repeatedQuotes = false, alternativeData = []) {

	let quotes = data

	//In the case that the user pass a custom pack of words, use it
	if (alternativeData.length > 0) {
		quotes = alternativeData;
	}

	//If the user don't want repeated quotes, check if the quantity is bigger than the quotes
	if (!repeatedQuotes && quantity > quotes.length) {
		return [
			{
				quote: `Error, the quantity of quotes is too much big for not return repeated quotes. If you want ${quantity} quotes, pass true as second parameter of the function`,
				author: "FranP-Code",
			},
		];
	}

	let result = [];
	let i = 0;

	while (i < quantity) {
		const quote = quotes[Math.floor(Math.random() * quotes.length)]; // credits: https://stackoverflow.com/a/5915122

		if (!repeatedQuotes) {
			//If the user don't want repeated quotes, search the quote on the array
			if (!result.includes(quote)) {
				result.push(quote);
				i++;
			}
		} else {
			//If the user want repeated quotes, just push it
			result.push(quote);
			i++;
		}
	}

	return result;
}

module.exports = getRandomQuotes;
