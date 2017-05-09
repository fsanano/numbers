import getFibonacciNumbersList from './getFibonacciNumbersList.js'

export default function (n, fibonacciNumbersList) {
	fibonacciNumbersList = [0, 1]

	getFibonacciNumbersList(0, 1, n + 1, fibonacciNumbersList)

	let l = fibonacciNumbersList.length
	let fibNumPositions = []
	let fibNumPositionsString = ''

	for (let i = 0; i < l; i++) {
		if (fibonacciNumbersList[i] === n) {
			fibNumPositions.push(i + 1)
			fibNumPositionsString += fibNumPositionsString === '' ? (i + 1) : ', ' + (i + 1)
			// ࿓ ࿔ ට ១ ᪤ ꩜ ৩
		}
	}
	if (fibNumPositions.length) {
		return {
			value: fibNumPositionsString + '<sup>th</sup>',
			symbol: '࿓'
		}
	} else {
		return {
			value: null,
			symbol: ''
		}
	}
}
