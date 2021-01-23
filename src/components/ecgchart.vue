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
        data: [],
        xAxisStripLinesArray: [],
        yAxisStripLinesArray: [],
        dps: [],
        dataPointsArray: [],
        k: 1,
        interval: null,
        series: null,
        chart: null
        
    }
  },
  // watch:{
  //     data: function(d){
  //       let self = this
  //       // lineSeries.add(v)
  //       let old = d[0]
  //       for (let i in d){
  //           self.series.add({x: d[i]['x'], y: d[i]['y']})
  //           // console.log(self.k);
  //           // let mmax = self.series.getYMax()
  //           // let mmin = self.series.getYMin()
  //           // self.chart.getDefaultAxisY()
  //           //   .setTickStrategy("Empty")
  //           //   .setStrokeStyle(emptyLine)
  //           //   .setInterval(mmin, mmax, true)
  //           //   .setScrollStrategy(AxisScrollStrategies.expansion)
  //       }
  //     }
  // },
  created(){
    // this.getData()
  },
  mounted () {
    // this.getData2()
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
     const {
        createSampledDataGenerator
    } = require('@arction/xydata')
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
        // setTimeout(() => {
          
        // }, 10);
          // if (Math.abs(d[i]-old) < 80000){
          // if (d[i].length > 1){
            // setTimeout(function(){
            self.k+=3
            // }, 50)
            self.series.add({x: self.k, y: d[i]})
            let mmax = self.series.getYMax() + 100000
            let mmin = self.series.getYMin() - 100000
            self.chart.getDefaultAxisY()
              .setTickStrategy("Empty")
              .setStrokeStyle(emptyLine)
              .setInterval(mmin, mmax, true)
              .setScrollStrategy(AxisScrollStrategies.expansion)
            // p.push({x: self.k, y: d[i]})
            console.log(d[i]);
          // }
      }
      // self.data = p
      // self.minterval()
      // console.log(self.data)
    };
    socket.onclose = function(event) {
      console.log("close");
    };
    socket.onerror = function(error) {
      console.log(error)
    };
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

        this.chart = lightningChart().ChartXY({
            // theme: Themes.dark 
        }).setTitle('')
        // Add line series to visualize the data received
        this.series = this.chart.addLineSeries({ dataPattern: DataPatterns.horizontalProgressive })
        // Style the series
        this.series
            .setStrokeStyle(new SolidLine({
                thickness: 2,
                fillStyle: new SolidFill({ color: ColorHEX('#5aafc7') })
            }))
            .setMouseInteractions(false)
        this.chart.setAutoCursorMode(AutoCursorModes.disabled)
        // Setup view nicely.
        // this.chart.getDefaultAxisY()
            // .setTickStrategy("Empty")
            // .setStrokeStyle(emptyLine)
            // .setInterval(16000000, 17000000)
            // .setScrollStrategy(AxisScrollStrategies.progressive)

        this.chart.getDefaultAxisX()
            // .setTickStrategy("Empty")
            // .setStrokeStyle(emptyLine)
            .setInterval(0, 1000, true)
            .setScrollStrategy(AxisScrollStrategies.progressive)
        // Create a data generator to supply a continuous stream of data.

           // Create a data generator to supply a continuous stream of data.
    //        let point=this.data
    // createSampledDataGenerator(point, 1, 10)
    //     .setSamplingFrequency(1)
    //     .setInputData(point)
    //     // .generate()
    //     .setStreamBatchSize(48)
    //     .setStreamInterval(50)
    //     // .setStreamRepeat(true)
    //     .toStream()
    //     .forEach(point => {
    //         // Push the created points to the series.
    //         series.add({ x: point.timestamp, y: point.data.y })
    //     })
        // let old = p[0]
        // for (let i in p){
        //   this.k+=3
        //   if (Math.abs(p[i]-old) < 2000000){
        //     this.series.add({x: this.k, y: p[i]})  
        //   }
        // }
        
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