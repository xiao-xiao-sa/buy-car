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

router.beforeEach(function (to, from, next) {
	next();
	let allowBack = true    //    给个默认值true
	if (to.meta.allowBack !== undefined) {
	    allowBack = to.meta.allowBack
	}
	if (!allowBack) {
	      history.pushState(null, null, location.href)
	}    
	store.commit('updateAppSetting', {     //   updateAppSetting 只是store里面的一个action， 用来改变store里的allowBack的值的，具体怎么改这个值 要根据各位的实际情况而定
	    allowBack: allowBack
	})
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
