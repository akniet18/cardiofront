<template>
  <div class="home">
    <header>
        <div class="text-white" @click="logout"><div><img class="logo" src="../assets/hart-removebg-preview.png" alt=""> </div></div>
        <div class="userDiv">
            <img class="ava" :src="avatar"/>
            <div class="text-white">{{username}}</div> 
            <div class="logout" @click="logout">Выйти</div>
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
import { BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue'

export default {
  components:{
    NavBar, BIcon,
    BIconArrowUp,
    BIconArrowDown
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
    logout(){
      sessionStorage.removeItem('key')
      this.$router.push({name: "base"})
    }
  }
}
</script>

<style scoped>
header, .userDiv{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.logo{
    width: 70px;
    height: 50px;
    cursor: pointer;
}
header{
  background: #409EFF;
  padding: 5px 25px;
  width: calc(100% - 50px);
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.text-white{
  color: #fff;
}
.ava{
  margin-right: 2px;
  width: 35px;
  height: 35px;
  border-radius: 5px;
}

section{
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 2fr 10px 10fr;
  grid-template-columns: 2fr 10fr;
  grid-gap: 10px;
  margin-right: 10px;
  /* height: auto; */
}
.logout{
  color: #fff;
  margin-left: 15px;
  cursor: pointer;
}

/* @media (min-width: 900px) {
  section{
    -ms-grid-columns: 2fr 10px 12fr;
    grid-template-columns: 2fr 12fr;
  }
} */
@media (max-width: 600px) {
  section{
    -ms-grid-columns: 50px 5px 13.5fr;
    grid-template-columns: 50px 13.5fr;
    margin-right: 5px;
  }
  .logo{
    width: 50px;
    height: 40px;
  }
}
</style>