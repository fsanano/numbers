<template lang="pug">
	div
		.number_field(v-bind:class="{top:numbers.length}")
			input(type="number" v-model="number" maxlength = "7" autocomplete="off" v-on:keyup.enter="calculate()").inp

		.res
			ul(v-for="num in numbers" v-bind:class=" '_' + num.title.value ").num 
				li( v-for="(value, key) in num" v-bind:class="key" v-if="value.value")
					span.num__symbol(v-html="value.symbol")
						br
					span.num__value(v-html="value.value")

</template>

<script>

	import formula from '../assets/formulas'

	export default{
		data () {
			return {
				numbers: [],
				number: '',
				primeList: [],
				fibList: [0, 1],
				factorialList: []
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
					console.time('calculating exec time')

					let curNum = this.number * 1
					let num = {}

					num['title'] = {
						'value': this.number,
						'symbol': ''
					}

					num['base2'] = {
						'value': formula.base(curNum, 2),
						'symbol': 'x<sub>2</sub>'
					}

					num['base8'] = {
						'value': formula.base(curNum, 8),
						'symbol': 'x<sub>8</sub>'
					}

					num['base32'] = {
						'value': formula.base(curNum, 32),
						'symbol': 'x<sub>32</sub>'
					}

					num['oddEven'] = formula.oddEven(curNum)

					num['factorization'] = formula.factorization(curNum, this.primeList)

					num['detectFib'] = formula.detectFibonacciNumber(curNum, this.fibList)

					num['factorial'] = this.factorial(curNum, this.factorialList)

					this.numbers.push(num)

					this.number = null

					console.timeEnd('calculating exec time')
				}
			},

			factorial (n) {
				let a = 0
				let fac = 1
				this.factorialList = []

				while (fac < (n + 1)) {
					a = a + 1
					fac *= a
					this.factorialList.push(fac)
				}

				let l = this.factorialList.length

				for (let i = 0; i <= l; i++) {
					if (this.factorialList[i] === n) {
						// addParam(i+1 + '!', 'factorial')
						return {
							value: i + 1,
							symbol: '!'
						}
					}
				}
				return {
					value: '',
					symbol: ''
				}
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
