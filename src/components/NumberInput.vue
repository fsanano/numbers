<template lang="pug">
  form.number__field-contanier(
    :class="{top: numbers.length}"
    @submit.prevent="checkNumber"
  )

    input.number__field(
      type="number"
      maxlength = "7"
      autocomplete="off"
      v-model="number"
    )

    .settings__container(:style="{backgroundColor: visibility? 'white': 'transparent'}")
      span.settings__button(@click="settingsToggle('visibility')") {}

      .settings(v-if="visibility")
        label
          input(
            type="checkbox"
            :value="fibonacci"
            @click="settingsToggle('fibonacci')"
          )
          | Fibanacci numbers

</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'NumberInput',
  data() {
    return {
      number: '',
    };
  },
  computed: {
    ...mapState({
      numbers: state => state.numbers,
      visibility: state => state.settings.visibility,
      fibonacci: state => state.settings.fibonacci,
    }),
  },
  methods: {
    ...mapActions(['settingsToggle']),
    checkNumber() {
      console.info('check');
    },
  },
};
</script>

<style lang="stylus">

.number__field-contanier
  position absolute
  width 20%
  height 60px
  top 40%
  right 0
  left 0
  margin auto
  transition .3s
  &.top
    top 80px

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
