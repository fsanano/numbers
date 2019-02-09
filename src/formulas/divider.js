export default function (v7, v13) {
  let v14 = v7;
  let v16 = Math.round(v7 / v13);

  while (v13 <= v16) {
    const v15 = v7 / v13;
    v16 = Math.round(v15);

    if (v15 === v16) {
      v14 = v13;
      return v14;
    }
    // eslint-disable-next-line
    v13 += 2;
  }


  return v14;
}
