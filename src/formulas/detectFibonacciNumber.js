import getFibonacciNumbersList from './getFibonacciNumbersList';

export default function (n, fibonacciNumbersList = [0, 1]) {
  getFibonacciNumbersList(0, 1, n + 1, fibonacciNumbersList);

  const l = fibonacciNumbersList.length;
  const fibNumPositions = [];
  let fibNumPositionsString = '';

  for (let i = 0; i < l; i + 1) {
    if (fibonacciNumbersList[i] === n) {
      fibNumPositions.push(i + 1);
      fibNumPositionsString += fibNumPositionsString === '' ? (i + 1) : `, ${(i + 1)}`;
      // ࿓ ࿔ ට ១ ᪤ ꩜ ৩
    }
  }

  if (fibNumPositions.length) {
    return {
      value: `${fibNumPositionsString} <sup>th</sup>`,
      symbol: '࿓',
    };
  }

  return {
    value: null,
    symbol: '',
  };
}
