<template lang="pug">
  div
    form.number__field-contanier(
      @submit.prevent="checkNumber"
      :class="{top: numbers.length}"
    )
      NumberInput(v-model="number")
      //- NumberSettings

    //- NumberList
    //- .res
    //-   div(
    //-     v-for="(num, index) in numbers"
    //-     :key="num"
    //-     :class=" ['_' + num.title.value , {'bounce': num.title.value == repeat}] "
    //-   ).num
    //-     span.num__delete(@click="numberDelete(index)") &times;
    //-     div(
    //-       v-if="value.value"
    //-       v-for="(value, key) in num"
    //-       :key="value"
    //-       :class="key"
    //-     )
    //-       span.num__symbol(v-html="value.symbol")
    //-         br
    //-       span.num__value(v-html="value.value")

</template>

<script>
import { mapState } from 'vuex';
import formula from '@/formulas';
import NumberInput from '@/components/NumberInput.vue';

export default {
  components: {
    NumberInput,
  },
  data() {
    return {
      repeat: null,
      number: '',
      primeList: [],
      fibList: [0, 1],
      factorialList: [],
      settingBtnOpen: false,

      showSettings: false,
      showFib: true,
    };
  },

  computed: {
    ...mapState({
      numbers: state => state.numbers,
    }),
  },

  mounted() {
    const nums = JSON.parse(localStorage.getItem('numbers'));
    console.log(nums);
    if (nums !== null) {
      if (nums.length) {
        this.numbers = nums;
      }
    }
  },

  methods: {

    calculate() {
      const checkIfRepeatNum = this.numbers.filter(item => item.title.value === this.number);
      // console.log('calculate')
      // console.log(typeof this.number)
      if (this.number === '') {
        console.log('it is null');
        this.showPopup('Nice try, but service work with whole numbers');
        this.number = null;
      }
      if (this.number && checkIfRepeatNum.length === 0) {
        console.time('calculating exec time');

        const curNum = this.number * 1;
        const num = {};

        num.title = {
          value: this.number,
          symbol: '',
        };

        num.base2 = {
          value: formula.base(curNum, 2),
          symbol: 'x<sub>2</sub>',
        };

        num.base8 = {
          value: formula.base(curNum, 8),
          symbol: 'x<sub>8</sub>',
        };

        num.base32 = {
          value: formula.base(curNum, 32),
          symbol: 'x<sub>32</sub>',
        };

        num.oddEven = formula.oddEven(curNum);

        // num.factorization = formula.factorization(curNum, this.primeList);

        // if (this.showFib) {
        //   num.detectFib = formula.detectFibonacciNumber(curNum, this.fibList);
        // }

        // num.factorial = formula.factorial(curNum, this.factorialList);

        // this.numbers.push(num);

        // localStorage.setItem('numbers', JSON.stringify(this.numbers));

        // this.number = null;

        console.timeEnd('calculating exec time');
      } else {
        this.repeat = this.number;
        this.number = null;
        setTimeout(() => {
          this.repeat = null;
        }, 1000);
      }
    },

    numberDelete(n) {
      this.numbers.splice(n, 1);
      localStorage.setItem('numbers', JSON.stringify(this.numbers));
    },

    showPopup(msg) {
      console.info('msg', msg);
    },

    toggleSettings() {
      this.showSettings = !this.showSettings;
    },
  },
};

</script>

<style lang="stylus">
.number__field-contanier
  position absolute
  width 320px
  height 60px
  top 40%
  right 0
  left 0
  margin auto
  transition .3s
  &.top
    top 80px

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
  position relative
  box-sizing border-box
  display inline-block
  padding 10px
  margin 0 5px 10px 5px
  border 1px dashed #ccc
  background rgba(132, 123, 116, 0.15)
  border-radius 5px 8px 13px 21px
  &:hover
    .num__delete
      opacity 1
  &__symbol
    display inline-block
    width 28px
    padding-right 8px
    text-align center
  &>div
    position relative
    display block
    padding 5px 10px
    font-size 15px
    text-align left
    &.title
      text-align center
      font-size 2rem
      margin 0 0px 5px 0
      padding 5px 15px
      display inline-block
      .num__symbol
        display none
  &__delete
    position absolute
    font-size 2rem
    right 10px
    top 5px
    cursor pointer
    opacity 0
    transition .3s

  &.repeat
    color red

footer
  position fixed
  bottom 0
  left 0

@keyframes bounce
  0%, 20%, 53%, 80%, 100%
    -webkit-transition-timing-function cubic-bezier(0.215, 0.610, 0.355, 1.000)
    transition-timing-function cubic-bezier(0.215, 0.610, 0.355, 1.000)
    -webkit-transform translate3d(0,0,0)
    transform translate3d(0,0,0)
  40%, 43%
    -webkit-transition-timing-function cubic-bezier(0.755, 0.050, 0.855, 0.060)
    transition-timing-function cubic-bezier(0.755, 0.050, 0.855, 0.060)
    -webkit-transform translate3d(0, -30px, 0)
    transform translate3d(0, -30px, 0)
  70%
    -webkit-transition-timing-function cubic-bezier(0.755, 0.050, 0.855, 0.060)
    transition-timing-function cubic-bezier(0.755, 0.050, 0.855, 0.060)
    -webkit-transform translate3d(0, -15px, 0)
    transform translate3d(0, -15px, 0)
  90%
    -webkit-transform translate3d(0,-4px,0)
    transform translate3d(0,-4px,0)

.bounce
  -webkit-animation-name bounce
  animation-name bounce
  -webkit-transform-origin center bottom
  transform-origin center bottom
  -webkit-animation-duration 1s
  animation-duration 1s
  -webkit-animation-fill-mode both
  animation-fill-mode both


.settings
  padding 10px
  // background-color white
  &__container
    position absolute
    left 0
    top 100%
    width 100%

  &__button
    font-size 1.5rem
    cursor pointer

</style>
