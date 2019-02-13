<template lang="pug">
  input.number__field(
    type="number"
    maxlength = "7"
    autocomplete="off"
    :placeholder="placeholder"
    :value="value"
    @input="updateValue"
    @focus="hidePlaceholder"
    @blur="showPlaceholder"
  )
</template>

<script>
/**
 * Input component for typing number
 */
export default {
  name: 'NumberInput',

  data() {
    return {
      placeholderTxt: 'Type number',
      placeholder: 'Type number',
    };
  },

  props: {
    value: {
      type: [Number, String],
      required: true,
      default: '',
    },
  },

  methods: {
    updateValue(e) {
      this.$emit(e.target.value);
    },
    hidePlaceholder() {
      this.placeholder = '';
    },
    showPlaceholder() {
      this.placeholder = this.placeholderTxt;
    },
  },
};
</script>

<style lang="stylus">

.number__field
  width 100%
  padding 3px 10px
  background transparent
  border 0
  border-bottom 1px solid #2d2d2d
  font-size 4em
  text-align center
  box-sizing border-box
  font-family 'Special Elite', cursive

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button
  -webkit-appearance none
  margin 0
</style>
