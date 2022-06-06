# Argentinian Random Quote

## Usage

- Get list of random quotes
    ```js
    const argRandomQuote = require("argentinian-random-quote");

    const quotes = argRandomQuote(
        10, //Quantity of quotes (1 by default)
        true, //If user wants repeated word or not (false by default)
        [], //Alternative array of quotes (not defined by default)
    )
    ```
- Get all quotes availabe
    ```js
    const quoteList = argRandomQuote.getAllQuotes()
    ```

## How to colaborate

You can colaborate with more quotes modifying the  **<span style="color: red">`quotes.json`</span>** file and making a **pull request** of the changes.

The structure is the following:
```json
{
    "quote": "x",
    "author": "y"
}
```

Any addition is welcomed 🙌 