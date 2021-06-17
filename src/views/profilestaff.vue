<template>
    <div style="max-width: 99%"> 
        <el-table
            :data="data.filter(data => !search || data.username.toLowerCase().includes(search.toLowerCase()) 
                                    || data.first_name.toLowerCase().includes(search.toLowerCase())
                                    || data.last_name.toLowerCase().includes(search.toLowerCase())
                                    || data.location.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
            <el-table-column
                prop="username"
                :label="$t('username')"
                width="100px"
            >
            </el-table-column>
            <el-table-column
                prop="first_name"
                :label="$t('first_name')"
                v-if="show"
            >
            </el-table-column>
            <el-table-column
                prop="last_name"
                :label="$t('surname')"
                v-if="show"
            >
            </el-table-column>
            <el-table-column
                prop="location"
                :label="$t('address')"
                v-if="show"
              >
            </el-table-column>
            <el-table-column
                prop="birth_date"
                :label="$t('birth_date')"
                sortable
                v-if="show"
               >
            </el-table-column>
            
            <el-table-column>
                <template slot="header" slot-scope="scope">
                    <el-input
                    v-model="search"
                    size="mini"
                    :placeholder="$t('typeToSearch')"/>
                </template>
                <template slot-scope="scope">
                    <!-- <el-button @click="handleClick" type="text" size="small">Detail</el-button> -->
                    <el-button type="warning" size="mini" @click="handleChange(scope.$index, scope.row)">{{$t('change')}}</el-button>
                    <el-button size="mini" type="danger" @click="deleteUser(scope.row)">{{$t('delete')}}</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog
            title=""
            :visible.sync="dialogVisible"
            width="80%"
            >
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item :label="$t('username')" prop="username">
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <!-- <el-form-item label="password" prop="pwd">
                    <el-input v-model="ruleForm.pwd"></el-input>
                </el-form-item> -->

                <el-form-item :label="$t('first_name')" prop="first_name">
                    <el-input v-model="ruleForm.first_name"></el-input>
                </el-form-item>
                <el-form-item :label="$t('surname')" prop="last_name">
                    <el-input v-model="ruleForm.last_name"></el-input>
                </el-form-item>

                <el-form-item prop="birth_date" :label="$t('birth_date')">
                    <el-date-picker type="date" placeholder="Pick a date" v-model="ruleForm.birth_date" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item :label="$t('address')" prop="location">
                    <el-input type="textarea" v-model="ruleForm.location"></el-input>
                </el-form-item>
                <el-form-item :label="$t('id')" prop="device_id">
                    <el-input type="textarea" v-model="ruleForm.device_id"></el-input>
                </el-form-item>
                <el-form-item :label="$t('avatar')">
                    <input type='file' id="avatar" />
                </el-form-item>

                <!-- <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
                    <el-button @click="resetForm('ruleForm')">Reset</el-button>
                </el-form-item> -->
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">{{$t('cancel')}}</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')">{{$t('save')}}</el-button>
            </span>
        </el-dialog>
        
    </div>
</template>


<script>
import moment from 'moment'

export default {
    data(){
        return{
            dialogVisible: false,
            currentId: 0,
            search: '',
            imageUrl: '',
            data: [],
            ruleForm: {
                username: '',
                first_name: '',
                last_name: '',
                birth_date: '',
                location: '',
                pwd: '',
                device_id: ''
            },
            rules: {
                username: [
                    { required: true, message: 'Please input username', trigger: 'blur' },
                    { min: 3, max: 15, message: 'Length should be 4 to 15', trigger: 'blur' }
                ],
                pwd: [
                    { required: true, message: 'Please input password', trigger: 'blur' },
                    { min: 6, max: 15, message: 'Length should be 4 to 15', trigger: 'blur' }
                ],
                first_name: [
                    { required: true, message: 'Please input first name', trigger: 'blur' }
                ],
                last_name: [
                    { required: true, message: 'Please input last name', trigger: 'blur' }
                ],
                birth_date: [
                    { required: true, message: 'Please pick a date' }
                ],
                location: [
                    { required: true, message: 'Please input location', trigger: 'blur' }
                ],
                device_id: [
                     { required: true, message: 'Please input device id', trigger: 'blur' }
                ]
            },
            show: true
        }
    },
    mounted(){
        this.get_users()
        if (window.outerWidth < 600){
            this.show = false
        }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm.birth_date)
            let headers = {"Authorization": "Token " + sessionStorage.getItem('key')}
            let data = new FormData()
            data.append('id', this.currentId)
            data.append('first_name', this.ruleForm.first_name)
            data.append('last_name', this.ruleForm.last_name)
            data.append('username', this.ruleForm.username)
            // data.append('avatar', document.querySelector('#avatar').files[0])
            data.append('birth_date', moment(String(this.ruleForm.birth_date)).format('YYYY-MM-DD'))
            data.append('location', this.ruleForm.location)
            data.append('device_id', this.ruleForm.device_id)
            // data.append('pwd', this.ruleForm.pwd)
            console.log(data)
            axios.post('users/change/', data, {headers})
                .then(r => {
                    console.log(r)
                }, r => {
                    console.log(r)
                })
                this.dialogVisible = !this.dialogVisible
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      get_users(){
          let headers = {"Authorization": "Token " + sessionStorage.getItem('key')}
          axios.get('users/get/', {headers})
            .then(r=>{
                console.log(r.data)
                this.data = r.data
            }, r=> {
                console.log(r)
            })
      },
      handleChange(index, row) {
        // console.log(row);
        this.dialogVisible = !this.dialogVisible
        this.ruleForm = row
        this.currentId = row.id
      },
      handleClose(done) {
        this.$confirm('Are you sure to close this dialog?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      deleteUser(row){
            let headers = {"Authorization": "Token " + sessionStorage.getItem('key')}
            let data = {}
            axios.post('users/delete/'+row.id, data, {headers})
              .then(r=>{
                // console.log(r.data);
                this.$message({
                    message: 'Удалено',
                    type: 'success'
                });
                this.data = this.data.filter(item => item !== row)
            }, r=> {
                console.log(r)
            })
      }
    }
}
</script>

<style scoped>
.demo-ruleForm{
    /* margin-top: 20px; */
}
.avatar-uploader {
    width: 178px;
    margin: 0 0 20px 20px;
    border: 1px dashed #d9d9d9!important;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
.el-dialog__body{
    padding-top: 5px!important;
}
.demo-ruleForm{
    margin: -30px 0;
}
</style>