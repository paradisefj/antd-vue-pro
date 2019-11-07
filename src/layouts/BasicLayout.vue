<template>
  <a-row>
    <a-col :span="2">
      <a-menu
        @click="handleClick"
        style="width: 256px"
        mode="inline"
      >

        <a-sub-menu v-for="item in menus" :key="item.menuId" v-if="item.children && item.children.length">
          <span slot="title"><a-icon type="mail" /><span>{{item.name}}</span></span>
          <a-menu-item v-for="child in item.children" v-bind:key="child.menuId">
            <router-link v-bind:to="child.path">{{child.name}}</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item 
          v-for="item in menus" 
          :key="item.menuId"
          v-if="!(item.children && item.children.length)">
          <router-link v-bind:to="item.path">{{item.name}}</router-link>
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col :span="22">
      <router-view/>
    </a-col>
  </a-row>
</template>
<script>
import { mapState } from 'vuex';

export default {
  created() {
    this.$run('login/getCurrentUser')
  },
  computed: {
    ...mapState({
      menus: state => state.login.authedUser.authObjMap && state.login.authedUser.authObjMap.MENU || [],
    })
  },
  data() {
    return {
    };
  },
  methods: {
    handleClick(e) {
    },
    titleClick(e) {
    },
  },
}
</script>
<style>
</style>