<template>
    <div>
        <el-form class="demo-ruleForm">
            <div class="avap">
                <el-avatar shape="square" :src="ruleForm.avatar"></el-avatar>
            </div>
            <el-form-item :label="$t('username')" prop="username">
                <el-input disabled v-model="ruleForm.username"></el-input>
            </el-form-item>

            <el-form-item :label="$t('first_name')" prop="first_name">
                <el-input disabled v-model="ruleForm.first_name"></el-input>
            </el-form-item>
            <el-form-item :label="$t('surname')" prop="last_name">
                <el-input disabled v-model="ruleForm.last_name"></el-input>
            </el-form-item>

            <el-form-item prop="date1" :label="$t('birth_date')">
                <el-date-picker disabled type="date" placeholder="Pick a date" v-model="ruleForm.birth_date" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item :label="$t('address')" prop="location">
                <el-input disabled type="textarea" v-model="ruleForm.location"></el-input>
            </el-form-item>
            <!-- <el-form-item label="avatar">
                <input type='file' id="avatar" />
            </el-form-item> -->

            <!-- <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
                <el-button @click="resetForm('ruleForm')">Reset</el-button>
            </el-form-item> -->
        </el-form>
    </div>
</template>

<script>
export default {
    data () {
        return{
            ruleForm:{
                username: sessionStorage.getItem('username'),
                first_name: sessionStorage.getItem('first_name'),
                last_name: sessionStorage.getItem('last_name'),
                birth_date: sessionStorage.getItem('birth_date'),
                avatar: sessionStorage.getItem('avatar'),
                location: sessionStorage.getItem('location'),
                // avatar: sessionStorage.getItem('username'),
            }
        }
    }
    
}
</script>

<style>
.avap .el-avatar>img{
    width: 100%;
}
.avap{
    margin: 20px;
}
.demo-ruleForm{
    margin-left: 10px;
}
</style>