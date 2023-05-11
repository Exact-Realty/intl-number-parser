/* Copyright © 2023 Exact Realty Limited.
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

// Assumes a base 10 numbering system
const NumberParser = /*#__PURE__*/ (
	locale?: string,
	options?: Intl.NumberFormatOptions,
): { (s: string): number } => {
	// Fallback for older browsers
	if (
		typeof Intl !== 'object' ||
		typeof Intl.NumberFormat !== 'function' ||
		typeof Intl.NumberFormat.prototype.formatToParts !== 'function'
	) {
		return Number;
	}

	const formatter = new Intl.NumberFormat(locale, options);

	const parts = [
		...formatter.formatToParts(123456789.12345679),
		...formatter.formatToParts(123456789),
		...formatter.formatToParts(1234),
		...formatter.formatToParts(0.12345),
	];
	const numerals = new Array(10)
		.fill(undefined)
		.map((_, i) => formatter.format(i));

	const literalSeparators = Array.from(
		new Set(
			parts
				.filter((part) => part.type === 'literal')
				.map((part) => part.value),
		),
	);
	const currencySeparators = Array.from(
		new Set(
			parts
				.filter((part) => part.type === 'currency')
				.map((part) => part.value),
		),
	);
	const groupSeparators = Array.from(
		new Set(
			parts
				.filter((part) => part.type === 'group')
				.map((part) => part.value),
		),
	);
	const decimalSeparators = Array.from(
		new Set(
			parts
				.filter((part) => part.type === 'decimal')
				.map((part) => part.value),
		),
	);

	return (number: string) =>
		Number(
			numerals.reduce(
				(acc, cv, i) => acc.split(cv).join(String(i)),
				decimalSeparators.reduce(
					(acc, cv) => acc.split(cv).join('.'),
					[literalSeparators, currencySeparators, groupSeparators]
						.flat()
						.reduce(
							(acc, cv) => acc.split(cv).join(''),
							number.replace(/\s/g, ''),
						),
				),
			),
		);
};

export default NumberParser;
