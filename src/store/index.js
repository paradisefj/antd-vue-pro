import Vue from 'vue';
import Vuex from 'vuex';
import VuexSaga from 'vuex-saga';
import { call, put } from 'vuex-saga'
import request from '../utils/request';

Vue.use(Vuex);

async function login(userInfo) {
  return request(`http://localhost:8080/api/auth/doLogin`, {
    method: 'POST',
    body: userInfo
  })
}
const store = new Vuex.Store({
  state: {
  },
  mutations: {
    AUTH_USER_LOGIN: (state, { info }) => {
      state.authedUser = info;
    }
  },
  actions: {
  	*login(state, { userInfo }) {
      const data = yield call(login, userInfo);
      if(data.authedUser) {
        yield put({
          type: 'AUTH_USER_LOGIN',
          info: data.authedUser
        })
      }
  	}
  },
  modules: {
    
  },
});

Vue.use(VuexSaga, { store: store })

export default store;
