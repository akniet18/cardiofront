<template>
  <div class="wrapper">
    <div class="item" style="height: 100%">
      <EcgChart :did="dev_id" :userinfo="userinfo" />
      <div class="info">
        <div class="sectionAva">
          <img :src="avatar" alt="" />
        </div>
        <div class="sectionInfo">
          <div class="username">{{ name }}</div>
          <div class="birthdate">{{ birth_date }}</div>
          <div class="address" v-if="location != 'undefined'">
            {{ location }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EcgChart from "../components/ecgchart";
export default {
  components: {
    EcgChart,
  },
  data() {
    return {
      data: [],
      dev_id: this.$route.query.dev_id,
      // username: this.$route.query.,
      name: this.$route.query.name,
      birth_date: this.$route.query.birth_date,
      avatar: this.$route.query.avatar,
      location: this.$route.query.location,
      userinfo: {},
    };
  },
  mounted() {
    this.userinfo = {
      last_name: this.$route.query.last_name,
      first_name: this.$route.query.first_name,
      birth_date: this.$route.query.birth_date,
    };
    console.log(this.userinfo);
    let s = document.querySelector(".section");
    s.style.display = "none";
    let item = document.querySelectorAll('div[class^="item"');
    //   console.log(item);
    let chart = document.querySelectorAll('div[id^="chart"');
    //   let infod = document.querySelectorAll('div[class^="infod"')
    //   console.log(infod);
    let maps = document.querySelectorAll("#map");
    // let maps2 = document.querySelectorAll('#map2')
    // maps.style
    for (let i in item) {
      item[i].appendChild(chart[i]);
      item[i].appendChild(maps[i]);
      // item[i].appendChild(maps2[i])
      chart[i].style.height = "60%";
      // chart[i].style.marginTop = "-45px"
      chart[i].querySelector("canvas").style.zIndex = "99";
      maps[i].style.height = "30%";
    }
  },
};
</script>

<style scoped>
.wrapper {
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
  height: 450px;
}
.info {
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
.sectionAva img {
  width: 60px;
  height: 60px;
  border-radius: 5px;
}
.sectionAva {
  margin: 0 5px;
}
</style>