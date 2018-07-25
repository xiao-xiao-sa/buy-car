import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

// 引入 axios
import axios from 'axios'
//引入qs
import Qs from 'qs'


export default new vuex.Store({
	state:{
		shopCarList:[], //购物车列表
		addressList:null, //收货地址列表
		reviseAddress:null, //要修改的address
		allowBack:true, //允许页面回退,
		carDetailId:null,
		carPicId:null,
		carParameterId:null,
		shopDetailId:'',
		selectCar:null,
		jfShopId:null
	},
	//相当于组件的计算属性
	getters:{},
	mutations:{
		shopCarList:function(state,data){
			state.shopCarList=data;
		},
		// addCart:function(state,id){
		// 	var isAdded = state.shopCarList.find( item => item.id==id);
		// 	if(isAdded){
		// 		isAdded.count++;
		// 	}else{
		// 		state.shopCarList.push({
		// 			id:id,
		// 			count:1
		// 		})
		// 	}
		// },
		// delCart:function(state,id){
		// 	for(var i=0,len=state.shopCarList.length;i<len;i++){
		// 		console.log(state)
		// 		if(state.shopCarList[i].id==id){
		// 			state.shopCarList.splice(i,1);
		// 			console.log(state)
		// 			break;
		// 		}
		// 	}
		// },
		updateCart:function(state,data){
			for(var i=0,len=state.shopCarList.length;i<len;i++){
				if(state.shopCarList[i].id==data.id){
					state.shopCarList[i].count=data.currentCount;
				}
			}
		},
		changeSelect:function(state,data){
			for(var i=0,len=state.shopCarList.length;i<len;i++){
				if(state.shopCarList[i].id==data.id){
					state.shopCarList[i].select=data.select;
				}
			}
		},
		isAllSelect:function(state,data){
			for(var i=0,len=state.shopCarList.length;i<len;i++){
				state.shopCarList[i].select=data;
			}
			console.log(state.shopCarList)
		},
		deleteItem:function(state,id){
			for(var i=0,len=state.shopCarList.length;i<len;i++){
				if(state.shopCarList[i].id==id){
					state.shopCarList.splice(i,1);
					return;
				}
			}
		},
		updateAppSetting:function(state,allowBack){
			state.allowBack=allowBack;
		},
		addressList:function(state,addressList){
			state.addressList=addressList;
		},
		deleteAddress:function(state,val){
			for(var i=0,l=state.addressList.length;i<l;i++){
				if(state.addressList[i].id==val){
					state.addressList.splice(i,1);
					return;
				}
			}
		},
		reviseAddress:function(state,val){
			console.log(val);
			state.reviseAddress=val;
		},
		reviseAddressList:function(state,val){
			state.addressList=val;
		},
		getCarDetail:function(state,val){
			state.carDetailId=val;
			console.log(state.carDetailId)
		},
		getCarPic:function(state,val){
			state.carPicId=val;
			console.log(state.carPicId)
		},
		getCarParameter:function(state,val){
			state.carParameterId=val;
			console.log(state.carParameterId)
		},
		changeIsSelect:function(state,val){
			for(var i=0,l=state.addressList.length;i<l;i++){
				state.addressList[i].isSelect=false;
				if(state.addressList[i].id==val){
					state.addressList[i].isSelect=true;
				}
			}
		},
		shopDetailId:function(state,val){
			state.shopDetailId=val;
		},
		selectCar:function(state,val){
			state.selectCar = val;
		},
		jfShopId:function(state,val){
			state.jfShopId = val;
		}
	},
	actions:{
		// addCart:function(context,id){
		// 	setTimeout(function(){
		// 		context.commit('addCart',id)
		// 	},500)
		// },
		// delCart:function(context,id){
		// 	setTimeout(function(){
		// 		context.commit('delCart',id)
		// 	},500)
		// },
		deleteItem:function(context,id){
			setTimeout(function(){
				context.commit('deleteItem',id)
			},500);
			var userId = '';
			//在vuex的actions中发送异步请求，删除该id对应的商品
			axios({
			   url:'/api/xxxxx/xxxx.xxx',
			   method:'post',
			   data:Qs.stringify({       //需要引入qs插件，方便后台读取参数
			   			id:id,
			   			userId:userId
					}),
			   headers: {
			     'Content-Type': 'application/x-www-form-urlencoded' //请求头需要设置，axios默认 'application/json'
			   }
			}).then(res=>{
				console.log(res);
				context.commit('deleteItem',id)
			}).catch(err=>{
				console.log(err);
			})
		},
		deleteAddress:function(content,val){
			setTimeout(function(){
				content.commit('deleteAddress',val)
			},500)
			var userId = '';
			//在vuex的actions中发送异步请求，删除该id对应的商品
			axios({
			   url:'/api/xxxxx/xxxx.xxx',
			   method:'post',
			   data:Qs.stringify({       //需要引入qs插件，方便后台读取参数
			   			id:id,
			   			userId:userId
					}),
			   headers: {
			     'Content-Type': 'application/x-www-form-urlencoded' //请求头需要设置，axios默认 'application/json'
			   }
			}).then(res=>{
				console.log(res);
				context.commit('deleteAddress',id)
			}).catch(err=>{
				console.log(err);
			})

		},
		changeIsSelect:function(content,val){
			setTimeout(function(){
				content.commit('changeIsSelect',val)
			})
		}
	}
})