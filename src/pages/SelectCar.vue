<template>
	<div>
		<nav-list :navList="navList"></nav-list>
		<div class="all-shop-container">
			<div v-for="(item,index1) in allShopList" :key="index1" class="brand">
				<h2 class="brand-title">{{item.brand}}</h2>
				<div class="brand-shop">
					<shop-2 v-for="(shop,index2) in item.shopList" :key="index2" :shopInfo='shop'></shop-2>
				</div>
			</div>
		</div>
		<tab-bar :cur='cur'></tab-bar>
	</div>
</template>

<script>
	import TabBar from '../components/TabBar.vue'
	import NavList from '../components/NavList.vue'
	import Shop2 from '../components/Shop2'
	import selectCarData from '../assets/data/selectCarData'
	export default {
		name:'Index',
		data(){return{
			cur:'SelectCar',
			navList:null,
			allShopList:null
		}},
		created:function(){
			this.navList=selectCarData.navList;
			this.allShopList=selectCarData.allShopList;
			this.get(url)
				.then(res=>{
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
			
		},
		beforeRouteLeave (to, from, next) {
		    // 导航离开该组件的对应路由时调用
    		// 可以访问组件实例 `this`
		    console.log('我去哪里',to.path)
		    if(to.path == "\/CarParameterList" || to.path == "\/CarDetailList" || to.path == "\/CarPicList"){
		    	console.log(this.allShopList)
		    	this.$store.commit('selectCar',this.allShopList);
		    	next()
		    }else{
		    	next()
		    	//console.log(this.allShopList)
		    }
		},
		components:{
			'tab-bar':TabBar,
			'nav-list':NavList,
			'shop-2':Shop2
		}
	}
</script>

<style lang="less" scoped>
	.all-shop-container{
		width: 100%;
		margin-bottom: 120px;
		.brand-title{
			width: 100%;
			padding-left:25px;
			box-sizing: border-box;
			text-align: left; 
			height: 76px;
			font-size: 32px; /*px*/
			font-weight: 600;
			line-height: 76px;
		}
		.brand-shop{
			background-color: #fff;
		}
		
	}
</style>