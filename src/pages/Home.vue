<template lang="pug">
	div
		.number_field(v-bind:class="{top:numbers.length}")
			input(type="number" v-model="number" maxlength = "7" autocomplete="off" v-on:keyup.enter="calculate()").inp
			.settings__container(v-bind:style="{backgroundColor: showSettings? 'white': 'transparent'}")
				<!-- span.settings__button(@click="toggleSettings()") {} -->
				<!-- .settings(v-if="showSettings")
					label
						input(type="checkbox" v-model="showFib") 
						span(v-if="showFib") Hide 
						span(v-else) Show 
						| Fibanacci numbers -->

		.res
			div(v-for="(num, index) in numbers" v-bind:class=" ['_' + num.title.value , {'bounce': num.title.value == repeat}] " ).num
				span.num__delete(@click="numberDelete(index)") &times;
				div( v-for="(value, key) in num" v-bind:class="key" v-if="value.value")
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
				repeat: null,
				number: '',
				primeList: [],
				fibList: [0, 1],
				factorialList: [],
				settingBtnOpen: false,

				showSettings: false,
				showFib: true
			}
		},

		mounted () {
			let nums = JSON.parse(localStorage.getItem('numbers'))
			console.log(nums)
			if (nums !== null) {
				if (nums.length) {
					this.numbers = nums
				}
			}
		},

		methods: {

			calculate () {
				let checkIfRepeatNum = this.numbers.filter((item) => item.title.value === this.number)
				// console.log('calculate')
				// console.log(typeof this.number)
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

					if (this.showFib) {
						num['detectFib'] = formula.detectFibonacciNumber(curNum, this.fibList)
					}

					num['factorial'] = formula.factorial(curNum, this.factorialList)

					this.numbers.push(num)

					localStorage.setItem('numbers', JSON.stringify(this.numbers))

					this.number = null

					console.timeEnd('calculating exec time')
				} else {
					this.repeat = this.number
					this.number = null
					setTimeout(() => {
						this.repeat = null
					}, 1000)
				}
			},

			numberDelete (n) {
				this.numbers.splice(n, 1)
				localStorage.setItem('numbers', JSON.stringify(this.numbers))
			},

			showPopup (msg) {
				alert(msg)
			},

			toggleSettings () {
				this.showSettings = !this.showSettings
			}
		}
	}

</script>

<style lang="stylus">
	@import "home.styl"
</style>
