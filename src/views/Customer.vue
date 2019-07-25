<template>
  <el-container>
    <el-header style="font-size: 30px">预约取件</el-header>
    <el-main>
      <el-form style="width: 500px;margin: auto;" label-position=right label-width="80px" ref="bookOrder"
               :model="bookOrder">
        <el-form-item label="运单号">
          <el-input v-model="bookOrder.orderNumber"></el-input>
        </el-form-item>
        <el-form-item label="取件时间">
          <el-date-picker
            style="width: 420px"
            v-model="bookOrder.bookDate"
            type="datetime"
            :picker-options="{selectableRange: '09:00:00 - 20:00:00'}"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确认</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "Customer",
    data() {
      return {
        bookOrder: {
          orderNumber: '',
          bookDate: ''
        }
      }
    },
    methods: {
      resetForm() {
        this.bookOrder.orderNumber = '';
        this.bookOrder.bookDate = '';
      },
      onSubmit() {

      }
    }
  }
</script>

<style scoped>

</style>
