<template>
  <header>
    <ul class="header__menu">
      <!-- <li>Home</li>
      <li>Articles</li>
      <li>About</li>
      <li>Contacts</li> -->
    </ul>
    <a class="logo">
      Numb<sup>e</sup>r the<sub>o</sub>R(y)
    </a>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      menu: [
        {
          txt: 'Odd/Event',
          status: true,
        },
        {
          txt: 'Base',
          status: true,
          subMenu: [
            {},
          ],
        },
      ],
    };
  },
};
</script>

<style lang="stylus">
.logo
  display block
  font-size 3em
  text-align right
  padding 20px
  margin  0

.header__menu
  position absolute
  left 0
  top 0

</style>
