<template>
  <el-container>
    <el-main>
      <el-table
        :data="tableData"
        style="width: 100%"
        height="500">
        <el-table-column
          label="运单号"
          prop="orderNumber">
        </el-table-column>
        <el-table-column
          label="收件人"
          prop="receiver">
        </el-table-column>
        <el-table-column
          label="电话"
          prop="phone">
        </el-table-column>
        <el-table-column
          label="状态"
          prop="status">
        </el-table-column>
        <el-table-column
          label="预约时间"
          prop="bookDate">
        </el-table-column>
        <el-table-column
          align="right">
          <template slot="header" slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="showAll">All
            </el-button>
            <el-button
              size="mini"
              type="primary"
              @click="filterNotTake">未取件
            </el-button>
            <el-button
              size="mini"
              type="primary"
              @click="filterBooked">已预约
            </el-button>
            <el-button
              size="mini"
              type="primary"
              @click="filterTake">已取件
            </el-button>

            <el-button
              size="mini"
              type="primary"
              @click="dialogFormVisible=true">添加
            </el-button>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="confirmReceived(scope.$index, scope.row)">确认收货
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="包裹入库" :visible.sync="dialogFormVisible" center>
        <el-form :model="form">
          <el-form-item label="运单号" :label-width="formLabelWidth">
            <el-input style="width: 200px;" v-model="form.orderNumber" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="收件人" :label-width="formLabelWidth">
            <el-input style="width: 200px;" v-model="form.receiver" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话" :label-width="formLabelWidth">
            <el-input style="width: 200px;" v-model="form.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="重量" :label-width="formLabelWidth">
            <el-input style="width: 200px;" v-model="form.weight" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addPackage">添加</el-button>
        </div>
      </el-dialog>
    </el-main>
  </el-container>
</template>

<script>

  export default {
    name: "Manager",
    data() {
      return {
        dialogFormVisible: false,
        // tableData: [
        //   {
        //     orderId: 1,
        //     orderNumber: '20160502',
        //     receiver: '王小虎',
        //     phone: '12345612312',
        //     status: '未取件',
        //     bookDate: '',
        //   }
        // ],
        form: {
          orderNumber: '',
          receiver: '',
          phone: '',
          weight: '',
          status: '未取件'
        },
        formLabelWidth: '120px',
      }
    },
    computed: {
      tableData() {
        return this.$store.getters.packagesList;
      }
    },
    mounted() {
      this.initDatas();
    },
    methods: {
      addPackage() {
        this.dialogFormVisible = false;
        this.$store.dispatch('addPackages',this.form);
      },
      initDatas() {
        this.$store.dispatch('getPackages');
      },
      showAll() {
        this.initDatas();
      },
      filterNotTake() {
        this.$store.dispatch('getNotTakePackage');
      },
      filterTake() {
        this.$store.dispatch('getTakePackage');
      },
      filterBooked() {
        this.$store.dispatch('getBookedPackage');
      },
      confirmReceived(index,item){
        this.$store.dispatch('updatePackage', item);
      }
    }
  }
</script>

<style scoped>
</style>
