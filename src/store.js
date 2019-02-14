import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numbers: [],
    settings: {
      visibility: false,
      fibonacci: true,
    },
  },
  mutations: {
    SETTINGS_TOGGLE: (state, prop) => {
      Vue.set(state.settings, prop, !state.settings[prop]);
    },
  },
  actions: {
    settingsToggle({ commit }, prop) {
      commit('SETTINGS_TOGGLE', prop);
    },
    addNumber({ state }, num) {
      state.numbers.push(num);
    },
  },
  plugins: [createPersistedState()],
});
