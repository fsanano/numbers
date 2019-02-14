<template lang="pug">
  .settings__container(:style="{backgroundColor: settings.visibility? 'white': 'transparent'}")
    span.settings__button(@click="settingsToggle('settings.visibility')") {}

    .settings(v-if="settings.visibility")
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
  name: 'NumberSettings',
  data() {
    return {
      settings: {
        fibonacci: 'Fibanacci numbers',
      },
    };
  },
  computed: {
    ...mapState({
      settings: state => state.settings,
    });
  },
  methods: {
    ...mapActions(['settingsToggle']),
  },
};
</script>
