<template>
	<div class="car-detail-list">
		<div v-for="(item,index1) in allShopList" :key="index1" class="brand">
			<h2 class="brand-title">{{item.brand}}</h2>
			<div class="brand-shop">
				<shop-3 v-for="(shop,index2) in item.shopList" :key="index2" :shopInfo='shop' @click.native="toPic(shop.id)"></shop-3>
			</div>
		</div>
	</div>
</template>

<script>
	import Shop3 from '../components/Shop3.vue'
	//import carDetailListData from '../assets/data/carDetailListData'

	export default {
		name:'CarDetailList',
		data(){return{
			allShopList:null
		}},
		created:function(){
			//this.allShopList=carDetailListData.allShopList;
			this.allShopList=this.$store.state.selectCar;
		},
		methods:{
			toPic:function(val){
				console.log(val+'pic');
				this.$store.commit('getCarPic',val);
				this.$router.push({path:'/CarPic'})
			}
		},
		components:{
			'shop-3':Shop3
		}
	}
</script>

<style lang="less">
	.car-detail-list{
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