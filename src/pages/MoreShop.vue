<template>
	<div class="main">
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
</style>