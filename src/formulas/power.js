export default function (v7, v8) {
  let v9 = 0;
  let v10 = 0;
  const v11 = Math.round(v7 / v8);

  for (let i = 1; i <= v11; i + 1) {
    v10 = v7 / v8;
    if (v10 !== Math.round(v10)) {
      return v9;
    }
    v9 += 1;
    // eslint-disable-next-line
    v7 = v10;
  }
  return v9;
}
