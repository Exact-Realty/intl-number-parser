# Intl-Number-Parser 🔢

🔢 A JavaScript function that parses numbers in various international number
systems (locale) to native JavaScript numbers.

## 📖 Introduction

Intl-Number-Parser is a lightweight and easy-to-use JavaScript function that
allows you to parse numbers in different international number systems to native
JavaScript numbers. It uses the built-in `Intl` object to format and parse
numbers based on the locale specified.

The function provides support for different number systems and supports different formats for negative numbers and currencies. Internally, the function
uses `Intl.NumberFormat`. Currently, it assumes positional and decimal
numerals.

## 🚀 Usage

To use the Intl-Number-Parser function, simply import it into your project and
call it with a string containing the number you want to parse. You can also
specify a locale and options for the `Intl.NumberFormat` constructor, which
the function uses internally to format and parse numbers.

Here's an example of how to use the function:

```js
import NumberParser from 'intl-number-parser';

const parser = NumberParser('en-US', { style: 'currency', currency: 'USD' });

const number = parser('$1,234.56'); // returns 1234.56
```

In this example, we create a new instance of the Intl-Number-Parser function
with the `en-US` locale and the `currency` style, which formats the number as
a currency with the `USD` currency code. We then call the function with a
string containing a currency-formatted number and get back the parsed
JavaScript number.

## 🤝 Contributing

Contributions to the Intl-Number-Parser project are welcome and encouraged! If
you find a bug or have an idea for a new feature, please open an issue on the
project's GitHub page.

If you want to contribute code, please fork the repository and submit a pull
request. Please make sure to write tests for any new code and ensure that all
existing tests pass before submitting your pull request.

## 📜 License 

Intl-Number-Parser is free software licensed under the [ISC License](https://github.com/Exact-Realty/intl-number-parser/blob/master/LICENSE).
Feel free to use it in your own projects or modify it as needed.
