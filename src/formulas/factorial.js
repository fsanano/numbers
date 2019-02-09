export default function (n) {
  let a = 0;
  let fac = 1;

  const factorialList = [];

  while (fac < (n + 1)) {
    a += 1;
    fac *= a;
    factorialList.push(fac);
  }

  const l = factorialList.length;

  for (let i = 0; i <= l; i + 1) {
    if (factorialList[i] === n) {
      // addParam(i+1 + '!', 'factorial')
      return {
        value: i + 1,
        symbol: '!',
      };
    }
  }

  return {
    value: '',
    symbol: '',
  };
}
