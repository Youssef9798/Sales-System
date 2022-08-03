import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    items: [],
  },
  mutations: {
    SET_ITEMS(state, payload) {
      state.items = payload;
    },
  },
  actions: {
    async getItems({ commit }) {
      await axios.get('https://fe-task.getsandbox.com/performance').then(res => {
        commit('SET_ITEMS', res.data);
      });
    },
  },
});

export default store;
