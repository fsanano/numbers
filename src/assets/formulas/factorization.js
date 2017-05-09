import exponent from './exponent.js'
import power from './power.js'
import divider from './divider.js'
import getPrimeNumbersList from './getPrimeNumbersList.js'

export default function (n, primeNumbersList) {
	let v1, v2, v3, v4, v5, v6
	v1 = n

	v2 = v1
	if (v1 === 1) {
		// console.log('Единица не является простым числом и не имеет делителей')
		return {
			value: '1<sup> </sup>',
			symbol: '·'
		}
	}

	if (v2 < 2) {
		// console.log('Введите натуральное число')
		return {
			value: '-',
			symbol: '-'
			// symbol: '∞'
		}
	}

	v4 = v1 / 2
	v5 = ''
	v6 = 3

	if (v4 === Math.round(v4)) {
		v3 = power(v2, 2)
		if (v3 === 1) {
			v5 = v5 + '2'
		} else {
			v5 = v5 + '2<sup>' + v3 + '</sup>'
		}
		v1 = v1 / exponent(2, v3)
	} else {
		v4 = divider(v1, v6)
		v3 = power(v1, v4)
		v6 = v4
		v1 = v1 / exponent(v4, v3)
		if (v3 === 1) {
			v5 = v5 + v4
		} else {
			v5 = v5 + v4 + '<sup>' + v3 + '</sup>'
		}
	}
	while (v6 <= v1) {
		v4 = divider(v1, v6)
		v3 = power(v1, v4)
		if (v3 === 1) {
			v5 = v5 + ' · ' + v4
		} else {
			v5 = v5 + ' · ' + v4 + '<sup>' + v3 + '</sup>'
		}
		v6 = v4
		v1 = v1 / exponent(v4, v3)
	}
	if (v5 === 'NaN<sup>0</sup>') {
		console.log('Введите число.')
		return
	}
	if (v5 * 1 === v2) {
		getPrimeNumbersList(n, primeNumbersList)
		v5 = {
			value: primeNumbersList.length + '<sup>th</sup> ',
			symbol: '⁚'
		}
	} else {
		v5 = {
			value: v5,
			symbol: '⁞'
		}
		// ⁙
	}
	return v5
}
