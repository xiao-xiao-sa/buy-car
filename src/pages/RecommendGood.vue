<template>
	<div class="all-good-container">
		<shop-1 v-for="(item,index) in goodList" :shopInfo="item" :key="index"></shop-1>
		<p class="no-more">-没有更多商品了-</p>
		<!-- <tab-bar :cur='cur'></tab-bar> -->
	</div>
</template>

<script>
	import Shop1 from '../components/Shop1.vue'
	import TabBar from '../components/TabBar.vue'
	import recommendGoodData from '../assets/data/recommendGoodData'

	export default {
		name:'RecommendGood',
		data(){return{
			goodList:null
		}},
		created:function(){
			document.title = "好车推荐";
			this.goodList = recommendGoodData.goodList;
		},
		components:{
			'tab-bar':TabBar,
			'shop-1':Shop1
		}
	}
</script>

<style lang="less">
	.all-good-container{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 700px;
		margin:20px auto;
		.no-more{
			margin:35px auto 120px;
			font-size: 24px;
			color: #999;
		}
		[dpr="2"] .no-more{
			font-size: 48px;
		}
		[dpr="3"] .no-more{
			font-size: 72px;
		}
	}
	
</style>