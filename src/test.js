const getRandomQuote = require("./index.js");

console.log(
	getRandomQuote(2, false, [
		{
			quote: "a",
			author: "aa",
		},
		{
			quote: "b",
			author: "bb",
		},
		{
			quote: "c",
			author: "cc",
		},
		{
			quote: "d",
			author: "dd",
		},
		{
			quote: "e",
			author: "ee",
		},
		{
			quote: "f",
			author: "ff",
		},
		{
			quote: "g",
			author: "gg",
		},
	])
);
