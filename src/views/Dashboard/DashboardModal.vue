<template>
  <a-modal title="Title"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel">
    <a-form
      :form="form"
    >
      <a-form-item
        label="看板名称"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
      >
        <a-input
          v-decorator="[
            'dashboardNm',
            {rules: [{ required: true, message: '请输入看板名称!' }]}
          ]"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script>
  const modal = {
    name: 'DashboardModal',
    props: {
      visible: Boolean,
    },
    data() {
      return {
        form: this.$form.createForm(this),
        confirmLoading: false
      }
    },
    methods: {
      handleOk() {
        this.$emit('ok', this.$data.form.getFieldsValue());
      },
      handleCancel() {
        this.$emit('cancel');
      }
    }
  }
  export default modal;
</script>
