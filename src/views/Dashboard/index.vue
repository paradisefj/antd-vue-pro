<template>
  <div>
    <a-button @click="handleNew">新建</a-button>
    <div v-for="item in dashboards" :key="item.dashboardId">
      {{item.dashboardNm}}<a-icon type="close" @click="delDashboard(item.dashboardId)"/>
    </div>
    <d-modal :visible="visible" @ok="handleOk" @cancel="handleCancel"></d-modal>
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  import DashboardModal from './DashboardModal';

  export default {
    name: 'dashboard',
    components: {
      'd-modal': DashboardModal
    },
    created() {
      this.$run('dashboard/list');
    },
    data() {
      return {
        visible: false
      }
    },
    computed: {
        ...mapState({
          dashboards: state => state.dashboard.dashboards,
        })
      
    },
    methods: {
      handleNew(e) {
        this.$data.visible = true;
      },
      handleOk(values) {
        this.$data.visible = false;
        this.$run('dashboard/saveDashboard', { info: values })
      },
      handleCancel() {
        this.$data.visible = false;
      },
      delDashboard(dashboardId) {
        this.$run('dashboard/delDashboard', dashboardId)
      }
    }
  }
</script>