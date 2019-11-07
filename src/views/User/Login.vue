<template>
  <a-form
      :form="form"
      @submit="handleSubmit"
    >
      <a-form-item
        label="用户名"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
      >
        <a-input
          v-decorator="[
            'userName',
            {rules: [{ required: true, message: 'Please input your user name!' }]}
          ]"
        />
      </a-form-item>
      <a-form-item
        label="密码"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
      >
        <a-input
          type="password"
          v-decorator="[
            'password',
            {rules: [{ required: true, message: 'Please input your password!' }]}
          ]"
        />
      </a-form-item>
      <a-button @click="handleSubmit">登录</a-button>
      <span>{{userInfo.userNm}}</span>
    </a-form>

</template>

<script>
import Vue from 'vue';
export default {
  name: 'home',
  data() {
    return {
      form: this.$form.createForm(this, { name: 'coordinated' }),
      userInfo: this.$store.state.login.authedUser || {},
    }
  },
  computed: {
    
  },
  created() {
    
  },
  methods: {
    handleSubmit(e) {
      const userInfo = this._data.form.getFieldsValue();
      this.$run("login/login", { userInfo });
    }
  }
}
</script>