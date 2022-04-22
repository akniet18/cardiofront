<template>
  <div class="card_section" style="margin-top: 15px; position: relative">
    <div>
      <section class="section"></section>
      <!-- <div class="infod">
        <div>p: {{p}}</div>
        <div>q: {{q}}</div>
        <div>r: {{maxx}}</div>
        <div>s: {{minn}}</div>
        <div>t: {{t}}</div>
        <div>ЧСС: {{chss}}</div>
      </div> -->
      <div class="conc">
        <button @click="conclusion" :disabled="!ssCheck">
          {{ $t("conclusion") }}
        </button>
        <button @click="pause">{{ $t("pause") }}</button>
      </div>
      <el-dialog
        :title="$t('conclusion')"
        :visible.sync="dialogVisible"
        width="75%"
      >
        <div>
          <div>
            <b>{{ $t("patient") }}</b>
          </div>
          <div>{{ $t("id") }}: {{ did }}</div>
          <div>
            {{ $t("fio") }}: {{ userinfo.last_name }} {{ userinfo.first_name }}
          </div>
          <div>{{ $t("birth_date") }}: {{ userinfo.birth_date }}</div>
          <div>
            {{ $t("today") }}: {{ new Date().getDate() }}.{{
              new Date().getMonth()
            }}.{{ new Date().getFullYear() }}
          </div>
          <br />
          <div>
            <b>{{ $t("protocol") }}</b>
          </div>
          <div>{{ $t("hs") }}: {{ chss }} {{ $t("bl_min") }}</div>
          <div class="mb10">{{ $t("interval") }} RR: {{ rr }} мс</div>
          <div></div>
          <div class="table-conclusion">
            <div>{{ $t("danger") }}</div>
            <div>{{ $t("device_check") }}</div>
          </div>
          <div class="table-conclusion">
            <div>{{ $t("sinus_rhythm") }}</div>
            <div>{{ $t("normal_ecg") }}</div>
          </div>
          <div class="table-conclusion">
            <div>{{ $t("sinus_bradycardia") }} ({{ $t("hs") }} 45)</div>
            <div v-if="chss > 45">{{ $t("not_found") }}</div>
            <div v-else>{{ $t("found") }}</div>
          </div>
          <div class="table-conclusion">
            <div>{{ $t("sinus_tachycardia") }} ({{ $t("hs") }} ≥ 100)</div>
            <div v-if="chss < 100">{{ $t("not_found") }}</div>
            <div v-else>{{ $t("found") }}</div>
          </div>
          <div class="table-conclusion">
            <div>{{ $t("atrial") }}</div>
            <div>{{ $t("not_found") }}</div>
          </div>
          <div class="table-conclusion">
            <div>{{ $t("atrial_flutter") }}</div>
            <div>{{ $t("not_found") }}</div>
          </div>
        </div>
      </el-dialog>
    </div>

    <div id="map"></div>
    <!-- <div id="map" style="width: 600px; height: 400px"></div> -->
  </div>
</template>

<script>
export default {
  name: "EcgChart",
  props: ["did", "userinfo"],
  data() {
    return {
      pdata: [],
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
      timer: 0,
      ss: 0,
      ssCheck: false,
      rr: 0,
      dialogVisible: false,
    };
  },
  mounted() {
    // ymaps.ready(init);
    // var myMap = new ymaps.Map("map", {
    //     center: [43.2567, 76.9286],
    //     zoom: 7
    // });
    let latlng = { lat: 43.236927, lng: 76.935135 };
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 43.236927, lng: 76.935135 },
      zoom: 14,
      // disableDefaultUI: true,
      // fullscreenControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      zoomControl: false,
      gestureHandling: "greedy",
    });
    const marker = new google.maps.Marker({
      position: latlng,
      map: map,
    });
    map.setTilt(45);
    const { createSampledDataGenerator } = require("@arction/xydata");
    // this.getData2()
    const lcjs = require("@arction/lcjs");
    const { AxisScrollStrategies, emptyLine } = lcjs;
    this.graf(this.data);
    // let did = sessionStorage.getItem('did')
    this.socket = new WebSocket(
      "wss://back.cardioservice.com.kz/api/setByte/?wid=" + this.did
    );
    let self = this;
    this.timer = setInterval(function () {
      self.ss += 1;
      if (self.ss >= 61) {
        self.ssCheck = true;
        self.ss = 0;
      }
    }, 1000);
    let period = [];
    let oldK = 0;
    this.socket.onopen = function (e) {
      console.log("open");
    };
    let len = 0;

    var allPoints = [];

    this.socket.onmessage = function (event) {
      let d = JSON.parse(event.data)["content"]["pointers"]["content"][
        "pointers"
      ];

      // Мой тестовый код позже можно удалить !!!!!! <--------------------------------------------->

      allPoints = allPoints.concat(d.slice(1));

      if (allPoints.length > 2000) {
        allPoints = allPoints.slice(allPoints.length - 2000);

        var averagePoint = Math.max(...allPoints) - 2000;

        var indexes = [];

        for (var i = 0; i < allPoints.length; i++) {
          if (allPoints[i] > averagePoint) {
            indexes.push(i);
          }
        }

        if (indexes.length > 1) {
          var raznica = 0;
          for (let i = 1; i < indexes.length; i++) {
            if (indexes[i] - indexes[i - 1] > raznica) {
              raznica = indexes[i] - indexes[i - 1];
            }
          }
          if (raznica != 0) {
            var rrLength = raznica;
            var rrSM = rrLength / 800;
            var myCHSS = 60 / rrSM;
            if (myCHSS > 20 && myCHSS < 200) {
              this.chss = parseInt(myCHSS);
            }
          }
        }
      }

      console.log(this.chss);

      // КОНЕЦ !!!!!! <---------------------------------------------------------------------------->

      // console.log("msg", d);
      // period = period.concat(d.slice(1))
      // if (period.length >= 360){
      // self.maxx = Math.max(...period)
      // self.minn = Math.min(...period)
      len += d.slice(1).length;
      if (self.ss >= 60) {
        // self.chss = parseInt(len / 360);
        self.rr = 60 / parseInt(len / 360);
      }

      // self.chss = Math.round(1500 / Math.round((self.k/3-oldK/3)))
      // if (self.maxx == self.minn){
      //   self.p = self.maxx
      //   self.t = self.maxx
      //   self.q = self.minn
      // }else{
      //   self.p = Math.max(...period.slice(0, 60))
      //   self.t = Math.max(...period.slice(60, 90))
      //   self.q = Math.min(...period.slice(200,300))
      // }
      // period = []
      // oldK = self.k;
      // }
      let point = [];
      let old = 0;

      let p = [];
      for (let i = 1; i < d.length; i++) {
        if (d[i] > 10) {
          self.k += 1;
          // console.log(d[i]);
          // let mmax = Math.max(...period)
          // let mmin = Math.min(...period)
          self.series.add({ x: self.k, y: d[i] });
          // console.log(d[i]);
          // let mmax = self.series.getYMax() + 100000
          // let mmin = self.series.getYMin() - 100000
          // if (Math.round(old - d[i]) > 2000){
          let mmax = d[i] + 55000;
          let mmin = d[i] - 55000;
          self.chart
            .getDefaultAxisY()
            .setTickStrategy("Empty")
            .setStrokeStyle(emptyLine)
            .setInterval(mmin, mmax, false, true)
            .setScrollStrategy(AxisScrollStrategies.progressive);
          // }
          // self.pdata.push({x: self.k, y: d[i]})

          // p.push({x: self.k, y: d[i]})
          // point = p
        }
      }
    };
    this.socket.onerror = function (error) {
      console.log(error);
    };
  },
  // watch: {
  //   pdata: function(point){
  //     // console.log(point);
  //     const {
  //       createSampledDataGenerator
  //     } = require('@arction/xydata')
  //     // this.getData2()
  //     const lcjs = require("@arction/lcjs");
  //     const { AxisScrollStrategies, emptyLine } = lcjs;
  //     let self = this
  //     createSampledDataGenerator(point, 1, 10)
  //       .setSamplingFrequency(1)
  //       .setInputData(point)
  //       .generate()
  //       .setStreamBatchSize(48)
  //       .setStreamInterval(50)
  //       .setStreamRepeat(true)
  //       .toStream()
  //       .forEach(point => {
  //         console.log(point.timestamp);
  //           // Push the created points to the series.
  //           self.series.add({ x: point.data.x, y: point.data.y })
  //       })
  //     for (let i of point){
  //     //   setTimeout(function(){
  //     //     self.series.add({ x: i.x, y: i.y });
  //     //   // if (Math.round(old - d[i]) > 2000){
  //         let mmax = i.y + 50000;
  //         let mmin = i.y - 50000;
  //         self.chart
  //           .getDefaultAxisY()
  //           .setTickStrategy("Empty")
  //           .setStrokeStyle(emptyLine)
  //           .setInterval(mmin, mmax, false, true)
  //           .setScrollStrategy(AxisScrollStrategies.expansion);
  //       // }
  //     //   }, 10)
  //     //   point.shift()
  //     }
  //   }
  // },
  methods: {
    pause() {
      this.socket.close();
    },
    graf(p) {
      const lcjs = require("@arction/lcjs");
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
        emptyTick,
      } = lcjs;

      this.chart = lightningChart()
        .ChartXY({
          // theme: Themes.blueSciFi
        })
        .setTitle("");
      this.series = this.chart.addLineSeries({
        dataPattern: DataPatterns.horizontalProgressive,
      });
      this.series.setStrokeStyle(
        new SolidLine({
          thickness: 3,
          fillStyle: new SolidFill({ color: ColorHEX("#5aafc7") }),
        })
      );

      this.chart.setAutoCursorMode(AutoCursorModes.disabled);
      this.chart
        .getDefaultAxisY()
        .setTickStrategy("Empty")
        .setStrokeStyle(emptyLine);

      this.chart
        .getDefaultAxisX()
        // .setTickStrategy("Empty")
        // .setStrokeStyle(emptyLine)
        .setInterval(0, 3000)
        .setScrollStrategy(AxisScrollStrategies.progressive);

      let lcjss = document.querySelector("#lcjs-auto-flexbox");
      let section = document.querySelector(".section");
      lcjss.style.height = "100%";
      lcjss.style.marginTop = "40px";
      section.appendChild(lcjss);
      lcjss.querySelector("canvas").style.zIndex = "99";
      // let maps = document.querySelector('#map')
      // maps.style
    },
    conclusion() {
      this.dialogVisible = true;
    },
  },
  beforeDestroy() {
    // clearInterval(this.interval)
    this.socket.close();
  },
};
</script>

<style scoped>
#section {
  margin-top: 25px;
}
.fill {
  height: 100%;
}
#mycanvas {
  width: 100%;
}
.infod {
  position: absolute;
  bottom: 5px;
  right: 2px;
  background: #202020;
  z-index: 999;
  color: #fff;
  padding: 10px;
}
.conc {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 999;
  font-size: 14px;
  display: flex;
  flex-direction: column;
}
.conc button:first-child {
  margin: 10px 0;
}
.mb10 {
  margin-bottom: 10px;
}
.table-conclusion {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.table-conclusion div {
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  padding: 10px;
}
#map {
  height: 150px;
}
@media (max-width: 800px) {
  .infod {
    font-size: 0.8em;
  }
}
</style>