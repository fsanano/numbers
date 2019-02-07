export default function fib(a, b, n, fibonacciNumbersList) {
  const c = a + b;

  if (c < n) {
    // eslint-disable-next-line
    a = b;
    // eslint-disable-next-line
    b = c;
    fibonacciNumbersList.push(c);
    return fib(a, b, n, fibonacciNumbersList);
  }
  return '';
}
