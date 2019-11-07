import { call, put } from 'vuex-saga';
import VueRouter from 'vue-router';
import request from '../utils/request';

async function getDashboard() {
  return request(`/api/dashboard`)
}
async function saveDashboard(info) {
  return request('/api/dashboard', {
    method: 'POST',
    body: info
  })
}
async function delDashboard(dashboardId) {
  return request(`/api/dashboard/${dashboardId}`, {
    method: 'DELETE'
  })
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
    },
    *saveDashboard(state, { info }) {
      yield call(saveDashboard, info);
      yield put({
        type: 'dashboard/list',
      })
    },
    *delDashboard(state, dashboardId) {
      yield call(delDashboard, dashboardId);
      const data = yield call(getDashboard);
      yield put({
        type: 'dashboard/DASHBOARD_GET_DASHBOARD',
        data
      })
    }
  },
}