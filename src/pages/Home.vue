<template lang="pug">
	div
		.number_field
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
				number: ''
			}
		},
		computed: {

		},

		methods: {

			calculate () {
				var checkIfRepeatNum = this.numbers.filter((item) => item.title.value === this.number)

				if (this.number && checkIfRepeatNum.length === 0) {
					var num = {}

					num['title'] = {
						'value': this.number,
						'symbol': ''
					}

					num['base2'] = {
						'value': this.base(this.number, 2),
						'symbol': 'x<sub>2</sub>'
					}
					num['base8'] = {
						'value': this.base(this.number, 8),
						'symbol': 'x<sub>8</sub>'
					}
					num['base32'] = {
						'value': this.base(this.number, 32),
						'symbol': 'x<sub>32</sub>'
					}

					this.numbers.push(num)
					console.log(this.numbers)
					this.number = ''
				}
			},

			base (num, base) {
				var n = num * 1
				var numWithBase = n.toString(base)
				return numWithBase
			},

			oddEven (num) {
				if (num % 2 === 0) {
					// addParam('<i>◑</i> 2 · '+ num/2, 'oddEven');

				} else {
					// addParam('<i>◐</i> 2 · '+ Math.round(num/2 -1) + ' + 1', 'oddEven');
				}
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
		background: rgba(132, 123, 116, 0.15);
		border-radius 5px 8px 13px 21px
		&__symbol
			display inline-block
			width 28px
			padding-right 5px
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
