<template lang="pug">
  div(id="app")
    //- router-view(:key="$route.fullPath")
    TheHeader
    router-view
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="stylus">
  html
    height 100%

  body
    height 100%
    margin 0
    position: relative;
    font-family: 'Special Elite', cursive;
    font-size: 12px;
    background: url("/img/ricepaper2.png") 0 0 repeat;

  *:focus
    outline: none;
</style>
