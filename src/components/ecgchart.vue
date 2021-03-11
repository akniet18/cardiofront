<template>
    <div style="margin-top: 15px; position: relative">
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
export default {
  name: 'EcgChart',
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
        chss: 0
    }
  },

  mounted () {
    // this.getData2()
    const lcjs = require('@arction/lcjs')
        const {
            AxisScrollStrategies,
            emptyLine
        } = lcjs
     const {
        createSampledDataGenerator
    } = require('@arction/xydata')
    this.graf(this.data)
    // let did = sessionStorage.getItem('did')
    console.log(this.$props.did);
    this.socket = new WebSocket("wss://back.cardioservice.com.kz/api/setByte/?wid="+this.did);
    let self = this
    
    let period = []
    let oldK = 0
    this.socket.onopen = function(e) {
      console.log('open')
    };
    this.socket.onmessage = function(event) {
      let d = JSON.parse(event.data)['content']['pointers']['content']['pointers']
      console.log(d);
      period = period.concat(d.slice(1))
      if (period.length >= 300){
        self.maxx = Math.max(...period)
        self.minn = Math.min(...period)
        self.chss = Math.round(1500 / Math.round((self.k/3-oldK/3)))
        if (self.maxx == self.minn){
          self.p = self.maxx
          self.t = self.maxx
          self.q = self.minn
        }else{
          self.p = Math.max(...period.slice(0, 60))
          self.t = Math.max(...period.slice(60, 90))
          self.q = Math.min(...period.slice(200,300))
        }
        period = []
        oldK = self.k
      }
      let p = []
      for (let i=1; i<d.length; i++){
          if (d[i] > 10){
            self.k+=30
            // let mmax = Math.max(...period)
            // let mmin = Math.min(...period)
            self.series.add({x: self.k, y: d[i]})
            let mmax = self.series.getYMax() + 100000
            let mmin = self.series.getYMin() - 100000
            self.chart.getDefaultAxisY()
              .setTickStrategy("Empty")
              .setStrokeStyle(emptyLine)
              .setInterval(mmin, mmax)
              .setScrollStrategy(AxisScrollStrategies.expansion)
            
            // self.data.push({x: self.k, y: d[i]})
            // p.push({x: self.k, y: d[i]})
          }
      }
     
    };
    this.socket.onerror = function(error) {
      console.log(error)
    };
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
            // theme: Themes.blueSciFi
        }).setTitle('')
        // Add line series to visualize the data received
        this.series = this.chart.addLineSeries({ dataPattern: DataPatterns.horizontalProgressive })
        // Style the series
        this.series
            .setStrokeStyle(new SolidLine({
                thickness: 2,
                fillStyle: new SolidFill({ color: ColorHEX('#5aafc7') })
            }))
            // .setMouseInteractions(false)
        this.chart.setAutoCursorMode(AutoCursorModes.disabled)
        // Setup view nicely.
        this.chart.getDefaultAxisY()
            .setTickStrategy("Empty")
            .setStrokeStyle(emptyLine)
            // .setInterval(16100000, 16500000)
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
  },
  beforeDestroy() {
    // clearInterval(this.interval)
    this.socket.close()
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