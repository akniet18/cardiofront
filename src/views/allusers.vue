<template>
    <div class="wrapper">
        <table>
            <tr class="table_header">
                <th class="table_header_column">Фамилия</th>
                <th class="table_header_column">Имя</th>
                <th class="table_header_column">Адрес</th>
                <th class="table_header_column">Дата рождения</th>
                <th>
                    <el-input
                    v-model="search"
                    size="mini"
                    placeholder="Type to search"/>
                </th>
            </tr>
            <tr v-for="i in data.filter(data => !search || data.username.toLowerCase().includes(search.toLowerCase()) 
                                    || data.first_name.toLowerCase().includes(search.toLowerCase())
                                    || data.last_name.toLowerCase().includes(search.toLowerCase())
                                    || data.location.toLowerCase().includes(search.toLowerCase()))" 
                :key="i.device_id"
                class="table_row success_row" :class="`table_row_${i.device_id}`"
                >
                <th>
                    <div style="display:flex; align-items:center">
                        <img :src="i.avatar" width="50px">
                        <div style="display:flex; flex-direction: column; margin-left: 10px;">
                            <div>{{i.last_name}}</div>
                            <div class="show_on_mobile">{{i.first_name}}</div>
                            <div class="show_on_mobile">{{i.location}}</div>
                            <div class="show_on_mobile">{{i.birth_date}}</div>
                        </div>
                    </div>
                </th>
                <th class="table_header_column">{{i.first_name}}</th>
                <th class="table_header_column">{{i.location}}</th>
                <th class="table_header_column">{{i.birth_date}}</th>
                <th>
                    <el-button
                        size="mini"
                        @click="handleShow(i.device_id, i.last_name+' '+i.first_name, i.birth_date, i.location, i.avatar)">Показать
                    </el-button>
                </th>
            </tr>
        </table>
      
    </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      chartdata: [1, 2, 3, 4, 5, 6],
      options: [],
      data: [],
      search: '',
      socket_list: []
    }
  },
  created(){
    this.getUser()
  },
  mounted () {
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
                this.sockets(r.data)
            }, e=> {
                console.log(e);
            })
        
    },
    sockets(d){
        for (let i of d){
            let socket = new WebSocket("wss://back.cardioservice.com.kz/api/setByte/?wid="+i.device_id);
            socket.onopen = function(e) {
                console.log('open')
            };
            let period = []
            let maxx = 0
            let minn = 0
            let tr = document.querySelector('.table_row_'+i.device_id.toString())
            socket.onmessage = function(event) {
                let d = JSON.parse(event.data)['content']['pointers']['content']['pointers']
                period = period.concat(d.slice(1))
                if (period.length >= 351){
                    maxx = Math.max(...period)
                    minn = Math.min(...period)
                    if (minn >= 0 && minn <= 10000000){
                        tr.style.background = "oldlace"
                    }
                    else if (minn > 10000000 && minn <= 16000000){
                        tr.style.background = "#ffef4a"
                    }
                    else{
                        tr.style.background = "#f0f9eb"
                    }
                }
            }
            socket.onerror = function(error) {
                console.log(error)
            };
            this.socket_list.push(socket)
        }
    },
    handleShow(id, name, bd, location, ava){
        window.location.href = `/profile/staff/detail/?dev_id=${id}&name=${name}&birth_date=${bd}&location=${location}&avatar=${ava}`
    }
  },
  beforeDestroy() {
    for (let i of this.socket_list){
        i.close()
    }
  }
}
</script>

<style scoped>
.warning-row{
background: oldlace;
}

.success_row {
background: #f0f9eb!important;
}
.wrapper{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    height: auto;
}
table{
    width: 100%;
    border-spacing: 0
}
tr, th{
    padding: 10px;
    color: #606266;
}
th{
   border-bottom: 1px solid #dddddd;
}
tr:first-child th{
    color: #909399
}
.sectionAva img{
    width: 60px;
    height: 60px;
    border-radius: 5px;
}
.sectionAva{
    margin:0 5px;
} 
.show_on_mobile{
       display: none;
   }

@media (max-width: 800px) {
   .info{
       font-size: 0.8em;
   }
   .table_header_column {
       display: none;
   }
   .show_on_mobile{
       display: block;
   }
   th{
       font-size: 0.9em;
   }
}
@media (max-width: 800px) {
    th{
       font-size: 0.8em;
   }
}
</style>