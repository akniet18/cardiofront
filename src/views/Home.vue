<template>
  <div class="home">
    <header>
        <div class="text-white">Электрокардиография</div>
        <div class="userDiv">
            <img class="ava" :src="avatar"/>
            <div class="text-white">{{username}}</div> 
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
export default {
  components:{
    NavBar
  },
  name: 'Home',
  data(){
    return{
      chartdata: [1, 2, 3, 4, 5, 6],
      options: [],
      avatar: sessionStorage.getItem('avatar'),
      username: sessionStorage.getItem('username'),
      data: []
    }
  },
  mounted () {
  },
  methods: {
    
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
  width: 35px;
  height: 35px;
  border-radius: 5px;
}

section{
  display: grid;
  grid-template-columns: 2fr 10fr;
  grid-gap: 10px;
  margin-right: 20px;
}
@media (min-width: 900px) {
  section{
    grid-template-columns: 2fr 12fr;
  }
}

</style>