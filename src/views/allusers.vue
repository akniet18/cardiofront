<template>
    <div class="wrapper">
        <section>
            <div class="info"
                v-for="i in data" :key="i.device_id"
                @click="zoom(i.device_id, i.last_name+' '+i.first_name, i.birth_date, i.location, i.avatar)">
                <div class="sectionAva">
                    <img :src="i.avatar">
                </div>
                <div class="sectionInfo">
                    <div class="username">{{i.last_name}} {{i.first_name}}</div>
                    <div class="birthdate">{{i.birth_date}}</div>
                    <div class="address">{{i.location}}</div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      chartdata: [1, 2, 3, 4, 5, 6],
      options: [],
      data: []
    }
  },
  mounted () {
      this.getUser()
  },
  methods: {
    getUser() {
        let headers = {"Authorization": "Token " + sessionStorage.getItem('key')}
        axios.get('users/get/', {headers})
            .then(r=>{
                for (let i in r.data){
                    r.data[i].avatar = 'https://back.cardioservice.com.kz/media/'+r.data[i].avatar
                }
                this.data = r.data
            }, e=> {
                console.log(e);
            })
    },
    zoom(id, name, bd, location, avatar){
        // this.$router.push({name: "profile_detail", query: {dev_id: id}})
        // window.location.href = '/profile/staff/detail/?dev_id='+id.toString()+"&";
        window.location.href = `/profile/staff/detail/?dev_id=${id}&name=${name}&birth_date=${bd}&location=${location}&avatar=${avatar}`
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
    height: auto;
}

section{
    position: absolute;

    grid-gap: 5px;
    width: 100%;
    height: auto;
}
.info{
    top: 5px;
    left: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    font-size: 0.9em;
    width: 100%;
    height: 70px;
    z-index: 99;
    padding: 2px 0;
    border-bottom: 1px solid #000;
}
.sectionAva img{
    width: 60px;
    height: 60px;
    border-radius: 5px;
}
.sectionAva{
    margin:0 5px;
} 
@media (max-width: 800px) {
   .info{
       font-size: 0.8em;
   }  
}
</style>