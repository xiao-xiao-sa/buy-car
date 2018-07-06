<template>
	<div>
		<pt-shop-item v-for="(item,index) in shopList" :shopInfo="item" :key="index"></pt-shop-item>
	</div>
</template>

<script>
	import PtShopItem from '../components/PtShopItem.vue'
	import ptShopData from '../assets/data/ptShopData'

	export default {
		name:'PtShop',
		data(){return{
			shopList:null
		}},
		created:function(){
			this.shopList = ptShopData.shopList;
		},
		components:{
			'pt-shop-item':PtShopItem
		}
	}
</script>