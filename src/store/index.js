import Vue from 'vue';
import Vuex from 'vuex';
import VuexSaga from 'vuex-saga';
import login from './login';

const context = require.context('./', false, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js');

const modules = {};
for (let i = 0; i < keys.length; i += 1) {
  const model = context(keys[i]).default;
  modules[model.name] = model;
}

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules,
});

Vue.use(VuexSaga, { store: store })

export default store;
