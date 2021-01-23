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
          16574982,
16575025,
16574975,
16574975,
16574875,
16574831,
16574840,
16574890,
16574890,
16574992,
16574960,
16574884,
16574945,
16574945,
16574921,
16574860,
16574829,
16574830,
16574830,
16574822,
16574893,
16574886,
16574865,
16574865,
16574904,
16574883,
16574772,
16574811,
16574811,
16574864,
16574845,
16574813,
16574830,
16574830,
16574834,
16574829,
16574851,
16574843,
16574843,
16574857,
16574827,
16574777,
16574805,
16574805,
16574748,
16574737,
16574793,
16574890,
16574890,
16574857,
16574873,
16574784,
16574837,
16574837,
16574792,
16574697,
16574722,
16574753,
16574753,
16574765,
16574784,
16574827,
16574833,
16574833,
16574847,
16574884,
16574857,
16574822,
16574822,
16574793,
16574765,
16574709,
16574722,
16574722,
16574701,
16574684,
16574652,
16574699,
16574699,
16574789,
16574831,
16574792,
16574557,
16574557,
16574390,
16574379,
16574305,
16574469,
16574469,
16574589,
16574625,
16574554,
16574634,
16574634,
16574954,
16575202,
16575534,
16575739,
16575739,
16575593,
16575480,
16575342,
16575164,
16575164,
16575070,
16575065,
16575115,
16575209,
16575209,
16575102,
16574945,
16574922,
16574838,
16574838,
16574854,
16574775,
16574672,
16574748,
16574748,
16574734,
16574795,
16574835,
16574795,
16574795,
16574853,
16574853,
16574952,
16574852,
16574852,
16574849,
16574816,
16574836,
16574861,
16574861,
16574865,
16574929,
16574942,
16574880,
16574880,
16574897,
16574842,
16574848,
16574774,
16574774,
16574851,
16574945,
16575124,
16578397,
16578397,
16579858,
16581483,
16583428,
16584203,
16584203,
16581788,
16578102,
16573292,
16573292,
16573292,
16573292,
16573292,
16573292,
16573292,
16573292,
16573292,
16573292,
16573292,
16573292,
16573292,
16573292,
16573292,
16573292,
16566303,
16566303,
16568072,
16568717,
16569452,
16571721,
16571721,
16572702,
16573731,
16574460,
16575170,
16575170,
16575667,
16575992,
16576289,
16576711,
16576711,
16576869,
16577095,
16577224,
16577456,
16577456,
16577579,
16577767,
16577954,
16578167,
16578167,
16578259,
16578358,
16578442,
16578632,
16578632,
16578779,
16578875,
16578994,
16579162,
16579162,
16579274,
16579382,
16579463,
16579692,
16579692,
16579892,
16580024,
16580125,
16580344,
16580344,
16580492,
16580582,
16580714,
16581070,
16581070,
16581149,
16581332,
16581502,
16581919,
16581919,
16582074,
16582279,
16582548,
16583080,
16583080,
16583360,
16583560,
16583795,
16584355,
16584355,
16584657,
16584977,
16585329,
16586060,
16586060,
16586347,
16586699,
16587092,
16587749,
16587749,
16588100,
16588462,
16588820,
16589505,
16589505,
16589838,
16590135,
16590478,
16591050,
16591050,
16591307,
16591504,
16591721,
16592206,
16592206,
16592320,
16592412,
16592494,
16592557,
16592557,
16592410,
16592312,
16592228,
16591798,
16591798,
16591488,
16591089,
16590677,
16589738,
16589738,
16589150,
16588485,
16587843,
16586542,
16586542,
16585890,
16585244,
16584609,
16583376,
16583376,
16582714,
16582118,
16581583,
16580555,
16580555,
16580073,
16579616,
16579171,
16578393,
16578393,
16578088,
16577803,
16577524,
16577046,
16577046,
16576892,
16576690,
16576460,
16576138,
16576138,
16576077,
16575952,
16575857,
16575759,
16575759,
16575662,
16575562,
16575455,
16575349,
16575349,
16575320,
16575277,
16575262,
16575220,
16575220,
16575163,
16575171,
16575175,
16575130,
16575130,
16575125,
16575131,
16575080,
16575046,
16575046,
16575042,
16575035,
16575045,
16574998,
16574998,
16574974,
16575043,
16575072,
16575141,
16575141,
16575183,
16575177,
16575156,
16575108,
16575108,
16575136,
16575177,
16575240,
16575310,
16575310,
16575328,
16575329,
16575318,
16575325,
16575325,
16575375,
16575412,
16575407,
16575446,
16575446,
16575484,
16575462,
16575454,
16575510,
16575510,
16575525,
16575494,
16575525,
16575424,
16575424,
16575483,
16575534,
16575529,
16575525,
16575525,
16575528,
16575542,
16575534,
16575430,
16575430,
16575440,
16575482,
16575487,
16575450,
16575450,
16575427,
16575398,
16575399,
16575399,
16575399,
16575370,
16575367,
16575357,
16575310,
16575310,
16575275,
16575246,
16575255,
16575142,
16575142,
16575158,
16575240,
16575242,
16575172,
16575172,
16575215,
16575232,
16575247,
16575142,
16575142,
16575058,
16575091,
16575125,
16575109,
16575109,
16575060,
16575049,
16575027,
16574994,
16574994,
16575071,
16575072,
16575054,
16575080,
16575080,
16575047,
16575066,
16575060,
16574959,
16574959,
16574983,
16574935,
16574944,
16574944,
16574944,
16574967,
16574985,
16575004,
16574971,
16574971,
16574968,
16574944,
16574939,
16574912,
16574912,
16574919,
16574934,
16574910,
16574920,
16574920,
16574952,
16574903,
16574842,
16574911,
16574911,
16574945,
16574924,
16574900,
16574885,
16574885,
16574877,
16574862,
16574864,
16574863,
16574863,
16574864,
16574807,
16574784,
16574802,
16574802,
16574749,
16574733,
16574760,
16574800,
16574800,
16574813,
16574834,
16574819,
16574814,
16574814,
16574775,
16574747,
16574734,
16574769,
16574769,
16574764,
16574771,
16574762,
16574672,
16574672,
16574611,
16574605,
16574659,
16574727,
16574727,
16574707,
16574597,
16574399,
16574144,
16574144,
16574067,
16574135,
16574325,
16574563,
16574563,
16574540,
16574494,
16574697,
16575243,
16575243,
16575495,
16575595,
16575505,
16575295,
16575295,
16575169,
16575102,
16575055,
16574959,
16574959,
16574994,
16575029,
16575077,
16575024,
16575024,
16574901,
16574774,
16574740,
16574631,
16574631,
16574505,
16574506,
16574577,
16574670,
16574670,
16574665,
16574659,
16574692,
16574667,
16574667,
16574687,
16574702,
16574684,
16574673,
16574673,
16574685,
16574683,
16574714,
16574667,
16574667,
16574680,
16574671,
16574641,
16574590,
16574590,
16574610,
16574589,
16574595,
16574679,
16574679,
16574881,
16576084,
16577931,
16581097,
16581097,
16582294,
16583679,
16582777,
16576484,
16576484,
16571281,
16565968,
16560093,
16560093,
16560093,
16560093,
16560093,
16560093,
16560093,
16560093,
16560093,
16560093,
16560093,
16557571,
16557571,
16561283,
16564468,
16567005,
16568482,
16568482,
16569556,
16570825,
16571955,
16573977,
16573977,
16574497,
16574890,
16575296,
16575949,
16575949,
16576138,
16576331,
16576602,
16576923,
16576923,
16577060,
16577242,
16577350,
16577655,
16577655,
16577833,
16577953,
16578029,
16578167,
16578167,
16578298,
16578444,
16578532,
16578739,
16578739,
16578835,
16578924,
16579032,
16579242,
16579242,
16579357,
16579435,
16579551,
16579842,
16579842,
16579944,
16580094,
16580235,
16580489,
16580489,
16580629,
16580797,
16580984,
16581325,
16581325,
16581546,
16581766,
16581937,
16582324,
16582324,
16582559,
16582790,
16583023,
16583634,
16583634,
16583877,
16584174,
16584455,
16585019,
16585019,
16585382,
16585701,
16586035,
16586760,
16586760,
16587147,
16587492,
16587805,
16588485,
16588485,
16588776,
16589105,
16589444,
16590046,
16590046,
16590348,
16590628,
16590917,
16591395,
16591395,
16591575,
16591776,
16591991,
16592140,
16592140,
16592189,
16592214,
16592185,
16591892,
16591892,
16591701,
16591460,
16591154,
16590414,
16590414,
16589974,
16589488,
16588958,
16587700,
16587700,
16587065,
16586424,
16585828,
16584496,
16584496,
16583864,
16583226,
16582608,
16581462,
16581462,
16580921,
16580398,
16579895,
16579008,
16579008,
16578607,
16578300,
16577975,
16577370,
16577370,
16577074,
16576875,
16576652,
16576362,
16576362,
16576192,
16576064,
16575950,
16575677,
16575677,
16575575,
16575529,
16575464,
16575342,
16575342,
16575289,
16575231,
16575139,
16575022,
16575022,
16575051,
16575014,
16575004,
16574894,
16574894,
16574850,
16574822,
16574809,
16574855,
16574855,
16574825,
16574800,
16574841,
16574861,
16574861,
16574861,
16574854,
16574872,
16574850,
16574850,
16574856,
16574872,
16574876,
16574870,
16574870,
16574859,
16574877,
16574889,
16574932,
16574932,
16574944,
16574953,
16575027,
16575049,
16575049,
16575057,
16575112,
16575069,
16575122,
16575122,
16575122,
16575150,
16575141,
16575130,
16575130,
16575162,
16575177,
16575199,
16575205,
16575205,
16575232,
16575252,
16575229,
16575248,
16575248,
16575245,
16575304,
16575276,
16575269,
16575269,
16575292,
16575242,
16575251,
16575198,
16575198,
16575170,
16575177,
16575194,
16575144,
16575144,
16575130,
16575110,
16575089,
16575090,
16575090,
16575070,
16575062,
16575025,
16575034,
16575034,
16574992,
16574987,
16574975,
16575024,
16575024,
16575017,
16575008,
16574952,
16574894,
16574894,
16574901,
16574930,
16574918,
        ],
// data: [],
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
  //       // let old = d[0]
  //       for (let i in d){
  //           self.series.add({x: d[i]['x'], y: d[i]['y']})
  //           d.shift()
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
      console.log(event);
      // clearInterval(self.interval)
      let d = JSON.parse(event.data)['content']['pointers']['content']['pointers']
      // console.log(d['content']['pointers']['content']['pointers']);
      let p = []
      let old = d[0]
      for (let i=0; i<d.length; i++){
          // if (Math.abs(d[i]-old) < 80000){
          if (d[i] > 10){
            // setTimeout(function(){
            self.k+=3
            // }, 50)
            // self.series.add({x: self.k, y: d[i]})
            let mmax = self.series.getYMax() + 100000
            let mmin = self.series.getYMin() - 100000
            self.chart.getDefaultAxisY()
              .setTickStrategy("Empty")
              .setStrokeStyle(emptyLine)
              .setInterval(mmin, mmax, true)
              .setScrollStrategy(AxisScrollStrategies.expansion)
            // self.data.push({x: self.k, y: d[i]})
            p.push({x: self.k, y: d[i]})
            console.log(d[i]);
          }
      }
      createSampledDataGenerator(p, 1, 10)
        .setSamplingFrequency(1)
        .setInputData(p)
        .generate()
        .setStreamBatchSize(48)
        .setStreamInterval(50)
        .toStream()
        .forEach(p => {
            // Push the created points to the series.
            self.series.add({ x: p.data.x, y: p.data.y })
        })
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
        this.chart.getDefaultAxisY()
            .setTickStrategy("Empty")
            .setStrokeStyle(emptyLine)
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
        //   // if (Math.abs(p[i]-old) < 2000000){
        //     this.series.add({x: this.k, y: p[i]})  
        //   // }
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