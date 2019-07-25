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
              @click="dialogFormVisible=true">添加
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
      <package-dialog :visiable="dialogFormVisible" @changeDialogVisiable="changeDialogVisiable($event)"></package-dialog>
    </el-main>
  </el-container>
</template>

<script>
import PackageDialog from '../components/PackageDialog'
  export default {
    name: "Manager",
    components:{PackageDialog},
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
      confirmReceived(index,item){
        this.$store.dispatch('updatePackage', item);
      },
      disabledConfirmButton(item){
        return item.status === '已取件';
      },
      changeDialogVisiable(flag) {
        this.dialogFormVisible = flag;
      }
    }
  }
</script>

<style scoped>
</style>
