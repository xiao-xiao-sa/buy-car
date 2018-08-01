// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import 'lib-flexible'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/font_xin/iconfont.css'
import './assets/style/common.css'
import base from './assets/js/base.js'

Vue.config.productionTip = false

Vue.prototype.axios = axios

Vue.use(base);
//定义全局价格过滤器，保留两位小数
Vue.filter('priceType', function (value) {
  if(!isNaN(value)){
  	//value = value.toFixed(2);
  	return value;
  }
})

router.beforeEach(function (to, from, next) {
	/* 路由发生变化修改页面title */
	if (to.meta.title) {
	   document.title = to.meta.title
	}
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


//get请求，类似如下操作
// this.axios.get(url,{params:{a:1,b:2}})
// 	.then(res=> {
//     console.log(res);
// 	})
//  .catch(err=> {
//     console.log(err);
//  });
//post请求，类似如下操作
// this.axios({
//    url:'/api/xxxxx/xxxx.xxx',
//    method:'post',
//    data:Qs.stringify({       //需要引入qs插件，方便后台读取参数
//    			a:1,
//    			b:2
// 		}),
//    headers: {
//      'Content-Type': 'application/x-www-form-urlencoded' //请求头需要设置，axios默认 'application/json'
//    }
// }).then(res=>{
// 	console.log(res);
// }).catch(err=>{
// 	console.log(err);
// })
