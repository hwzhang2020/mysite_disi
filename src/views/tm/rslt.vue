<template>
  <div class="root">
    
    <el-row :gutter="10">
      <el-col :span="18">
        <el-button size="small" @click="dlgTmRsltAddVisible = true">新 增</el-button>
			</el-col>
      <el-col :span="6" style="text-align: right;">
				<el-input placeholder="请输入卫星ID" v-model="satelliteid" clearable class="input-with-select">
          <el-button @click="handleTmRsltQuery" slot="append" icon="el-icon-search"></el-button>
        </el-input>
			</el-col>
		</el-row>

    <el-dialog title="新增参数" :visible.sync="dlgTmRsltAddVisible">
      <el-form :model="rsltAdd" :rules="rsltRules" ref="rsltAdd">
        <el-form-item label="参数代号" label-width="120px" prop="codeName">
          <el-input size="small" v-model="rsltAdd.codeName" autocomplete="off" style="width: 360px"></el-input>
        </el-form-item>
        <el-form-item label="参数名称" label-width="120px" prop="name">
          <el-input size="small" v-model="rsltAdd.name" autocomplete="off" style="width: 360px"></el-input>
        </el-form-item>
        <el-form-item label="参数ID" label-width="120px" prop="id">
          <el-input-number size="small" controls-position="right" v-model="rsltAdd.id" autocomplete="off" style="width: 360px"></el-input-number>
        </el-form-item>
        <el-form-item label="源码类型" label-width="120px" prop="srcType">
          <el-select v-model="rsltAdd.srcType" style="width: 360px">
            <el-option
              v-for="item in srcTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            ></el-option>  
          </el-select>
        </el-form-item>
        <el-form-item label="结果类型" label-width="120px" prop="rsltType">
           <el-select v-model="rsltAdd.rsltType" style="width: 360px">
            <el-option
              v-for="item in rsltTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            ></el-option>  
          </el-select>
        </el-form-item>
        <el-form-item label="波道" label-width="120px" prop="bd">
          <el-input size="small" v-model="rsltAdd.bd" autocomplete="off" style="width: 360px"></el-input>
        </el-form-item>
        <el-form-item label="波道字节" label-width="120px" prop="bitRange">
          <el-input size="small" v-model="rsltAdd.bitRange" autocomplete="off" style="width: 360px"></el-input>
        </el-form-item>
        <el-form-item label="字节序" label-width="120px" prop="byteOrder">
          <el-input size="small" v-model="rsltAdd.byteOrder" autocomplete="off" style="width: 360px"></el-input>
        </el-form-item>
        <el-form-item label="系数" label-width="120px" prop="coefficient">
          <el-input size="small" v-model="rsltAdd.coefficient" autocomplete="off" style="width: 360px"></el-input>
        </el-form-item>
        <el-form-item label="公式" label-width="120px" prop="algorithm">
          <el-input size="small" v-model="rsltAdd.algorithm" autocomplete="off" style="width: 360px"></el-input>
        </el-form-item>
        <el-form-item label="有效范围" label-width="120px" prop="range">
          <el-input size="small" v-model="rsltAdd.range" autocomplete="off" style="width: 360px"></el-input>
        </el-form-item>
        <el-form-item label="前置条件" label-width="120px" prop="preCondition">
          <el-input size="small" v-model="rsltAdd.preCondition" autocomplete="off" style="width: 360px"></el-input>
        </el-form-item>
        <el-form-item label="有效帧计数" label-width="120px" prop="validFrameCnt">
          <el-input size="small" v-model="rsltAdd.validFrameCnt" autocomplete="off" style="width: 360px"></el-input>
        </el-form-item>
        <el-form-item label="帧ID" label-width="120px" prop="frameId">
          <el-input-number size="small" controls-position="right" v-model="rsltAdd.frameId" autocomplete="off" style="width: 360px"></el-input-number>
        </el-form-item>
        <el-form-item label="分系统ID" label-width="120px" prop="subsystemId">
          <el-input-number size="small" controls-position="right" v-model="rsltAdd.subsystemId" autocomplete="off" style="width: 360px"></el-input-number>
        </el-form-item>
        <el-form-item label="任务ID" label-width="120px" prop="objId">
          <el-input-number size="small" controls-position="right" v-model="rsltAdd.objId" autocomplete="off" style="width: 360px"></el-input-number>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="dlgTmRsltAddVisible = false">取 消</el-button>
        <el-button size="small" type="primary" @click="handleTmRsltAdd(rsltAdd)">确 定</el-button>
      </div>
    </el-dialog>

    <el-table :data="rsltList" style="width: 100%">
      <el-table-column prop="codeName" label="参数代号" fixed width="160">
        <template slot-scope="scope">
          <el-input :disabled="isEdit[scope.$index].a" size="small" v-model="scope.row.codeName"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="参数名称" fixed width="200">
        <template slot-scope="scope">
          <el-input :disabled="isEdit[scope.$index].a" size="small" v-model="scope.row.name"></el-input>
        </template></el-table-column>
      <el-table-column prop="id" label="参数ID" fixed width="160">
        <template slot-scope="scope">
          <el-input-number disabled size="small" controls-position="right" v-model="scope.row.id"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column prop="srcType" label="源码类型" width="100">
        <template slot-scope="scope">
          <el-select :disabled="isEdit[scope.$index].a" v-model="scope.row.srcType">
            <el-option
              v-for="item in srcTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            ></el-option>  
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="rsltType" label="结果类型" width="100">
        <template slot-scope="scope">
          <el-select :disabled="isEdit[scope.$index].a" v-model="scope.row.rsltType">
            <el-option
              v-for="item in rsltTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            ></el-option>  
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="bd" label="波道" width="160">
        <template slot-scope="scope">
          <el-input :disabled="isEdit[scope.$index].a" size="small" v-model="scope.row.bd"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="bitRange" label="波道字节" width="120">
        <template slot-scope="scope">
          <el-input :disabled="isEdit[scope.$index].a" size="small" v-model="scope.row.bitRange"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="byteOrder" label="字节序" width="100">
        <template slot-scope="scope">
          <el-input :disabled="isEdit[scope.$index].a" size="small" v-model="scope.row.byteOrder"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="coefficient" label="系数" width="100">
        <template slot-scope="scope">
          <el-input :disabled="isEdit[scope.$index].a" size="small" v-model="scope.row.coefficient"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="algorithm" label="公式" width="200">
        <template slot-scope="scope">
          <el-input :disabled="isEdit[scope.$index].a" size="small" v-model="scope.row.algorithm"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="range" label="有效范围" width="160">
        <template slot-scope="scope">
          <el-input :disabled="isEdit[scope.$index].a" size="small" v-model="scope.row.range"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="preCondition" label="前置条件" width="160">
        <template slot-scope="scope">
          <el-input :disabled="isEdit[scope.$index].a" size="small" v-model="scope.row.preCondition"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="validFrameCnt" label="有效帧计数" width="120">
        <template slot-scope="scope">
          <el-input :disabled="isEdit[scope.$index].a" size="small" v-model="scope.row.validFrameCnt"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="frameId" label="帧ID" width="160">
        <template slot-scope="scope">
          <el-input-number :disabled="isEdit[scope.$index].a" size="small" controls-position="right" v-model="scope.row.frameId"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column prop="subsystemId" label="分系统ID" width="160">
        <template slot-scope="scope">
          <el-input-number :disabled="isEdit[scope.$index].a" size="small" controls-position="right" v-model="scope.row.subsystemId"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column prop="objId" label="任务ID" width="160">
        <template slot-scope="scope">
          <el-input-number :disabled="isEdit[scope.$index].a" size="small" controls-position="right" v-model="scope.row.objId"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleRsltEdit(scope.$index, scope.row)">编辑</el-button>
          <el-divider direction="vertical"></el-divider>
          <el-button type="text" size="small" @click="handleRsltSave(scope.$index, scope.row)">保存</el-button>
          <el-divider direction="vertical"></el-divider>
          <el-popconfirm title="确定删除吗？" @confirm="handleRsltDelete(scope.$index, scope.row)">
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
  import { postTmRsltsByPage, postTmRsltAdd, putTmRsltUpdate, delTmRslt } from '@/api/api_tm'

  export default {
    data() {
      return {
        satelliteid: "",
        dlgTmRsltAddVisible: false,
        rsltAdd: {
          codeName: '',
          name: '',
          id: '',
          srcType: '',
          rsltType: '',
          bd: '',
          bitRange: '',
          byteOrder: '0',
          coefficient: '',
          algorithm: '',
          range: '',
          preCondition: '',
          validFrameCnt: '',
          frameId: '1',
          subsystemId: '1',
          objId: '1'
        },
        rsltRules: {
          codeName: [
            { required: true, message: '请输入参数代号', trigger: 'blur' },
            { min: 1, max: 50, message: '英文表示,如TM01', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入参数名称', trigger: 'blur' },
            { min: 1, max: 100, message: '中文表示,如遥测参数01', trigger: 'blur' }
          ],
          id: [
            { required: true, message: '请输入参数ID', trigger: 'blur' }
          ],
          srcType: [
            { required: true, message: '请选择源码类型', trigger: 'blur' }
          ],
          rsltType: [
            { required: true, message: '请选择结果类型', trigger: 'blur' }
          ],
          bd: [
            { required: true, message: '请输入参数波道', trigger: 'blur' },
            { min: 1, max: 10, message: '以数字或[开头,如[2-5]', trigger: 'blur' }
          ],
          frameId: [
            { required: true, message: '请输入帧ID,默认为1', trigger: 'blur' }
          ],
          subsystemId: [
            { required: true, message: '请输入分系统ID,默认为1', trigger: 'blur' }
          ],
          objId: [
            { required: true, message: '请输入任务ID,默认为1', trigger: 'blur' }
          ]},

        rsltList: [],
        srcTypes: [{
          value: "uc",
          label: "uc"
        },{
          value: "sc",
          label: "sc"
        },{
          value: "us",
          label: "us"
        },{
          value: "ss",
          label: "ss"
        },{
          value: "ui",
          label: "ui"
        },{
          value: "si",
          label: "si"
        },{
          value: "ul",
          label: "ul"
        },{
          value: "sl",
          label: "sl"
        },{
          value: "f32",
          label: "f32"
        },{
          value: "f64",
          label: "f64"
        }],
        rsltTypes: [{
          value: "uc",
          label: "uc"
        },{
          value: "sc",
          label: "sc"
        },{
          value: "us",
          label: "us"
        },{
          value: "ss",
          label: "ss"
        },{
          value: "ui",
          label: "ui"
        },{
          value: "si",
          label: "si"
        },{
          value: "ul",
          label: "ul"
        },{
          value: "sl",
          label: "sl"
        },{
          value: "f32",
          label: "f32"
        },{
          value: "f64",
          label: "f64"
        }],

        isEdit: [],

        total: 0,
        pageSize: 20,
        currentPage: 1
      }
    },
    mounted() {
    },
    methods: {
      queryByPage() {
        const satelliteId = this.satelliteid

        const pageSize = this.pageSize
        const currentPage = this.currentPage
        postTmRsltsByPage({ satelliteId, pageSize, currentPage }).then(response => {
			    console.log(response)
          if (response.code === 200) {
            const page = response.respBody
            this.total = page.total
            this.currentPage = page.currentPage
            this.rsltList = page.dataList

            for (let i in this.rsltList) {
              let a = "edit" + i
              this.isEdit.push({
                a:true
              })
            }
          } else {
            this.$message.error(response.message)
          }
		    })
      },

      handleTmRsltQuery() {
        // 调用方法, 包含对data数据的修改和调用(调用vue的实例对象), 需要对调用方法绑定作用域
        this.$options.methods.queryByPage.bind(this)() 
      },

      handleTmRsltAdd(rslt) {
        this.$refs['rsltAdd'].validate((valid) => {
          if(valid) {
            console.log(rslt)
            const satelliteId = this.satelliteid
            postTmRsltAdd({satelliteId, rslt}).then(response => {
              if (response.code === 200) {
                const result = response.respBody
                if (result > 0) {
                  this.$message({
                    message: `添加遥测参数ID${rslt.id}成功`,
                    type: 'success'
                  })
                } else {
                  this.$message.error(`添加遥测参数ID${rslt.id}失败`)
                }
              } else {
                this.$message.error(response.message)
              }
            })

            this.dlgTmRsltAddVisible = false
          } else {
            //this.$message({
            //  message: '数据存在错误',
            //  type: 'warning'
            //});
            return false
          }
        })
      },

      handleRsltEdit(index, row) {
        this.isEdit[index].a = false   
        console.log(index, row)     
      },
      handleRsltSave(index, row) {
        this.isEdit[index].a = true 
        console.log(index, row) 
        const satelliteId = this.satelliteid
        
        putTmRsltUpdate({satelliteId, row}).then(response => {
          if (response.code === 200) {
            // 调用方法, 包含对data数据的修改和调用(调用vue的实例对象), 需要对调用方法绑定作用域
            this.$options.methods.queryByPage.bind(this)() 
          } else {
            this.$message.error(response.message)
          }
        })
      },
      handleRsltDelete(index, row) {
        console.log(index, row)
        const satelliteId = this.satelliteid
        const id = row.id
        delTmRslt({satelliteId, id}).then(response => {
          if (response.code === 200) {
            // 调用方法, 包含对data数据的修改和调用(调用vue的实例对象), 需要对调用方法绑定作用域
            this.$options.methods.queryByPage.bind(this)() 
          } else {
            this.$message.error(response.message)
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