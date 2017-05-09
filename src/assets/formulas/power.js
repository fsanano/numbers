export default function (v7, v8) {
	let v9 = 0
	let v10 = 0
	let v11 = 0
	v11 = Math.round(v7 / v8)
	for (var i = 1; i <= v11; i++) {
		v10 = v7 / v8
		if (v10 !== Math.round(v10)) {
			return v9
		}
		v9 = v9 + 1
		v7 = v10
	}
	return v9
}
