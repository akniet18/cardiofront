<template>
    <div class="wrapper">
        <div>
            <div class="item item1"><EcgChart /></div>
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
        data: [40, 39, 10, 40, 39, 80, 40],
        username: sessionStorage.getItem('username'),
        first_name: sessionStorage.getItem('first_name'),
        last_name: sessionStorage.getItem('last_name'),
        birth_date: sessionStorage.getItem('birth_date'),
        avatar: sessionStorage.getItem('avatar'),
        location: sessionStorage.getItem('location'),
    }
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
      chart() {
        this.data.push(this.data[0])
        this.data.splice(0, 1)
        console.log(this.data)
        this.renderChart({
            labels: [1, 2, 3, 4, 5, 6, 7],
            datasets: [
                {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: this.data,
                borderWidth: 1,
                lineTension: 0,
                }
            ]
        }, {responsive: true, maintainAspectRatio: false})
      }
  }
}
</script>

<style scoped>
.wrapper{
    display: flex;
    position: relative;
    min-height: 90vh;
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 5px; */
}
/* .item {
    position: relative;
} */
section{
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
    width: 100%;
    height: 100%;
}
.info{
    /* position: absolute; */
    top: 5px;
    left: 5px;
    background: #202020;
    display: flex;
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