<template>
    <div class="wrapper">
        <div>
            <div class="item item1" ><EcgChart /></div>
            <div class="item item2" ><EcgChart2 /></div>
            <div class="item item3" ><EcgChart2 /></div>
            <div class="item item4" ><EcgChart2 /></div>
        </div>
        
        <section>
            <div class="info" @click="zoom(1)">
                <div class="sectionAva">
                    <img src="../assets/ava1.jpeg" alt="">
                </div>
                <div class="sectionInfo">
                    <div class="username">Көшербай Марлен Айдынұлы </div>
                    <div class="birthdate">18.04.1997</div>
                    <div class="address">г. Алматы, мкр-н. Айгерим-1, ул. Бенберина 76, кв. 8</div>
                </div>
            </div> 
            <div class="info" @click="zoom(2)">
                <div class="sectionAva">
                    <img src="../assets/ava2.jpeg" alt="">
                </div>
                <div class="sectionInfo">
                    <div class="username">Шылмырза Үсен Жұманұлы</div>
                    <div class="birthdate">16.09.1997</div>
                    <div class="address">г.Алматы, Ауэзовский р-н, мкр.11, ул.Шаляпина дом 14, кв 10</div>
                </div>
            </div> 
            <div class="info" @click="zoom(3)">
                <div class="sectionAva">
                    <img src="../assets/ava3.jpeg" alt="">
                </div>
                <div class="sectionInfo">
                    <div class="username">Игембай Ерболат Айдынұлы</div>
                    <div class="birthdate">04.07.1996г</div>
                    <div class="address">Алматы обл, Еңбекшіқазақ ауд, Түрген ауылы, Жүнісбай 11</div>
                </div>
            </div> 
            <div class="info" @click="zoom(4)">
                <div class="sectionAva">
                    <img src="../assets/ava4.jpeg" alt="">
                </div>
                <div class="sectionInfo">
                    <div class="username">Сейткасымов Турар</div>
                    <div class="birthdate">09.07.1997</div>
                    <div class="address">Г. Алматы Жетысуский р-н. ул. Леваневского 3</div>
                </div>
            </div> 
        </section>
        
    </div>
</template>

<script>
// import { Line } from 'vue-chartjs'
import EcgChart from './ecgchart'
import EcgChart2 from './ecgchart2'
export default {
  name: 'Chart',
  components: {
      EcgChart, EcgChart2
  },
//   extends: Line,
  data(){
    return{
      chartdata: [1, 2, 3, 4, 5, 6],
      options: [],
      data: [40, 39, 10, 40, 39, 80, 40]
    }
  },
  mounted () {
      var asd = document.querySelector('#lcjs-auto-flexbox')
      asd.style.display = "grid"
      asd.style.gridTemplateColumns = "1fr 1fr"
      asd.style.gridTemplateRows = "1fr 1fr"
      asd.style.gridGap = "10px"
      asd.style.zIndex = "99"

      var chart = document.querySelectorAll('div[id^="chart-"]')
    //   var info = document.querySelector(".info")
    //   console.log(chart)
      for (let i in chart){
          chart[i].style.marginTop = "20px"
        //   chart[i].style.postion = "relative"
      }
    // window.location.reload()
    // setInterval(this.chart, 1000)
   
  },
  methods: {
      zoom(id){
          console.log(id)
        //   var chart = document.querySelector(`#chart-${id}`)
        //   chart.style.display
      },
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
.item{
    z-index: 999;
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
    z-index: 99;
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