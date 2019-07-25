<template>
  <el-container>
    <el-main>
      <el-table
        :data="tableData"
        style="width: 70%;margin: auto;"
        height="500"
        :row-class-name="tableRowClassName">
        <el-table-column
          label="运单号"
          prop="orderNumber"
          width="180">
        </el-table-column>
        <el-table-column
          label="收件人"
          prop="receiver"
          width="180">
        </el-table-column>
        <el-table-column
          label="电话"
          prop="phone"
          width="180">
        </el-table-column>
        <el-table-column
          label="状态"
          prop="status"
          width="180">
        </el-table-column>
        <el-table-column
          label="预约时间"
          prop="bookDate"
          width="200">
        </el-table-column>
        <el-table-column
          align="right">
          <template slot="header" slot-scope="scope">
            <el-button
              size="mini"
              type="success"
              plain
              @click="showAll">All
            </el-button>
            <el-button
              size="mini"
              type="success"
              plain
              @click="filterNotTake">未取件
            </el-button>
            <el-button
              size="mini"
              type="success"
              plain
              @click="filterBooked">已预约
            </el-button>
            <el-button
              size="mini"
              type="success"
              plain
              @click="filterTake">已取件
            </el-button>
            <el-button
              style="margin-top: 10px;"
              type="primary"
              icon="el-icon-plus" circle
              @click="dialogFormVisible=true">
            </el-button>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="confirmReceived(scope.$index, scope.row)"
              :disabled="disabledConfirmButton(scope.row)">确认收货
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <package-dialog :visiable="dialogFormVisible"
                      @changeDialogVisiable="changeDialogVisiable($event)"></package-dialog>
    </el-main>
  </el-container>
</template>

<script>
  import PackageDialog from '../components/PackageDialog'

  export default {
    name: "Manager",
    components: {PackageDialog},
    data() {
      return {
        dialogFormVisible: false,
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
      confirmReceived(index, item) {
        this.$store.dispatch('updatePackage', item);
      },
      disabledConfirmButton(item) {
        return item.status === '已取件';
      },
      changeDialogVisiable(flag) {
        this.dialogFormVisible = flag;
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex % 2 === 0) {
          return 'warning-row';
        } else {
          return 'success-row';
        }
      }
    }
  }
</script>

<style scoped>
  .el-table .warning-row {
    background: orange;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
