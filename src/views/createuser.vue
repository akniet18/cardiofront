<template>
    <div class="section">  
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
            <el-form-item label="username" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="Пароль" prop="pwd">
                <el-input v-model="ruleForm.pwd"></el-input>
            </el-form-item>

            <el-form-item label="Имя" prop="first_name">
                <el-input v-model="ruleForm.first_name"></el-input>
            </el-form-item>
            <el-form-item label="Фамилия" prop="last_name">
                <el-input v-model="ruleForm.last_name"></el-input>
            </el-form-item>

            <el-form-item prop="date1" label="Дата рождения">
                <el-date-picker type="date" placeholder="Pick a date" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="Адрес" prop="location">
                <el-input type="textarea" v-model="ruleForm.location"></el-input>
            </el-form-item>
            <el-form-item label="Аватар">
                <input type='file' id="avatar" />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
                <el-button @click="resetForm('ruleForm')">Reset</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    data(){
        return{
            imageUrl: '',
            ruleForm: {
                username: '',
                first_name: '',
                last_name: '',
                date1: '',
                location: '',
                pwd: ''
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
                date1: [
                    { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
                ],
                location: [
                    { required: true, message: 'Please input location', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let headers = {"Authorization": "Token " + sessionStorage.getItem('key')}
            let data = new FormData()
            data.append('first_name', this.ruleForm.first_name)
            data.append('last_name', this.ruleForm.last_name)
            data.append('username', this.ruleForm.username)
            data.append('avatar', document.querySelector('#avatar').files[0])
            data.append('birth_date', moment(String(this.ruleForm.date1)).format('YYYY-MM-DD'))
            data.append('location', this.ruleForm.location)
            data.append('pwd', this.ruleForm.pwd)
            axios.post('users/create/', data, {headers})
                .then(r => {
                    console.log(r)
                }, r => {
                    console.log(r)
                })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    }
}
</script>

<style scoped>
.section{
    width: 100%;
    overflow: hidden;
}
.demo-ruleForm{
    margin-top: 20px;
    margin-left: 10px;
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

</style>