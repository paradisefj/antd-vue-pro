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
            {rules: [{ required: true, message: 'Please input your note!' }]}
          ]"
        />
      </a-form-item>
      <a-form-item
        label="密码"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
      >
        <a-input
          v-decorator="[
            'password',
            {rules: [{ required: true, message: 'Please input your note!' }]}
          ]"
        />
      </a-form-item>
      <a-button @click="handleSubmit">登录</a-button>
    </a-form>

</template>

<script>
import Vue from 'vue';
export default {
  name: 'home',
  data() {
    return {
      form: this.$form.createForm(this, { name: 'coordinated' }),
    }
  },
  created() {
    
  },
  methods: {
    handleSubmit(e) {
      const userInfo = this._data.form.getFieldsValue();
      console.log(userInfo);
      //debugger;
      //this.$store.dispatch('login', userInfo);
      this.$run("login", { userInfo });
    }
  }
}
</script>