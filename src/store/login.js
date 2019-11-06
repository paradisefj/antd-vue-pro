import { call, put } from 'vuex-saga'
import request from '../utils/request';

async function login(userInfo) {
  return request(`http://localhost:8080/api/auth/doLogin`, {
    method: 'POST',
    body: userInfo
  })
}
export default {
  namespaced: true,
  name: 'login',
  mutations: {
    AUTH_USER_LOGIN: (state, { info }) => {
      console.log('mutation', info);
      state.authedUser = info;
    }
  },
  actions: {
    *login(state, { userInfo }) {
      const data = yield call(login, userInfo);
      if(data.authedUser) {
        console.log('action', data);
        yield put({
          type: 'login/AUTH_USER_LOGIN',
          info: data.authedUser
        })
      }
    }
  },
}