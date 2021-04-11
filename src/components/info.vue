<template>
    <div class="wrapper">
        <div class="divitems">
            <div class="item" style="height: 100%" v-for="(i, index) in data" :key="index">
                <EcgChart :did="i.device_id"/>
                <div class="info" @click="zoom(1, 'Көшербай Марлен Айдынұлы', '18.04.1997', 'г. Алматы, мкр-н. Айгерим-1, ул. Бенберина 76, кв. 8', '../assets/ava1.jpeg')">
                    <div class="sectionAva">
                        <img :src="i.avatar" alt="">
                    </div>
                    <div class="sectionInfo">
                        <div class="username">{{i.last_name}} {{i.first_name}}</div>
                        <div class="birthdate">{{i.birth_date}}</div>
                        <div class="address">{{i.address}}</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <section >
            <div v-for="(i, index) in data" :key="index" class="info" @click="zoom(1, 'Көшербай Марлен Айдынұлы', '18.04.1997', 'г. Алматы, мкр-н. Айгерим-1, ул. Бенберина 76, кв. 8', '../assets/ava1.jpeg')">
                <div class="sectionAva">
                    <img :src="i.avatar" alt="">
                </div>
                <div class="sectionInfo">
                    <div class="username">{{i.last_name}} {{i.first_name}}</div>
                    <div class="birthdate">{{i.birth_date}}</div>
                    <div class="address">{{i.address}}</div>
                </div>
            </div>
        </section> -->
    </div>
</template>

<script>
import EcgChart from './ecgchart'
export default {
  components: {
      EcgChart
  },
  data(){
    return{
      chartdata: [1, 2, 3, 4, 5, 6],
      options: [],
      data: null
    }
  },
  created(){
      this.data = JSON.parse(localStorage.getItem('checked'))
  },
  mounted () {
    //   console.log(this.data);
      let s = document.querySelector(".section")
      s.style.display = "none"
      let item = document.querySelectorAll('div[class^="item"')
    //   console.log(item);
      let chart = document.querySelectorAll('div[id^="chart"')
      let infod = document.querySelectorAll('div[class^="infod"')
    //   console.log(infod);
      for (let i in item){
          console.log(item[i]);
          item[i].appendChild(chart[i])
          chart[i].appendChild(infod[i])
        //   item[i].style.height = "100%"
          chart[i].style.height = "450px"
          chart[i].querySelector('canvas').style.zIndex = "9999"
      }
  },
  methods: {
    zoom(id, name, bd, location, avatar){
        // this.$router.push({name: "profile_detail", query: {dev_id: id}})
        // window.location.href = '/profile/staff/detail/?dev_id='+id.toString()+"&";
        window.location.href = `/profile/staff/detail/?dev_id=${id}&name=${name}&birth_date=${bd}&location=${location}&avatar=${avatar}`
    },
  }
}
</script>

<style scoped>
.wrapper{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    min-height: 90vh;
    height: auto;
}

section, .divitems{
    position: absolute;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 10px 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    width: 100%;
    height: 120%;
}

section > *:nth-child(1), .divitems> *:nth-child(1){
    -ms-grid-row: 1;
    -ms-grid-column: 1;
}

section > *:nth-child(2),.divitems> *:nth-child(2){
    -ms-grid-row: 1;
    -ms-grid-column: 3;
}

section > *:nth-child(3), .divitems> *:nth-child(3){
    -ms-grid-row: 3;
    -ms-grid-column: 1;
}

section > *:nth-child(4), .divitems> *:nth-child(4){
    -ms-grid-row: 3;
    -ms-grid-column: 3;
}

canvas{
    height: 450px!important;
}
.info{
    /* position: absolute; */
    top: 5px;
    left: 5px;
    background: #202020;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    font-size: 0.9em;
    width: 100%;
    height: 70px;
    color: #fff;
    z-index: 999;
}
.sectionAva img{
    width: 60px;
    height: 60px;
    border-radius: 5px;
}
.sectionAva{
    margin:0 5px;
}
#lcjs-auto-flexbox{
      height: 0!important;
  } 
@media (max-width: 800px) {
   .info{
       font-size: 0.8em;
   }
  
  section, .divitems{
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
    -ms-grid-rows: 1fr 10px 1fr 10px 1fr 10px 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    height: 190vh;
  }
  
}
</style>