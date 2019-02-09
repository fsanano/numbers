import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    settings: {
      visibility: false,
      fibonacci: true,
    },
    numbers: [],
  },
  mutations: {
    SETTINGS_TOGGLE: (state, value) => {
      Vue.set(state.settings, value, !state.settings[value]);
    },
  },
  actions: {
    settingsToggle({ commit }, value) {
      commit('SETTINGS_TOGGLE', value);
    },
  },
  plugins: [createPersistedState()],
});
