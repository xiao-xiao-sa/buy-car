import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);


export default new vuex.Store({
	state:{
		shopCarList:[]
	},
	//相当于组件的计算属性
	getters:{},
	mutations:{
		shopCarList:function(state,data){
			state.shopCarList=data;
		},
		addCart:function(state,id){
			var isAdded = state.shopCarList.find( item => item.id==id);
			if(isAdded){
				isAdded.count++;
			}else{
				state.shopCarList.push({
					id:id,
					count:1
				})
			}
		},
		delCart:function(state,id){
			for(var i=0,len=state.shopCarList.length;i<len;i++){
				console.log(state)
				if(state.shopCarList[i].id==id){
					state.shopCarList.splice(i,1);
					console.log(state)
					break;
				}
			}
		},
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
		}
	},
	actions:{
		addCart:function(context,id){
			setTimeout(function(){
				context.commit('addCart',id)
			},500)
		},
		delCart:function(context,id){
			setTimeout(function(){
				context.commit('delCart',id)
			},500)
		},
		updateCart:function(context,data){
			setTimeout(function(){
				context.commit('updateCart',data)
			},500)
		},
		deleteItem:function(context,id){
			setTimeout(function(){
				context.commit('deleteItem',id)
			},500);
		}
	}
})