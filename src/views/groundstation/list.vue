<template>
  
  <div class="root">
    <el-row :gutter="10">
		  <el-col :span="12">
			  <el-button size="small" @click="handleGroundStationInfoRefresh">刷 新</el-button>	  
        <el-divider direction="vertical"></el-divider>
        <el-button size="small" @click="dlgGroundStationInfoAddVisible = true">新 增</el-button>
		  </el-col>
		  <el-col :span="12" style="text-align: right;">
        <el-input placeholder="请输入信关站ID" v-model="groundStationId" clearable class="input-with-select">
          <el-button @click="handleGroundStationInfoSearch" slot="append" icon="el-icon-search"></el-button>
        </el-input>
		  </el-col>
	  </el-row>

    <el-dialog title="新增信关站" :visible.sync="dlgGroundStationInfoAddVisible">
      <el-form :model="infoAdd" :rules="infoRules" ref="infoAdd">
        <el-form-item label="信关站ID" label-width="120px" prop="groundStationId">
          <el-input v-model="infoAdd.groundStationId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="信关站代号" label-width="120px" prop="groundStationName">
          <el-input v-model="infoAdd.groundStationName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="信关站名称" label-width="120px" prop="groundStationText">
          <el-input v-model="infoAdd.groundStationText" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地理经度(º)" label-width="120px" prop="groundStationLng">
          <el-input v-model="infoAdd.groundStationLng" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地理纬度(º)" label-width="120px" prop="groundStationLat">
          <el-input v-model="infoAdd.groundStationLat" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地理高度(km)" label-width="120px" prop="groundStationAlt">
          <el-input v-model="infoAdd.groundStationAlt" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dlgGroundStationInfoAddVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleGroundStationInfoAdd('infoAdd')">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="编辑信关站" :visible.sync="dlgGroundStationInfoEditVisible">
      <el-form :model="infoEdit" :rules="infoRules" ref="infoEdit">
        <el-form-item label="信关站ID" label-width="120px" prop="groundStationId">
          <el-input v-model="infoEdit.groundStationId" readonly autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="信关站代号" label-width="120px" prop="groundStationName">
          <el-input v-model="infoEdit.groundStationName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="信关站名称" label-width="120px" prop="groundStationText">
          <el-input v-model="infoEdit.groundStationText" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地理经度(º)" label-width="120px" prop="groundStationLng">
          <el-input v-model="infoEdit.groundStationLng" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地理纬度(º)" label-width="120px" prop="groundStationLat">
          <el-input v-model="infoEdit.groundStationLat" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地理高度(km)" label-width="120px" prop="groundStationAlt">
          <el-input v-model="infoEdit.groundStationAlt" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dlgGroundStationInfoEditVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleGroundStationInfoEdit">确 定</el-button>
      </div>
    </el-dialog>

    <el-table :data="infoList" style="width: 100%">
      <el-table-column prop="groundStationId" label="信关站ID"></el-table-column>
      <el-table-column prop="groundStationName" label="信关站代号"></el-table-column>
      <el-table-column prop="groundStationText" label="信关站名称"></el-table-column>
      <el-table-column prop="groundStationLng" label="地理经度(º)"></el-table-column>
      <el-table-column prop="groundStationLat" label="地理纬度(º)"></el-table-column>
      <el-table-column prop="groundStationAlt" label="地理高度(km)"></el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
          <template slot-scope="scope">
            <el-button @click="handleGroundStationInfoEditVisible(scope.row)" type="text" size="small">编辑</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-popconfirm title="确定删除吗？" @confirm="handleGroundStationInfoDelete(scope.row)">
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
  import mock from '../../../mock/groundstation_info'
  import { postGroundStationsByPage, postGroundStationExist, postGroundStationInsert, delGroundStationDelete, putGroundStationUpdate } from '@/api/api_groundstation'
  export default {
    data() {
      return {
        groundStationId: "",
        dlgGroundStationInfoAddVisible: false,
        dlgGroundStationInfoEditVisible: false,
        infoAdd: {
          groundStationId: '',
          groundStationName: '',
          groundStationText: '',
          groundStationLng: '',
          groundStationLat: '',
          groundStationAlt: ''
        },
        infoEdit: {
          groundStationId: '',
          groundStationName: '',
          groundStationText: '',
          groundStationLng: '',
          groundStationLat: '',
          groundStationAlt: ''
        },
        infoRules: {
          groundStationId: [
            { required: true, message: '请输入信关站ID', trigger: 'blur' },
            { min: 1, max: 8, message: '1-8位16进制(唯一),如1', trigger: 'blur' }
          ],
          groundStationName: [
            { required: true, message: '请输入信关站代号', trigger: 'blur' },
            { min: 1, max: 20, message: '英文表示,如Beijing', trigger: 'blur' }
          ],
          groundStationText: [
            { required: true, message: '请输入信关站名称', trigger: 'blur' },
            { min: 1, max: 20, message: '中文表示,如北京', trigger: 'blur' }
          ],
          groundStationLng: [
            { required: true, message: '请输入信关站经度', trigger: 'blur' },
            { min: 1, max: 10, message: '数字表示,如116.25', trigger: 'blur' }
          ],
          groundStationLat: [
            { required: true, message: '请输入信关站纬度', trigger: 'blur' },
            { min: 1, max: 10, message: '数字表示,如40.07', trigger: 'blur' }
          ],
          groundStationAlt: [
            { required: true, message: '请输入信关站高度', trigger: 'blur' },
            { min: 1, max: 10, message: '数字表示,如0', trigger: 'blur' }
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
        postGroundStationsByPage({ pageSize, currentPage }).then(response => {
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
      handleGroundStationInfoRefresh() {
        // 调用方法, 包含对data数据的修改和调用(调用vue的实例对象), 需要对调用方法绑定作用域
        this.$options.methods.queryByPage.bind(this)()
      },
      handleGroundStationInfoSearch() {
        const groundStationId = this.groundStationId
        postGroundStationExist({groundStationId}).then(response => {
          const exist = response.respBody
          if (exist) {
            this.$message({
              message: `信关站ID${groundStationId}存在`,
              type: 'success'
            })
          } else {
            this.$message.error(`信关站ID${groundStationId}不存在`)
          }
        })
      },
      handleGroundStationInfoAdd(infoAdd) {
        this.$refs[infoAdd].validate((valid) => {
          if (valid) {
            const groundStationId = this.infoAdd.groundStationId
            const groundStationName = this.infoAdd.groundStationName
            const groundStationText = this.infoAdd.groundStationText
            const groundStationLng = this.infoAdd.groundStationLng
            const groundStationLat = this.infoAdd.groundStationLat
            const groundStationAlt = this.infoAdd.groundStationAlt
            postGroundStationInsert({ groundStationId, groundStationName, groundStationText, groundStationLng, groundStationLat, groundStationAlt }).then(response => {
              const result = response.respBody
              if (result > 0) {
                this.$message({
                  message: `添加信关站ID${groundStationId}成功`,
                  type: 'success'
                 })
              } else {
                this.$message.error(`添加信关站ID${groundStationId}失败`)
              }
            })
            this.dlgGroundStationInfoAddVisible = false
          } else {
            return false;
          }
        })
      },

      handleGroundStationInfoEditVisible(row) {
        //console.log(row)
        this.infoEdit = row
        this.dlgGroundStationInfoEditVisible = true
      },
      handleGroundStationInfoEdit() {
        const groundStationId = this.infoEdit.groundStationId
        const groundStationName = this.infoEdit.groundStationName
        const groundStationText = this.infoEdit.groundStationText
        const groundStationLng = this.infoEdit.groundStationLng
        const groundStationLat = this.infoEdit.groundStationLat
        const groundStationAlt = this.infoEdit.groundStationAlt
        putGroundStationUpdate({ groundStationId, groundStationName, groundStationText, groundStationLng, groundStationLat, groundStationAlt }).then(response => {
          const result = response.respBody
          if (result > 0) {
            this.$message({
              message: `编辑信关站ID${groundStationId}成功`,
              type: 'success'
            })
          } else {
            this.$message.error(`编辑信关站ID${groundStationId}失败`)
          }
        })
        this.dlgGroundStationInfoEditVisible = false
      },
      handleGroundStationInfoDelete(row) {
        console.log(row)
        const groundStationId = row.groundStationId
        delGroundStationDelete({groundStationId}).then(response => {
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