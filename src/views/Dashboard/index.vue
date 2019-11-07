<template>
  <div>
    <div v-for="item in dashboards" :key="item.dashboardId">
      {{item.dashboardNm}}
    </div>
  </div>
</template>
<script>
  export default {
    name: 'dashboard',
    created() {
      this.$run('dashboard/list');
    },
    data() {
      return {
        dashboards: this.$store.state.dashboard.dashboards || []
      }
    },
    computed: {
      
    },
    method: {

    }
  }
</script>