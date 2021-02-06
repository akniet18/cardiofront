<template>
    <div class="wrapper">
        <div class="divitems">
            <div class="item item1" ><EcgChart did="1"/></div>
            <div class="item item2" ><EcgChart did="2"/></div>
            <div class="item item3" ><EcgChart did="3"/></div>
            <div class="item item4" ><EcgChart did="4"/></div>
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
import EcgChart from './ecgchart'
import EcgChart2 from './ecgchart2'
export default {
  name: 'Chart',
  components: {
      EcgChart, EcgChart2
  },
  data(){
    return{
      chartdata: [1, 2, 3, 4, 5, 6],
      options: [],
      data: []
    }
  },
  mounted () {
      let s = document.getElementById("lcjs-auto-flexbox")
      s.style.height = "0"
      let canv= document.querySelectorAll("canvas")
     
       
      let item = document.querySelectorAll('div[class^="item"')
      let chart = document.querySelectorAll('div[id^="chart"')
      let infod = document.querySelectorAll('div[class^="infod"')
      console.log(infod);
      for (let i in item){
          item[i].appendChild(chart[i])
          chart[i].appendChild(infod[i])
          item[i].style.height = "100%"
          chart[i].style.height = "100%"
      }
  },
  methods: {
      zoom(id){
          console.log(id)
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
}

section, .divitems{
    position: absolute;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 10px 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: 1fr 10px 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
    width: 100%;
    height: 100%;
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
#lcjs-auto-flexbox{
      height: 0;
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
    height: 150vh;
  }
  
}
</style>