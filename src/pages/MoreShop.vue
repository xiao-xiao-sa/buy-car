<template>
	<div class="more-shop">
		<tab v-model='activeKey'>
			<pane v-for="(item,index1) in allShopList" :label='item.priceRange' :key="index1"  :name='index1'>
				<shop-2 v-for="(item,index2) in item.shopList" :shopInfo="item" :key="index2" ></shop-2>
			</pane>
		</tab>
	</div>
</template>

<script>
	import tab from '../components/Tab.vue'
	import pane from '../components/Pane.vue'
	import Shop2 from '../components/Shop2.vue'
	import moreShopData from '../assets/data/moreShopData'

	export default {
		name:'tabIndex',
		data(){return{
			activeKey:0,
			allShopList:null
		}},
		created:function(){
			this.allShopList = moreShopData.allShopList;
		},
		components:{
			'tab':tab,
			'pane':pane,
			'shop-2':Shop2
		}
	}
</script>

<style>
	.more-shop .tabs{
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
	}
	.more-shop .tabs-bar{
		width: 200px;
		background-color:#f0eff5; 
		height: 100%;
		border-right: #d4d4d4;
	}
	.more-shop .tabs-content{
		width: 550px;
	}
	.more-shop .tabs-item{
		cursor: pointer;
		font-size: 26px;
		display: block;
		height: 100px;
		width: 100%;
		text-align: center;
		line-height: 100px;
		border-bottom: 2px solid #d4d4d4;
	}
	[dpr="2"] .more-shop .tabs-item{
		font-size: 52px;
	}
	[dpr="3"] .more-shop .tabs-item{
		font-size: 78px;
	}
	.more-shop .tabs-item-active{
		color: red;
		background-color: #fff;
	}
</style>