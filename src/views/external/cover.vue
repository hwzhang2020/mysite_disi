<template>
  
  <div class="root">

    <el-row :gutter="10">
			<el-col :span="6">
				<el-date-picker
		      v-model="start" @change="handleStartChange"
		      type="datetime"
			    format="yyyy-MM-dd HH:mm:ss"
			    value-format="yyyy-MM-dd HH:mm:ss"
		      placeholder="选择开始时间">
		    </el-date-picker>
			</el-col>
      <el-col :span="6">
				<el-input-number v-model="hours" @change="handleHoursChange" :min="1" :max="144" label="时间长度"></el-input-number>
			</el-col>
      <el-col :span="6" :offset="6" style="text-align: right;">
				<el-input placeholder="请输入卫星ID" v-model="satelliteid" clearable class="input-with-select">
          <el-button @click="handleSatelliteCoverQuery" slot="append" icon="el-icon-search"></el-button>
        </el-input>
			</el-col>
		</el-row>

    <div style="margin: 15px 0;"></div>
    <el-checkbox :indeterminate="groundstation.indeterminategroundstations" v-model="groundstation.allgroundstations" @change="handleCheckAllGroundStationChange">全选</el-checkbox>
		<div style="margin: 15px 0;"></div>
		<el-checkbox-group v-model="groundstation.checkedgroundstations">
			<el-checkbox v-for="groundstation in groundstation.groundstations" :label="groundstation.groundStationText" :key="groundstation.groundStationId">{{groundstation.groundStationText}}</el-checkbox>
		</el-checkbox-group>    

    <el-table :data="coverList" style="width: 100%">
      <el-table-column prop="epoch" label="时间"></el-table-column>
      <el-table-column prop="substar" label="星下点"></el-table-column>
      <el-table-column prop="radius" label="覆盖半径(km)"></el-table-column>
      <el-table-column prop="groundStations" label="过境信关站"></el-table-column>
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
  //import mock from '../../../mock/satellite_covers'
  import { postGroundStations } from '@/api/api_groundstation'
  import { postSatelliteCovers, postSatelliteCoversByPage } from '@/api/api_external'
  export default {
    data() {
      return {
        satelliteid: "",
        start: '',
        hours: 1,
        groundstation: {
          groundstations: [],
					checkedgroundstations: [],
					indeterminategroundstations: false,
					allgroundstations: false,
        },
          
        coverList: [],
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
				const start = formatDateTime(current, 'yyyy-MM-dd HH:mm:ss')
				this.start = start

        //初始化信关站列表
        postGroundStations({}).then(response => {
          if (response.code === 200) {
            const groundstations = response.respBody
            this.groundstation.groundstations = groundstations
          }
        })
      },
      queryByPage() {
        const pageSize = this.pageSize
        const currentPage = this.currentPage
        postSatelliteCoversByPage({pageSize, currentPage}).then(response => {
			    console.log(response)
          if (response.code === 200) {
            const page = response.respBody
            this.total = page.total
            this.currentPage = page.currentPage
            this.coverList = page.dataList
          }
		    })},

      handleStartChange(datetime) {
				//console.log("datetime: ", datetime)
			  this.start = datetime
      },
      handleHoursChange(value) {
        console.log("hours:", value)
        this.hours = value
      },

      handleSatelliteCoverQuery() {
        const satelliteId = this.satelliteid
        const groundstations = this.groundstation.groundstations.filter(item => this.groundstation.checkedgroundstations.includes(item.groundStationText))
        const groundStationIds = groundstations.map(item => item.groundStationId)
        const start = this.start
        const hours = this.hours
        
        postSatelliteCovers({satelliteId, groundStationIds, start, hours}).then(response => {
          const result = response.respBody
          if (result === 'true') {
            // 调用方法, 包含对data数据的修改和调用(调用vue的实例对象), 需要对调用方法绑定作用域
            this.$options.methods.queryByPage.bind(this)() 
          } else {
            this.$message.error(response.message)
          }
        })
      },
      handleCheckAllGroundStationChange(value) {
        this.groundstation.checkedgroundstations = []
				if (value) {
					this.groundstation.checkedgroundstations = this.groundstation.groundstations.map(item => item.groundStationText)
				}
				this.groundstation.indeterminategroundstations = false
      },
        

      handlePageSizeChange(size) {
        console.log("size:", size)
        this.pageSize = size
        // 调用方法, 包含对data数据的修改和调用(调用vue的实例对象), 需要对调用方法绑定作用域
        this.$options.methods.queryByPage.bind(this)()
      },
      handlePageChange(page) {
        console.log("page:", page)
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