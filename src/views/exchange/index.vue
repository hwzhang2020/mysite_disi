<template>
  <div class="root">
    <el-row :gutter="10">
			<el-col :span="12">
				<el-checkbox v-model="refresh">刷 新</el-checkbox>	  
        <el-divider direction="vertical"></el-divider>
        <el-button size="small" @click="handleCountZero">重新计数</el-button>
			</el-col>
			<el-col :span="12" style="text-align: right;">
			</el-col>
		</el-row>

    <el-table :data="exchangeList" style="width: 100%">
      <el-table-column prop="scode" label="信关站ID"></el-table-column>
      <el-table-column prop="name" label="信关站代号"></el-table-column>
      <el-table-column prop="recvIP" label="接收IP"></el-table-column>
      <el-table-column prop="recvPort" label="接收端口"></el-table-column>
      <el-table-column prop="recvState" label="接收连接状态"></el-table-column>
      <el-table-column prop="recvCount" label="接收计数"></el-table-column>
      <el-table-column prop="sendIP" label="发送IP"></el-table-column>
      <el-table-column prop="sendPort" label="发送端口"></el-table-column>
      <el-table-column prop="sendState" label="发送连接状态"></el-table-column>
      <el-table-column prop="sendCount" label="发送计数"></el-table-column>
    </el-table>
   
    <el-pagination
      class="pagination"
      background
      layout="total, sizes, prev, pager, next"
      :total="exchangeList.length"
      :page-sizes="[20, 50, 100, 200]"
      :page-size="pageSize"
      :current-page="currentPage"
      @size-change="handlePageSizeChange"
      @current-change="handlePageChange"
      @prev-click="handlePageChange"
      @next-click="handlePageChange"
    >
    </el-pagination>


  </div>
</template>

<script>
  import mock from '../../../mock/exchange'
  import { postExchange } from '@/api/api_exchange'
  export default {
    data() {
      return {
        refresh: false,

        exchangeList: [],
        pageSize: 20,
        currentPage: 1
      }
    },
    mounted() {
      //this.init()
    },
    methods: {
      init() {
        postExchange({}).then(response => {
			    console.log(response)
          if (response.code === 200) {
            this.exchangeList = response.respBody
            this.currentPage = 1
          }
		    })
      },
      handleCountZero() {
      },

      handlePageSizeChange(size) {
        console.log("size:", size)
        this.pageSize = size
      },
      handlePageChange(page) {
        console.log("page:", page)
        this.currentPage = page
      }
    }
  }
</script>

<style scoped>
.pagination {
  margin-top: 20px;
  margin-right: 50px;
  float: right;
}
</style>