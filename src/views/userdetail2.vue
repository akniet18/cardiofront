<template>
    <div class="wrapper">
        
        <div>
            <div class="item item1"><EcgChart :did="dev_id"/></div>
        </div>
        
        <section>
            <div class="info">
                <div class="sectionAva">
                    <img :src="avatar" alt="">
                </div>
                <div class="sectionInfo">
                    <div class="username">{{name}}</div>
                    <div class="birthdate">{{birth_date}}</div>
                    <div class="address">{{location}} {{dev_id}}</div>
                </div>
            </div> 
            
        </section>
        
    </div>
</template>

<script>
import EcgChart from '../components/ecgchart2'
export default {
  components: {
      EcgChart
  },
  data(){
    return{
        data: [],
        dev_id: this.$route.query.dev_id,
        // username: this.$route.query.,
        name: this.$route.query.name,
        birth_date: this.$route.query.birth_date,
        avatar: this.$route.query.avatar,
        location: this.$route.query.location,
    }
  },
}
</script>

<style scoped>
.wrapper{
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
    height: 450px
}
section{
    position: absolute;
    grid-gap: 10px;
    width: 100%;
    height: 100%;
}
.info{
    position: absolute;
    top: 5px;
    left: 0px;
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
.sectionAva img{
    width: 60px;
    height: 60px;
    border-radius: 5px;
}
.sectionAva{
    margin:0 5px;
}
</style>