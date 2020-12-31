<template>
  
  <div class="root">
    <el-row :gutter="10">
			<el-col :span="12">
				<el-button size="small" @click="handleSatelliteInfoRefresh">刷 新</el-button>	  
        <el-divider direction="vertical"></el-divider>
        <el-button size="small" @click="dlgSatelliteInfoAddVisible = true">新 增</el-button>
			</el-col>
			<el-col :span="12" style="text-align: right;">
        <el-input placeholder="请输入卫星ID" v-model="satelliteId" clearable class="input-with-select">
          <el-button @click="handleSatelliteInfoSearch" slot="append" icon="el-icon-search"></el-button>
        </el-input>
			</el-col>
		</el-row>

    <el-dialog title="新增卫星" :visible.sync="dlgSatelliteInfoAddVisible">
      <el-form :model="infoAdd" :rules="infoRules" ref="infoAdd">
        <el-form-item label="卫星ID" label-width="120px" prop="satelliteId">
          <el-input v-model="infoAdd.satelliteId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="卫星代号" label-width="120px" prop="satelliteName">
          <el-input v-model="infoAdd.satelliteName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="卫星名称" label-width="120px" prop="satelliteText">
          <el-input v-model="infoAdd.satelliteText" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dlgSatelliteInfoAddVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSatelliteInfoAdd('infoAdd')">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="编辑卫星" :visible.sync="dlgSatelliteInfoEditVisible">
      <el-form :model="infoEdit" :rules="infoRules" ref="infoEdit">
        <el-form-item label="卫星ID" label-width="120px" prop="satelliteId">
          <el-input v-model="infoEdit.satelliteId" readonly autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="卫星代号" label-width="120px" prop="satelliteName">
          <el-input v-model="infoEdit.satelliteName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="卫星名称" label-width="120px" prop="satelliteText">
          <el-input v-model="infoEdit.satelliteText" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dlgSatelliteInfoEditVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSatelliteInfoEdit">确 定</el-button>
      </div>
    </el-dialog>

    <el-table :data="infoList" style="width: 100%">
      <el-table-column prop="satelliteId" label="卫星ID"></el-table-column>
      <el-table-column prop="satelliteName" label="卫星代号"></el-table-column>
      <el-table-column prop="satelliteText" label="卫星名称"></el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
          <template slot-scope="scope">
            <el-button @click.native.prevent="handleSatelliteInfoEditVisible(scope.row)" type="text" size="small">编辑</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-popconfirm title="确定删除吗？" @confirm="handleSatelliteInfoDelete(scope.row)">
              <el-button type="text" size="small" slot="reference">删除</el-button>
            </el-popconfirm>
          </template>
      </el-table-column>
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
  //import mock from '../../../mock/satellite_info'
  import { postSatellitesByPage, postSatelliteExist, postSatelliteInsert, delSatelliteDelete, putSatelliteUpdate } from '@/api/api_satellite'
  export default {
    data() {
      return {
        satelliteId: "",
        dlgSatelliteInfoAddVisible: false,
        dlgSatelliteInfoEditVisible: false,
        infoAdd: {
          satelliteId: '',
          satelliteName: '',
          satelliteText: ''
        },
        infoEdit: {
          satelliteId: '',
          satelliteName: '',
          satelliteText: ''
        },
        infoRules: {
          satelliteId: [
            { required: true, message: '请输入卫星ID', trigger: 'blur' },
            { min: 4, max: 4, message: '4位16进制(唯一),如0101', trigger: 'blur' }
          ],
          satelliteName: [
            { required: true, message: '请输入卫星代号', trigger: 'blur' },
            { min: 1, max: 10, message: '英文表示,如GuoW0101', trigger: 'blur' }
          ],
          satelliteText: [
            { required: true, message: '请输入卫星名称', trigger: 'blur' },
            { min: 1, max: 10, message: '中文表示,如国网0101', trigger: 'blur' }
          ]
        },

        infoList: [], 
        total: 0,
        pageSize: 20,
        currentPage: 1
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      queryByPage() {
        const pageSize = this.pageSize
        const currentPage = this.currentPage
        //console.log("pageSize, currentPage:", pageSize, currentPage)
        postSatellitesByPage({ pageSize, currentPage }).then(response => {
			    //console.log(response)
          if (response.code === 200) {
            const page = response.respBody
            this.total = page.total
            this.currentPage = page.currentPage
            this.infoList = page.dataList
          }
		    })
      },

      init() {
        // 调用方法, 包含对data数据的修改和调用(调用vue的实例对象), 需要对调用方法绑定作用域
        this.$options.methods.queryByPage.bind(this)()
      },

      handleSatelliteInfoRefresh() {
        // 调用方法, 包含对data数据的修改和调用(调用vue的实例对象), 需要对调用方法绑定作用域
        this.$options.methods.queryByPage.bind(this)()
      },

      handleSatelliteInfoSearch() {
        const satelliteId = this.satelliteId
        postSatelliteExist({satelliteId}).then(response => {
          const exist = response.respBody
          if (exist) {
            this.$message({
              message: `卫星ID${satelliteId}存在`,
              type: 'success'
            })
          } else {
            this.$message.error(`卫星ID${satelliteId}不存在`)
          }
        })
      },

      handleSatelliteInfoAdd(infoAdd) {
        //console.log(infoAdd)
        this.$refs[infoAdd].validate((valid) => {
          if (valid) {
            const satelliteId = this.infoAdd.satelliteId
            const satelliteName = this.infoAdd.satelliteName
            const satelliteText = this.infoAdd.satelliteText
            postSatelliteInsert({ satelliteId, satelliteName, satelliteText }).then(response => {
              const result = response.respBody
              if (result > 0) {
                this.$message({
                  message: `添加卫星ID${satelliteId}成功`,
                  type: 'success'
                 })
              } else {
                this.$message.error(`添加卫星ID${satelliteId}失败`)
              }
            })
            this.dlgSatelliteInfoAddVisible = false
          } else {
            return false;
          }
        })
      },
      handleSatelliteInfoEditVisible(row) {
        //console.log(row)
        this.infoEdit = row
        this.dlgSatelliteInfoEditVisible = true
      },
      handleSatelliteInfoEdit() {
        const satelliteId = this.infoEdit.satelliteId
        const satelliteName = this.infoEdit.satelliteName
        const satelliteText = this.infoEdit.satelliteText
        putSatelliteUpdate({ satelliteId, satelliteName, satelliteText }).then(response => {
          const result = response.respBody
          if (result > 0) {
            this.$message({
              message: `编辑卫星ID${satelliteId}成功`,
              type: 'success'
            })
          } else {
            this.$message.error(`编辑卫星ID${satelliteId}失败`)
          }
        })
        this.dlgSatelliteInfoEditVisible = false
      },
      handleSatelliteInfoDelete(row) {
        console.log(row)
        const satelliteId = row.satelliteId
        delSatelliteDelete({satelliteId}).then(response => {
          const result = response.respBody
          if (result > 0) {
            this.$message({
              message: '删除成功',
              type: 'success'
            })
          } else {
            this.$message.error('删除失败')
          }
        })
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