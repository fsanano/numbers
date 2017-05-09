export default function fib (a, b, n, fibonacciNumbersList) {
	let c = a + b
	if (c < n) {
		a = b
		b = c
		fibonacciNumbersList.push(c)
		return fib(a, b, n, fibonacciNumbersList)
	}
}
