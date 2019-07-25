<template>
  <el-dialog title="包裹入库" :visible.sync="visiable" center :before-close="closeDialog">
    <el-form ref="form" :model="form" :rules="addPackageRules" style="width: 50%;margin: auto">
      <el-form-item label="运单号" prop="orderNumber" :label-width="formLabelWidth">
        <el-input v-model="form.orderNumber" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="收件人" prop="receiver" :label-width="formLabelWidth">
        <el-input v-model="form.receiver" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone" :label-width="formLabelWidth">
        <el-input v-model="form.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="重量" prop="weight" :label-width="formLabelWidth">
        <el-input v-model="form.weight">
          <template slot="append">KG</template>
        </el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">取 消</el-button>
      <el-button type="primary" @click="addPackage">添加</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: "PackageDialog",
    props: ['visiable'],
    data() {
      return {
        form: {
          orderNumber: '',
          receiver: '',
          phone: '',
          weight: '',
          status: '未取件'
        },
        addPackageRules: {
          orderNumber: [
            {required: true, message: '请输入订单号', trigger: 'blur'},
          ],
          receiver: [
            {required: true, message: '请输入收件人', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '请输入电话号码', trigger: 'blur'}
          ],
          weight: [
            {required: true, message: '请输入重量', trigger: 'blur'}
          ],
        },
        formLabelWidth: '120px',
      }
    },
    methods: {
      addPackage() {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            let item ={};
            item.orderNumber = this.form.orderNumber;
            item.receiver = this.form.receiver;
            item.phone = this.form.phone;
            item.weight = this.form.weight;
            item.status = this.form.status;
            this.$store.dispatch('addPackages', item);
            this.closeDialog();
          } else {
            return false;
          }
        });
      },
      closeDialog() {
        this.$refs['form'].resetFields();
        this.$emit('changeDialogVisiable', false);
      }
    }
  }
</script>

<style scoped>

</style>
