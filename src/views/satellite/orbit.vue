<template>
  <div class="root">

    <el-row :gutter="10">
			<el-col :span="12">
				<el-form ref="elems" :model="elems" :rules="elemRules" class="form" label-width="150px" label-position="left">
          <el-form-item label="卫星ID">
            <div class="search">
              <el-input placeholder="请输入卫星ID" v-model="satelliteId" clearable class="input-with-select">
                <el-button @click="handleSatelliteIdSearch" slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
          </el-form-item>
          <el-form-item label="运行周期" prop="t">
            <el-input v-model="elems.t" class="item"></el-input>
          </el-form-item>
          <el-form-item label="偏心率" prop="e">
            <el-input v-model="elems.e" class="item"></el-input>
          </el-form-item>
          <el-form-item label="轨道倾角" prop="i">
            <el-input v-model="elems.i" class="item"></el-input>
          </el-form-item>
          <el-form-item label="升交点赤经" prop="o">
            <el-input v-model="elems.o" class="item"></el-input>
          </el-form-item>
          <el-form-item label="近地点幅角" prop="w">
            <el-input v-model="elems.w" class="item"></el-input>
          </el-form-item>
          <el-form-item label="平近点角" prop="m">
            <el-input v-model="elems.m" class="item"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button size="small" @click="handleOrbitElemVerify">校  验</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button size="small" type="primary" @click="handleOrbitElemAdd">添  加</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button size="small" type="primary" @click="handleOrbitElemUpdate">更  新</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button size="small" type="primary" @click="handleOrbitElemDelete">删  除</el-button>
          </el-form-item>
        </el-form>
			</el-col>
			<el-col :span="12">
				<el-form ref="tle" :model="tle" class="form" label-width="120px" label-position="left">
          <el-form-item>
            <el-button size="small" @click="handleOrbitElem2Tle">轨道根数转两行根数</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button size="small" @click="handleOrbitTle2Elem">两行根数转轨道根数</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button size="small" @click="handleQueryAll" class="button-right">查询全部两行根数</el-button>
          </el-form-item>
          <el-form-item label="两行根数1">
            <el-input v-model="tle.line1" ></el-input>
          </el-form-item>
          <el-form-item label="两行根数2">
            <el-input v-model="tle.line2" ></el-input>
          </el-form-item>
          <el-form-item label="说明信息">
            <el-input type="textarea" v-model="tle.desc" readonly></el-input>
          </el-form-item>
        </el-form>
			</el-col>
		</el-row>

    <el-dialog title="卫星两行根数列表" :visible.sync="dlgTleVisible">
      <el-table :data="tleList">
        <el-table-column width="80" property="satelliteId" label="卫星ID"></el-table-column>
        <el-table-column width="320" property="tleLine1" label="Line1"></el-table-column>
        <el-table-column width="320" property="tleLine2" label="Line2"></el-table-column>
      </el-table>
    </el-dialog>

  </div>


</template>

<script>
  //import mock from '../../../mock/satellite_orbit'
  import { 
    postOrbitTle, postSatelliteOrbitElem, postOrbitElem2Tle, postOrbitTle2Elem, postOrbitElemVerify, postOrbitElemExist, postOrbitElemInsert, 
    putOrbitElemUpdate,
    delOrbitElem 
  } from '@/api/api_satellite'
  export default {
    data() {

      const floatNumber = (rule, value, callback) => {  //包含小数的数字
        let reg = /^[+-]?(0|([1-9]\d*))(\.\d+)?$/g;
        if (value === '') {
          callback(new Error('请输入内容'));
        } else if (!reg.test(value)) {
          callback(new Error('请输入数字'));
        } else {
          callback();
        }
      }
      const intNumber = (rule, value, callback) => {  //正整数
        let reg = /^[+]{0,1}(\d+)$/g;
        if (value === '') {
          callback(new Error('请输入内容'));
        } else if (!reg.test(value)) {
          callback(new Error('请输入0及0以上的整数'));
        } else {
          callback();
        }
      }

      return {
        satelliteId: "",
        elems: {
          t: 107.263,
          e: 0.0001,
          i: 86.5,
          o: 24,
          w: 124,
          m: 1
        },
        elemRules: {
          t: [
            { required: true, validator: floatNumber, message: '请输入卫星运行周期(单位:分钟);浮点数,如95.28', trigger: 'blur' }
          ],
          e: [
            { required: true, validator: floatNumber, message: '请输入卫星偏心率;浮点数,范围:0,1,如0.0001', trigger: 'blur' }
          ],
          i: [
            { required: true, validator: floatNumber, message: '请输入卫星轨道倾角(单位:º);浮点数,范围:0,180,如86.5', trigger: 'blur' }
          ],
          o: [
            { required: true, validator: floatNumber, message: '请输入卫星升交点赤经(单位:º);浮点数,范围:0,360,如24', trigger: 'blur' }
          ],
          w: [
            { required: true, validator: floatNumber, message: '请输入卫星近地点幅角(单位:º);浮点数,范围:0,360,如124', trigger: 'blur' }
          ],
          m: [
            { required: true, validator: floatNumber, message: '请输入卫星平近点角(单位:º);浮点数,范围:0,360,如217', trigger: 'blur' }
          ]
        },
        dlgTleVisible: false,
        tleList:[],
        tle: {
          line1: '',
          line2: '',
          desc: ''
        }
        
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        this.tle.desc = "Satellite Number: 40930;" + "\n" 
                    + "International Designator: 15052A;" + "\n" 
                    + "Epoch: 1602663007000L(2020-10-14 16:10:07);" + "\n" 
                    + "Element number: 999;" + "\n" 
                    + "Revolution number at epoch (revs): 6796;" + "\n" 
                    + "First Time Derivative of the Mean Motion: .00000876;" + "\n"
                    + "BSTAR drag term (decimal point assumed): .000034425;" + "\n" 
                    + "Classification (U=Unclassified): S"
      },
      querySatelliteTle() {
        const satelliteId = this.satelliteId
        postSatelliteOrbitElem({satelliteId}).then(response => {
          if (response.code === 200) {
            const es = response.respBody
            this.elems.t = es[0]
            this.elems.e = es[1]
            this.elems.i = es[2]
            this.elems.o = es[3]
            this.elems.w = es[4]
            this.elems.m = es[5]

            const elems = this.elems
            postOrbitElem2Tle(elems).then(response => {
              if (response.code === 200) {
                const lines = response.respBody
                this.tle.line1 = lines[1]
                this.tle.line2 = lines[2]
              }
            })
          } else {
            this.$message.error(response.message)
          }
        })

      },

      handleQueryAll() {
        this.dlgTleVisible = true
        postOrbitTle({}).then(response => {
          if (response.code === 200) {
            this.tleList = response.respBody
          }
        })
      },

      handleSatelliteIdSearch() {
        // 调用方法, 包含对data数据的修改和调用(调用vue的实例对象), 需要对调用方法绑定作用域
        this.$options.methods.querySatelliteTle.bind(this)() 
      },
      handleOrbitElem2Tle() {
        const elems = this.elems
        postOrbitElem2Tle(elems).then(response => {
          if (response.code === 200) {
            console.log(response)
            const lines = response.respBody
            this.tle.line1 = lines[1]
            this.tle.line2 = lines[2]
          } else {
            this.$message.error(response.message)
          }
        })
      },

      handleOrbitTle2Elem() {
        const line1 = this.tle.line1
        const line2 = this.tle.line2
        postOrbitTle2Elem({ line1, line2 }).then(response => {
          if (response.code === 200) {
            console.log(response)
            const elems = response.respBody
            this.elems.t = elems[0]
            this.elems.e = elems[1]
            this.elems.i = elems[2]
            this.elems.o = elems[3]
            this.elems.w = elems[4]
            this.elems.m = elems[5]
          } else {
            this.$message.error(response.message)
          }
        })
      },

      handleOrbitElemVerify() {
        const elems = this.elems
        postOrbitElemVerify(elems).then(response => {
          if (response.code === 200) {
            console.log(response)
            const lines = response.respBody
            this.tle.line1 = lines[1]
            this.tle.line2 = lines[2]

            this.$message.success(response.message)
          } else {
            this.$message.error(response.message)
          }
        })
      },
      handleOrbitElemAdd() {
        const satelliteId = this.satelliteId
        this.$confirm('此操作将添加卫星的轨道根数, 是否继续?', '提醒', { 
          confirmButtonText: '确定',  
          cancelButtonText: '取消',  
          type: 'warning' 
        }).then(() => {            
          //点击确定的操作(调用接口)  
          const t = this.elems.t
          const e = this.elems.e
          const i = this.elems.i
          const o = this.elems.o
          const w = this.elems.w
          const m = this.elems.m
          postOrbitElemInsert({satelliteId, t, e, i, o, w, m }).then(response => {
            if (response.code === 200) {
              this.$message.success(response.message)
              // 调用方法, 包含对data数据的修改和调用(调用vue的实例对象), 需要对调用方法绑定作用域
              this.$options.methods.querySatelliteTle.bind(this)() 
            } else {
              this.$message.error(response.message)
            }
          })
        
        }).catch(() => {           
         //点击取消的提醒          
        })

      },
      handleOrbitElemUpdate() {
        const satelliteId = this.satelliteId
        this.$confirm('此操作将更新卫星的轨道根数, 是否继续?', '提醒', { 
          confirmButtonText: '确定',  
          cancelButtonText: '取消',  
          type: 'warning' 
        }).then(() => {            
          //点击确定的操作(调用接口)  
          const t = this.elems.t
          const e = this.elems.e
          const i = this.elems.i
          const o = this.elems.o
          const w = this.elems.w
          const m = this.elems.m
          putOrbitElemUpdate({satelliteId, t, e, i, o, w, m }).then(response => {
            if (response.code === 200) {
              console.log(response)
              this.$message.success(response.message)
              return true
            } else {
              this.$message.error(response.message)
            }
            return false
          }).then(result => {
            if (result) {
              // 调用方法, 包含对data数据的修改和调用(调用vue的实例对象), 需要对调用方法绑定作用域
              this.$options.methods.querySatelliteTle.bind(this)() 
            }
          })
        }).catch(() => {           
         //点击取消的提醒          
        })

      },
      handleOrbitElemDelete() {
        const satelliteId = this.satelliteId
        this.$confirm('此操作将删除卫星的轨道根数, 是否继续?', '提醒', { 
          confirmButtonText: '确定',  
          cancelButtonText: '取消',  
          type: 'warning' 
        }).then(() => {            
          //点击确定的操作(调用接口)  
          delOrbitElem({satelliteId}).then(response => {
            console.log(response)
            if (response.code === 200) {
              this.$message.success(response.message)
            } else {
              this.$message.error(response.message)
            }
        })
        }).catch(() => {           
         //点击取消的提醒          
        })
      }


    }
  }
</script>

<style scoped>
.search {
  width: 60%;
  /* margin-left: 50%; */
}
.form {
  margin-top: 20px;
}
.item {
  width: 60%;
}
.button-right{
  margin-left: 90px;
}
</style>