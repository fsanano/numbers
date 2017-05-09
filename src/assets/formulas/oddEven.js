export default function (num) {
	if (num % 2 === 0) {
		return {
			'value': '2 · ' + num / 2,
			'symbol': '◑'
		}
	} else {
		return {
			'value': '2 · ' + Math.round(num / 2 - 1) + ' + 1',
			'symbol': '◐'
		}
	}
}
