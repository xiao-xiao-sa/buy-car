// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'lib-flexible'
import './assets/iconfont/iconfont.css'
import './assets/style/common.css'
import base from './assets/js/base.js'

Vue.config.productionTip = false

Vue.use(base);
//定义全局价格过滤器，保留两位小数
Vue.filter('priceType', function (value) {
  if(!isNaN(value)){
  	value = value.toFixed(2);
  	return value;
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
