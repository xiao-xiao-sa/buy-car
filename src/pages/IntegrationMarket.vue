<template>
	<div class="integration-market">
		<div class="search">
			<input type="text" placeholder="请输入关键字搜索">	
		</div>
		<div class="filter-btn">
			<button @click="changeSale">
				商品销量
				<i class="iconfont icon-jiantouxia" v-if="saleSort == true"></i>
				<i class="iconfont icon-jiantoushangxiao" v-else></i>
			</button>
			<button @click="changeIntegration">
				积分价值
				<i class="iconfont icon-jiantouxia" v-if="integrationSort == true"></i>
				<i class="iconfont icon-jiantoushangxiao" v-else></i>
			</button>
		</div>
		<div class="inte-shop-container">
			<integration-shop v-for="(item,index) in shopList" :shopInfo="item" :key="index"></integration-shop>
		</div>
		<!-- <tab-bar></tab-bar> -->
	</div>
</template>

<script>
	import IntegrationShop from '../components/IntegrationShop.vue'
	import TabBar from '../components/TabBar.vue'
	import integrationShopData from '../assets/data/integrationShopData'

	export default {
		name:'IntegrationMarket',
		data(){return{
			shopList:null,
			saleSort:true,
			integrationSort:true
		}},
		created:function(){
			document.title = "积分商城";
			this.shopList = integrationShopData.shopList;
		},
		methods:{
			changeSale:function(){
				this.saleSort = !this.saleSort;
				console.log(this.saleSort)
			},
			changeIntegration:function(){
				this.integrationSort = !this.integrationSort;
			}
		},
		components:{
			'integration-shop':IntegrationShop,
			'tab-bar':TabBar
		}
	}
</script>

<style lang="less">
	.integration-market{
		.inte-shop-container{
			width: 700px;
			margin:0 auto 120px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		.filter-btn{
			width: 100%;
			background-color: #fff;
			height: 62px;
			line-height: 62px;
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-around;
			box-sizing: border-box;
			padding:0 100px;
		}
		.filter-btn button{
			font-size: 24px;
			color: #333;
		}
		.filter-btn button i{
			width: 24px;
			display: inline-block;
		}
		[dpr="2"] .filter-btn button{
			font-size: 48px;
		}
		[dpr="3"] .filter-btn button{
			font-size: 72px;
		}
		.search{
			width: 100%;
			margin:20px auto;
			height: 60px;
		}
		.search input{
			width: 640px;
			height: 100%;
			text-align: center;
			border-radius: 10px;
		}
	}
</style>