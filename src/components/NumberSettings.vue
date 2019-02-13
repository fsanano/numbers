<template lang="pug">
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

export default {
  name: 'NumberSettings',

};
</script>
