export default function (n, primeNumbersList) {
	let S = []
	primeNumbersList = []

	S[1] = 0 // 1 - не простое число
	for (let k = 2; k <= n; k++) {
		S[k] = k
	}

	for (let m = 2; m * m <= n; m++) {
		if (S[m] > 1) {
			for (let l = m * m; l <= n; l += m) {
				S[l] = 0
			}
		}
	}
	for (let i = 2; i <= n; i++) {
		if (S[i] > 0) {
			primeNumbersList.push(S[i])
		}
	}

	return primeNumbersList
}
