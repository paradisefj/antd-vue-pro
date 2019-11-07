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
          :kay="item.menuId"
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
export default {
  data() {
    const userInfo = this.$store.state.login.authedUser;
    return {
      current: ['mail'],
      openKeys: ['sub1'],
      menus: userInfo.authObjMap && userInfo.authObjMap.MENU || []
    };
  },
  methods: {
    handleClick(e) {
      console.log('click', e);
    },
    titleClick(e) {
      console.log('titleClick', e);
    },
  },
}
</script>
<style>
</style>