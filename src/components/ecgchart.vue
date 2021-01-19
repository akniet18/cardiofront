<template>
    <!-- <div id="section" class="fill"></div> -->
    <div style="margin-top: 15px;">
      <section class="section"></section>
      <!-- <canvas id="mycanvas" height="300"></canvas> -->
    </div>
</template>

<script>
import {lightningChart,
            DataPatterns,
            AxisScrollStrategies,
            SolidLine,
            SolidFill,
            ColorHEX,
            AutoCursorModes,
            Themes} from '@arction/lcjs'
import { createSampledDataGenerator } from '@arction/xydata';
// import {SmoothieChart, TimeSeries} from '../../public/ecg';
let lineSeries = null
export default {
  name: 'EcgChart',
  props: ['d'],
  data(){
    this.chart = null
    return{
        data: [
            ],
        xAxisStripLinesArray: [],
        yAxisStripLinesArray: [],
        dps: [],
        dataPointsArray: [],
        k: 1,
        interval: null,
        series: null,
        
    }
  },
  // watch:{
  //     data: function(v){
  //       // lineSeries.add(v)
  //       let old = v[0]
  //       for (let i in v){
  //         this.k+=3
  //         if (Math.abs(v[i]-old) < 10000000){
  //           console.log(v[i]);
  //           this.series.add({x: this.k, y: v[i]})
  //         }
  //       }
  //     }
  // },
  created(){
    // this.getData()
  },
  mounted () {
    // this.getData2()
    this.graf(this.data)
    // this.minterval()
    let socket = new WebSocket("wss://back.cardioservice.com.kz/api/setByte/");
    let self = this
    socket.onopen = function(e) {
      // socket.send("Меня зовут Джон");
      console.log('open')
    };
    socket.onmessage = function(event) {
      // clearInterval(self.interval)
      let d = JSON.parse(event.data)['content']['pointers']['content']['pointers']
      // console.log(d['content']['pointers']['content']['pointers']);
      let p = []
      let old = d[0]
      for (let i=0; i<d.length; i++){
        // p.push(d[i])
          self.k+=1
          if (Math.abs(d[i]-old) < 2000000){
            setTimeout(function(){
              self.series.add({x: self.k, y: d[i]})
            }, 100)
            console.log(d[i]);
          }
      }
      // self.minterval()
      // console.log(self.data)
    };
    socket.onclose = function(event) {
      console.log("close");
    };
    socket.onerror = function(error) {
      console.log(error)
    };

    // var smoothie = new SmoothieChart({
    //     grid: { strokeStyle:'rgb(255, 255, 255)', fillStyle:'rgb(0, 0, 0)',
    //             lineWidth: 0.1, millisPerLine: 50, verticalSections: 10, },
    //     labels: { fillStyle:'rgb(0, 25, 255)' }
    // });
    // smoothie.streamTo(document.getElementById("mycanvas"), 1000);
    // this.line1 = new TimeSeries();
    // for (let i in this.data){
    //   this.line1.append(new Date().getTime(), this.data[i])
    // }
    // smoothie.addTimeSeries(this.line1, { strokeStyle:'rgb(255, 0, 0)',  lineWidth: 1.5 });
    // this.createChart() 
  },
  methods: {
      getData(){
          let self = this
          self.interval = setInterval(function(){
          axios.get('api/setByte/')
            .then(r=>{
                let d = r.data.data
                d = d.substring(1, d.length-1)
                d = d.split(', ')
                let p = []
                for (let i=0; i<d.length; i++){
                    let pp = {x: new Date().getTime(), y: parseInt(d[i])}
                    self.k+=5
                    p.push(pp)
                }
                self.data = p
                console.log(p)
            }, r=>{
                console.log(r)
            })
          }, 1000)
      },
      getData2(){
        $.ajax({
            type: "POST",
            url: "./index.py",
            // data: { param: input },
            success: function(d){
              console.log(d)
            }
        });
      },
      createChart() {
        this.chart = lightningChart().ChartXY({container: "section"})
        this.chart.setAutoCursorMode(AutoCursorModes.disabled)
        this.chart.getDefaultAxisY()
            .setInterval(1000000, 17000000)
            .setScrollStrategy(AxisScrollStrategies.expansion)
        this.chart.getDefaultAxisX()
            .setInterval(0, 800)
            .setScrollStrategy(AxisScrollStrategies.progressive)
        lineSeries = this.chart.addLineSeries({ dataPattern: DataPatterns.horizontalProgressive })
        // Set stroke style of the line
        lineSeries.setStrokeStyle((style) => style.setThickness(3))
        // lineSeries.setMouseInteractions(false)
        // lineSeries.add(data)
       
      },
      graf(p){
        const lcjs = require('@arction/lcjs')
        const {
            lightningChart,
            DataPatterns,
            AxisScrollStrategies,
            SolidLine,
            SolidFill,
            ColorHEX,
            AutoCursorModes,
            Themes,
            emptyLine,
            emptyTick
        } = lcjs

        const chart = lightningChart().ChartXY({
            // theme: Themes.dark 
        }).setTitle('')
        // Add line series to visualize the data received
        this.series = chart.addLineSeries({ dataPattern: DataPatterns.horizontalProgressive })
        // Style the series
        this.series
            .setStrokeStyle(new SolidLine({
                thickness: 2,
                fillStyle: new SolidFill({ color: ColorHEX('#5aafc7') })
            }))
            .setMouseInteractions(false)
        chart.setAutoCursorMode(AutoCursorModes.disabled)
        // Setup view nicely.
        chart.getDefaultAxisY()
            .setTickStrategy("Empty")
            .setStrokeStyle(emptyLine)

        chart.getDefaultAxisX()
            // .setTickStrategy("Empty")
            // .setStrokeStyle(emptyLine)
            .setInterval(0, 500)
            .setScrollStrategy(AxisScrollStrategies.progressive)
        // Create a data generator to supply a continuous stream of data.
        let old = p[0]
        for (let i in p){
          this.k+=3
          if (Math.abs(p[i]-old) < 2000000){
            this.series.add({x: this.k, y: p[i]})  
          }
        }
        
        var asd = document.querySelector('#lcjs-auto-flexbox')
        asd.style.height = "100%"
        let sec = document.querySelector(".section")
        sec.style.height = "100%"
        asd.style.zIndex = "9"
        sec.appendChild(asd)
      },
      minterval(){
        let self = this
        this.interval = setInterval(function(){
          let mmax = self.series.getYMax()
          let mmin = self.series.getYMin()
          if (mmax && mmin){
            // console.log(mmax);
            let data = (mmax + mmin) / 2
            self.k += 2
            self.series.add({x: self.k, y: data})
          }
        }, 200);
      }
  },
  beforeDestroy() {
    // "dispose" should be called when the component is unmounted to free all the resources used by the chart
    // this.chart.dispose()
    clearInterval(this.interval)
  }
}
</script>

<style scoped>
#section{
  margin-top: 25px
}
.fill {
    height: 100%;
  }
#mycanvas{
  width: 100%;
}
</style>