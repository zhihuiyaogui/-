// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import MintUI from 'mint-ui'
import echarts from 'echarts'
import 'mint-ui/lib/style.css'
import CommonPlugin from './plugins/plugins.js'

import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/font/iconfont.css'
import 'swiper/dist/css/swiper.css'
import VueResource from 'vue-resource';
import dateTime from 'vue-date-time-m';
Vue.component('data-time', dateTime);
Vue.prototype.$echarts = echarts
window.echarts = require('echarts');
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(MintUI)
Vue.use(CommonPlugin)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
