<template>
    <div>
        <el-menu default-active="1" 
                class="el-menu-vertical-demo" 
                @select="handleSelect" 
                @open="handleOpen"
                @close="handleClose" :collapse="isCollapse">
        <!-- <el-submenu index="5">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">Navigator One</span>
            </template>
            <el-menu-item-group>
                <span slot="title">Group One</span>
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
                <el-submenu index="1-4">
                <span slot="title">item four</span>
                <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-submenu>
        </el-submenu> -->
        <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">Электрокардиографии</span>
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">Пользователи</span>
        </el-menu-item>
        <el-menu-item index="3" v-show="is_staff != 'false'">
            <i class="el-icon-menu"></i>
            <span slot="title">Добавить пользователя</span>
        </el-menu-item>
        
        <!-- <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">Navigator Four</span>
        </el-menu-item> -->
        </el-menu>
        
    </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false,
        is_staff: sessionStorage.getItem('is_staff', false)
      };
    },
    mounted(){
        this.is_staff = sessionStorage.getItem('is_staff', false)
    },
    methods: {
        handleSelect(key, keyPath){
            console.log(this.is_staff)
            if (key == 1){
                if (sessionStorage.getItem('is_staff') == "true"){
                    window.location.href = '/home/staff';
                }else{
                    window.location.href = '/home/';
                }
            }
            else if (key == 2){
                if (sessionStorage.getItem('is_staff') == "true"){
                    this.$router.push({name: "profile_staff"})
                }else{
                    this.$router.push({name: "profile"})
                }
            }
            else if (key == 3){
                this.$router.push({name: "create_user"})  
            }
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
  }
</script>


<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    /* width: 220px; */
    min-height: 100vh;
  }
</style>