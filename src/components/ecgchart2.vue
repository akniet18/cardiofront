<template>
    <div style="margin-top: 15px; position: relative">
      <el-dialog title="Выберите дату" :visible.sync="dialogTableVisible">
        <div>
          <span v-for="i in pdata">
            <el-button @click="show(i)">{{i.date}}</el-button>
          </span>
        </div>
      </el-dialog>
      <section class="section"></section>
      <div class="infod">
        <div>p: {{p}}</div>
        <div>q: {{q}}</div>
        <div>r: {{maxx}}</div>
        <div>s: {{minn}}</div>
        <div>t: {{t}}</div>
        <div>ЧСС: {{chss}}</div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    did: String
  },
  data(){
    this.chart = null
    return{
        data: [],
        socket: null,
        k: 1,
        interval: null,
        series: null,
        chart: null,
        maxx: 0,
        minn: 0,
        p: 0,
        q: 0,
        t: 0,
        chss: 0,
        dialogTableVisible: false,
        pdata: null
    }
  },
  mounted () {
    this.graf(this.data)
    let headers = {"Authorization": "Token " + sessionStorage.getItem('key')}
    axios.get('api/get/'+this.$props.did, {headers})
      .then(r=>{
         this.dialogTableVisible = true
         this.pdata = r.data
      }, r=> {
        console.log(r);
      })
  },
  methods: {
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
        })
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
            // .setInterval(0, 17000000)
            // .setScrollStrategy(AxisScrollStrategies.progressive)

        this.chart.getDefaultAxisX()
            // .setTickStrategy("Empty")
            // .setStrokeStyle(emptyLine)
            .setInterval(0, 50000)
            .setScrollStrategy(AxisScrollStrategies.progressive)

        // let old = p[0]
        // for (let i in p){
        //   this.k+=3
        //   // if (Math.abs(p[i]-old) < 2000000){
        //     this.series.add({x: this.k, y: p[i]})  
        //   // }
        // }
        let lcjss = document.querySelector('#lcjs-auto-flexbox')
        let section = document.querySelector('.section')
        lcjss.style.height = "100%"
        section.appendChild(lcjss)

      },
      show(d) {
        const lcjs = require('@arction/lcjs')
        const {
            AxisScrollStrategies,
            emptyLine
        } = lcjs
        const {
            createSampledDataGenerator
        } = require('@arction/xydata')
        this.dialogTableVisible = false
        this.data = d.data
        let self = this
        let period = []
        let oldK = 0
        d = d.data
          console.log(d);
          period = period.concat(d)
          if (period.length >= 300){
            self.maxx = Math.max(...period)
            self.minn = Math.min(...period)
            // self.chss = Math.round(1500 / Math.round((self.k/3-oldK/3)))
            if (self.maxx == self.minn){
              self.p = self.maxx
              self.t = self.maxx
              self.q = self.minn
            }else{
              self.p = Math.round(self.maxx * 0.3)
              self.t = Math.round(self.maxx * 0.6)
              self.q = Math.round(self.minn * 0.5)
            }
            period = []
            oldK = self.k
          }
          let point = []
          for (let i of d){
            self.k+=10
            // point.push({x: self.k, y: i})
            self.series.add({x: self.k, y: i})
            // let mmax = self.series.getYMax() + 150000
            // let mmin = self.series.getYMin() - 150000
            // self.chart.getDefaultAxisY()
            //   // .setTickStrategy("Empty")
            //   // .setStrokeStyle(emptyLine)
            //   .setInterval(mmin, mmax)
            //   .setScrollStrategy(AxisScrollStrategies.expansion)
          }
      }
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
.infod{
  position: absolute;
  bottom: 5px;
  right: 2px;
  background: #202020;
  z-index: 99;
  color: #fff;
  padding: 10px;
}
@media (max-width: 800px) {
  .infod{
    font-size: 0.8em;
  }
}
</style>