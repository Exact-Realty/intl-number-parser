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

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import m from '../src/NumberParser.js';

describe('Number parsing', () => {
	it('Correctly interprets $1,234.56 in en-US-POSIX locale', () => {
		const parser = m('en-US-POXIX', { style: 'currency', currency: 'USD' });
		const number = parser('$1,234.56');

		assert.equal(number, 1234.56);
	});

	it('Correctly interprets ١٬٢٣٤٫٥٦٧٨ in ar-SA locale', () => {
		const parser = m('ar-SA');
		const number = parser('١٬٢٣٤٫٥٦٧٨');

		assert.equal(number, 1234.5678);
	});

	it('Correctly interprets 1.234,5678 in de-DE locale', () => {
		const parser = m('de-DE');
		const number = parser('1.234,5678');

		assert.equal(number, 1234.5678);
	});

	it('Correctly interprets 1 234,5678 in fi-FI locale', () => {
		const parser = m('fi-FI');
		const number = parser('1 234,5678');

		assert.equal(number, 1234.5678);
	});

	it('Correctly interprets १,२३४.५६७८ in hi-IN-u-nu-deva locale', () => {
		const parser = m('hi-IN-u-nu-deva');
		const number = parser('१,२३४.५६७८');

		assert.equal(number, 1234.5678);
	});
});
