<template>
    <div class="wrapper">
        <div class="item" style="height: 100%" >
            <EcgChart :did="dev_id" :userinfo="userinfo"/>
            <div class="info">
                <div class="sectionAva">
                    <img :src="avatar" alt="">
                </div>
                <div class="sectionInfo">
                    <div class="username">{{last_name}} {{first_name}}</div>
                    <div class="birthdate">{{birth_date}}</div>
                    <div class="address" v-if="location != 'undefined'">{{location}}</div>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
import EcgChart from './ecgchart'
export default {
  name: 'Chart',
  components: {
      EcgChart
  },
  data(){
    return{
        dev_id: sessionStorage.getItem('did'),
        chartdata: [1, 2, 3, 4, 5, 6],
        options: [],
        data: [],
        username: sessionStorage.getItem('username'),
        first_name: sessionStorage.getItem('first_name'),
        last_name: sessionStorage.getItem('last_name'),
        birth_date: sessionStorage.getItem('birth_date'),
        avatar: sessionStorage.getItem('avatar'),
        location: sessionStorage.getItem('location'),
        userinfo: {}
    }
  },
  created(){
    this.dev_id = sessionStorage.getItem('did')
    console.log(this.dev_id,sessionStorage.getItem('did'));
  },
  mounted () {
      this.userinfo = {
        'last_name': this.last_name,
        'first_name': this.first_name,
        'birth_date': this.birth_date,
      }
      let s = document.querySelector(".section")
        s.style.display = "none"
        let item = document.querySelectorAll('div[class^="item"')
        let chart = document.querySelectorAll('div[id^="chart"')
        for (let i in item){
            item[i].appendChild(chart[i])
            chart[i].style.height = "450px"
            chart[i].querySelector('canvas').style.zIndex = "99"
        }
  },
}
</script>

<style scoped>
.wrapper{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    min-height: 90vh;
    display: -ms-grid;
    display: grid;
}
.item {
    position: relative;
    height: 450px
}
section{
    position: absolute;
    grid-gap: 10px;
    width: 100%;
    height: 100%;
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
</style>