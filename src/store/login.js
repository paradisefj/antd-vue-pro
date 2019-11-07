import { call, put } from 'vuex-saga';
import VueRouter from 'vue-router';
import request from '../utils/request';
import router from '../router';

async function login(userInfo) {
  return request(`/api/auth/doLogin`, {
    method: 'POST',
    body: userInfo
  })
}
export default {
  namespaced: true,
  name: 'login',
  state: {
    authedUser: {}
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
          type: 'login/AUTH_USER_LOGIN',
          info: data.authedUser
        });
        router.push("/search");
      }
    }
  },
}