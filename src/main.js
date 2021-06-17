import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'
import i18n from "./i18n";
Vue.use(ElementUI, { locale });
Vue.config.productionTip = false
window.axios = axios
// axios.defaults.baseURL = 'http://localhost:8000/'
axios.defaults.baseURL = 'https://back.cardioservice.com.kz/'

new Vue({
  router,
  store,
  i18n,
  render: function (h) { return h(App) }
}).$mount('#app')
