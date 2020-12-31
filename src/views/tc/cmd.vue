<template>

  <div class="root">
  
    <el-row :gutter="10">
      <el-col :span="12">
				<el-date-picker
		      v-model="datetime" @change="handleDateTimeChange"
		      type="datetimerange"
			    format="yyyy-MM-dd HH:mm:ss"
			    value-format="yyyy-MM-dd HH:mm:ss"
		      start-placeholder="开始时间"
		      end-placeholder="结束时间"
		      :default-time="['12:00:00']">
		    </el-date-picker>
			</el-col>

			<el-col :span="6">
				<el-select v-model="groundstation.groundstationid" placeholder="请选择信关站">
          <el-option
            v-for="item in groundstation.groundstations"
            :key="item.groundStationId"
            :label="item.groundStationText"
            :value="item.groundStationId">
          </el-option>
        </el-select>
			</el-col>
      <el-col :span="6" style="text-align: right;">
				<el-input placeholder="请输入卫星ID" v-model="satelliteid" clearable class="input-with-select">
          <el-button @click="handleCmdQuery" slot="append" icon="el-icon-search"></el-button>
        </el-input>
			</el-col>

		</el-row>

    <el-table :data="cmdList" style="width: 100%">
      <el-table-column prop="sendTime" label="时间"></el-table-column>
      <el-table-column prop="sendData" label="指令"></el-table-column>
    </el-table>
   
    <el-pagination
      class="pagination"
      background
      layout="total, sizes, prev, pager, next"
      :total="total"
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
  import { formatDateTime } from '@/utils/common'
  import { postGroundStations } from '@/api/api_groundstation'
  import { postTcsByPage } from '@/api/api_tc'

  export default {
    data() {
      return {
        satelliteid: "",
        datetime: [],
        groundstation: {
          groundstationid: '1',
          groundstations: []
        },
        cmdList: [],
        total: 0,
        pageSize: 20,
        currentPage: 1
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        //初始化时间选择器
        let current = new Date()
				const end = formatDateTime(current, 'yyyy-MM-dd HH:mm:ss')
				current.setDate(current.getDate() - 1)
				const start = formatDateTime(current, 'yyyy-MM-dd HH:mm:ss')
				this.datetime = [start, end]

        //初始化信关站列表
        postGroundStations({}).then(response => {
          if (response.code === 200) {
            const groundstations = response.respBody
            this.groundstation.groundstations = groundstations
            if (groundstations.length > 0) {
              this.groundstation.groundstationid = groundstations[0].groundStationId
            }
          }
        })
      },
      queryByPage() {
        const satelliteId = this.satelliteid
        const groundStationId = this.groundstation.groundstationid
        const start = this.datetime[0]
        const end = this.datetime[1]

        const pageSize = this.pageSize
        const currentPage = this.currentPage
        postTcsByPage({ satelliteId, groundStationId, start, end, pageSize, currentPage }).then(response => {
			    console.log(response)
          if (response.code === 200) {
            const page = response.respBody
            this.total = page.total
            this.currentPage = page.currentPage
            this.cmdList = page.dataList
          }
		    })
      },

      handleDateTimeChange(range) {
				//console.log("datetime: ", range)
			  this.datetime = range
      },
      handleCmdQuery() {
        // 调用方法, 包含对data数据的修改和调用(调用vue的实例对象), 需要对调用方法绑定作用域
        this.$options.methods.queryByPage.bind(this)() 
      },
        
      handlePageSizeChange(size) {
        //console.log("size:", size)
        this.pageSize = size
        // 调用方法, 包含对data数据的修改和调用(调用vue的实例对象), 需要对调用方法绑定作用域
        this.$options.methods.queryByPage.bind(this)() 
      },
      handlePageChange(page) {
        //console.log("page:", page)
        this.currentPage = page
        // 调用方法, 包含对data数据的修改和调用(调用vue的实例对象), 需要对调用方法绑定作用域
        this.$options.methods.queryByPage.bind(this)() 
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