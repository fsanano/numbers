<template lang="pug">
	div
		.number_field(v-bind:class="{top:numbers.length}")
			input(type="number" v-model="number" maxlength = "7" autocomplete="off" v-on:keyup.enter="calculate()").inp

		.res
			ul(v-for="num in numbers" v-bind:class=" '_' + num.title.value ").num 
				li( v-for="(value, key) in num" v-bind:class="key")
					span.num__symbol(v-html="value.symbol")
						br
					span.num__value(v-html="value.value")

</template>

<script>

	export default{
		data () {
			return {
				numbers: [],
				number: '',
				primeList: []
			}
		},
		computed: {

		},

		methods: {

			calculate () {
				let checkIfRepeatNum = this.numbers.filter((item) => item.title.value === this.number)
				// console.log('calculate')
				console.log(typeof this.number)
				if (this.number === '') {
					console.log('it is null')
					this.showPopup('Nice try, but service work with whole numbers')
					this.number = null
				}
				if (this.number && checkIfRepeatNum.length === 0) {
					let num = {}

					num['title'] = {
						'value': this.number,
						'symbol': ''
					}

					num['base2'] = {
						'value': this.base(this.number * 1, 2),
						'symbol': 'x<sub>2</sub>'
					}
					num['base8'] = {
						'value': this.base(this.number * 1, 8),
						'symbol': 'x<sub>8</sub>'
					}
					num['base32'] = {
						'value': this.base(this.number * 1, 32),
						'symbol': 'x<sub>32</sub>'
					}

					num['oddEven'] = this.oddEven(this.number)

					num['factorization'] = this.factorization(this.number)

					this.numbers.push(num)

					this.number = null
				}
			},

			base (num, base) {
				let n = num * 1
				let numWithBase = n.toString(base)
				return numWithBase
			},

			oddEven (num) {
				if (num * 1 % 2 === 0) {
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
			},

			getPrimeList (n) {
				let S = []
				this.primeList = []

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
						this.primeList.push(S[i])
					}
				}

				return this.primeList
			},

			factorization (n) {
				let v1, v2, v3, v4, v5, v6
				v1 = n

				v2 = v1
				if (v1 * 1 === 1) {
					// console.log('Единица не является простым числом и не имеет делителей')
					return {
						value: '1<sup> </sup>',
						symbol: '·'
					}
				}

				if (v2 < 2) {
					// console.log('Введите натуральное число')
					return {
						value: '-',
						symbol: '-'
						// symbol: '∞'
					}
				}

				v4 = v1 / 2
				v5 = ''
				v6 = 3

				if (v4 === Math.round(v4)) {
					v3 = this.power(v2, 2)
					if (v3 === 1) {
						v5 = v5 + '2'
					} else {
						v5 = v5 + '2<sup>' + v3 + '</sup>'
					}
					v1 = v1 / this.exponent(2, v3)
				} else {
					v4 = this.divider(v1, v6)
					v3 = this.power(v1, v4)
					v6 = v4
					v1 = v1 / this.exponent(v4, v3)
					if (v3 === 1) {
						v5 = v5 + v4
					} else {
						v5 = v5 + v4 + '<sup>' + v3 + '</sup>'
					}
				}
				while (v6 <= v1) {
					v4 = this.divider(v1, v6)
					v3 = this.power(v1, v4)
					if (v3 === 1) {
						v5 = v5 + ' · ' + v4
					} else {
						v5 = v5 + ' · ' + v4 + '<sup>' + v3 + '</sup>'
					}
					v6 = v4
					v1 = v1 / this.exponent(v4, v3)
				}
				if (v5 === 'NaN<sup>0</sup>') {
					console.log('Введите число.')
					return
				}
				if (v5 === v2) {
					this.getPrimeList(n)
					v5 = {
						value: this.primeList.length + '<sup>th</sup> ',
						symbol: '⁚'
					}
				} else {
					v5 = {
						value: v5,
						symbol: '⁞'
					}
					// ⁙
				}
				return v5
			},

			power (v7, v8) {
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
			},

			exponent (v7, v9) {
				let v12 = 1
				for (var i = 0; i < v9; i++) {
					v12 = v12 * v7
				}
				return v12
			},

			divider (v7, v13) {
				let v14, v15, v16
				v14 = v7
				v16 = Math.round(v7 / v13)
				while (v13 <= v16) {
					v15 = v7 / v13
					v16 = Math.round(v15)
					if (v15 === v16) {
						v14 = v13
						return v14
					}
					v13 = v13 + 2
				}
				return v14
			},

			showPopup (msg) {
				alert(msg)
			}
		}
	}

</script>

<style lang="stylus">


	.res
		margin 7% 0 0 0
		display flex
		flex-flow row wrap
		justify-content center
		text-align center
		padding 0 20px
		box-sizing border-box

	.num
		// width 18%
		box-sizing border-box
		display inline-block
		padding 10px
		margin 0 5px 10px 5px
		border 1px dashed #ccc
		background: rgba(132, 123, 116, 0.15)
		border-radius 5px 8px 13px 21px
		&__symbol
			display inline-block
			width 28px
			padding-right 8px
			text-align center
		li
			position relative
			display block
			padding 5px 10px
			font-size 15px
			text-align left
			&.title
				text-align center
				font-size 2rem
				margin 0 0px 5px 0
				display inline-block
				.num__symbol
					display none

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0; 
	}
	.number_field
		position: absolute;
		width: 20%;
		height: 60px;
		top: 40%;
		right: 0;
		left: 0;
		// bottom: 0;
		margin: auto;
		transition .3s
		&.top
			top 80px

	.inp
		width: 100%;
		padding: 3px 10px;
		background: transparent;
		border: 0;
		border-bottom: 1px solid #2d2d2d;
		font-size: 4em;
		text-align: center;
		box-sizing: border-box;
		font-family: 'Special Elite', cursive;


	footer
		position: fixed;
		bottom: 0;
		left: 0;


</style>
