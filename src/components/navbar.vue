<template>
    <div>
        <el-menu default-active="1" 
                class="el-menu-vertical-demo" 
                @select="handleSelect" 
                @open="handleOpen"
                @close="handleClose" :collapse="isCollapse">

        <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ $t('first_nav_item') }}</span>
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-user"></i>
            <span slot="title">{{ $t('second_nav_item') }}</span>
        </el-menu-item>
        <el-menu-item index="3" v-show="is_staff != 'false'">
            <i class="el-icon-plus"></i>
            <span slot="title">{{ $t('third_nav_item') }}</span>
        </el-menu-item>

        <el-menu-item index="4" v-show="is_staff != 'false'">
            <i class="el-icon-s-order"></i>
            <span slot="title">{{ $t('fourth_nav_item') }}</span>
        </el-menu-item>
        
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
        if (window.outerWidth < 600){
            this.isCollapse = true
        }
    },
    methods: {
        handleSelect(key, keyPath){
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
            else if (key == 4){
                this.$router.push({name: "all_users"})  
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
  @media (max-width: 600px) {
      .el-menu--collapse{
          width: 50px!important;
      }
      .el-tooltip{
          padding: 0 15px!important;
      }
  }
</style>