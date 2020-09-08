<template>
  <div class="home">
    <header>
        <div class="text-white">ECG</div>
        <div class="userDiv">
            <el-avatar shape="square" size="medium" src="https://www.blexar.com/avatar.png" class="ava"></el-avatar>
            <div class="text-white">Akniet</div> 
        </div>
    </header>

    <section>
      <NavBar />
      <router-view></router-view>
      <!-- <Chart /> -->
    </section>

  </div>
</template>

<script>
import NavBar from '../components/navbar'
import Chart from '../components/chart'
export default {
  components:{
    Chart,
    NavBar
  },
  name: 'Home',
  data(){
    return{
      chartdata: [1, 2, 3, 4, 5, 6],
      options: []
    }
  },
  mounted () {
    
  }
}
</script>

<style scoped>
header, .userDiv{
  display: flex;
  align-items: center;
}
header{
  background: #409EFF;
  padding: 10px 20px;
  justify-content: space-between;
}
.text-white{
  color: #fff;
}
.ava{
  margin-right: 8px;
}

section{
  display: grid;
  grid-template-columns: 2fr 10fr;
  grid-gap: 10px;
}
</style>