<template>
  <el-container>
    <el-header>Header</el-header>
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
          prop="status"
          label="状态"
          width="100"
          :filters="filterConditions"
          :filter-method="filterTag"
          filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.status === '家' ? 'primary' : 'success'"
              disable-transitions>{{scope.row.status}}
            </el-tag>
          </template>
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
              @click="filterAll(scope.$index, scope.row)">All
            </el-button>
            <el-button
              size="mini"
              type="primary"
              @click="filterBooked(scope.$index, scope.row)">已预约
            </el-button>
            <el-button
              size="mini"
              type="primary"
              @click="filterTake(scope.$index, scope.row)">已取件
            </el-button>
            <el-button
              size="mini"
              type="primary"
              @click="filterNotTake(scope.$index, scope.row)">未取件
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
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "Manager",
    data() {
      return {
        tableData: [
          {
            orderId: 1,
            orderNumber: '20160502',
            receiver: '王小虎',
            phone: '12345612312',
            status: '未取件',
            bookDate: '',
          }
        ],
        filterConditions: [
          {text: '未取件', value: 1},
          {text: '已预约', value: 2},
          {text: '未预约', value: 3},
          ],
      }
    },
    methods:{
      filterTag(value, row) {
        return row.status === value;
      },
    }
  }
</script>

<style scoped>

</style>
