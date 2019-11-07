import { call, put } from 'vuex-saga';
import VueRouter from 'vue-router';
import request from '../utils/request';

async function getDashboard() {
  return request(`/api/dashboard/loadDashboards`)
}
export default {
  namespaced: true,
  name: 'dashboard',
  state: {
    dashboards: []
  },
  mutations: {
    DASHBOARD_GET_DASHBOARD: (state, { data }) => {
      state.dashboards = data || [];
    }
  },
  actions: {
    *list(state, _) {
      const data = yield call(getDashboard);
      yield put({
        type: 'dashboard/DASHBOARD_GET_DASHBOARD',
        data
      })
    }
  },
}