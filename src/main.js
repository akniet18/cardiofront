import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false
window.axios = axios
// axios.defaults.baseURL = 'http://localhost:8000/'
axios.defaults.baseURL = 'http://back.cardioservice.com.kz/'


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
