<template>
    <div class="wrapper">
        <div>
            <div class="item item1"><EcgChart :d="data"/></div>
        </div>
        
        <section>
            <div class="info">
                <div class="sectionAva">
                    <img :src="avatar" alt="">
                </div>
                <div class="sectionInfo">
                    <div class="username">{{last_name}} {{first_name}}</div>
                    <div class="birthdate">{{birth_date}}</div>
                    <div class="address">{{location}}</div>
                </div>
            </div> 
            
        </section>
        
    </div>
</template>

<script>
// import { Line } from 'vue-chartjs'
import EcgChart from './ecgchart'
export default {
  name: 'Chart',
  components: {
      EcgChart
  },
//   extends: Line,
  data(){
    return{
        chartdata: [1, 2, 3, 4, 5, 6],
        options: [],
        data: [],
        username: sessionStorage.getItem('username'),
        first_name: sessionStorage.getItem('first_name'),
        last_name: sessionStorage.getItem('last_name'),
        birth_date: sessionStorage.getItem('birth_date'),
        avatar: sessionStorage.getItem('avatar'),
        location: sessionStorage.getItem('location'),
    }
  },
  created(){
    //   this.getData()
  },
  mounted () {
      var asd = document.querySelector('#lcjs-auto-flexbox')
    //   asd.style.display = "grid"
    //   asd.style.gridTemplateColumns = "1fr 1fr"
    //   asd.style.gridTemplateRows = "1fr 1fr"
      asd.style.zIndex = "99"

      var chart = document.querySelectorAll('div[id^="chart-"]')

    // window.location.reload()
    // setInterval(this.chart, 1000)
   
  },
  methods: {
    getData(){
          axios.get('api/setByte/')
            .then(r=>{
                let d = r.data.data
                d = d.substring(1, d.length-1)
                d = d.split(', ')
                let ddd = []
                for (let i in d){
                    d[i] = parseInt(d[i])
                }
                console.log(d)
                this.data = d
            }, r=>{
                console.log(r)
            })
      }
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