<template>
	<div>
		<swiper :swiper="bannerList"></swiper>
		<nav-list :navList="navList"></nav-list>
		<div class="all-shop-group">
			<shop-group v-for="(item,index1) in shopGroup" :key="index1" :group="item">
				<shop-1 v-for="(shop,index2) in item.shopList" :key="index2" :shopInfo="shop"></shop-1>
			</shop-group>
		</div>
		<tab-bar :cur='cur'></tab-bar>
	</div>
</template>

<script>
	import TabBar from '../components/TabBar.vue'
	import swiper from '../components/Banner.vue'
	import NavList from '../components/NavList.vue'
	import ShopGroup from '../components/ShopGroup.vue'
	import Shop1 from '../components/Shop1.vue'
	import indexData from '../assets/data/indexData'
	export default {
		name:'Index',
		data(){return{
			cur:'Index',
			bannerList: null,
			navList:null,
			shopGroup:null
		}},
		created:function(){
			document.title = "首页";
			this.bannerList=indexData.bannerList;
			this.navList = indexData.navList;
			this.shopGroup = indexData.shopGroup;
		},
		components:{
			'tab-bar':TabBar,
			'swiper':swiper,
			'nav-list':NavList,
			'shop-group':ShopGroup,
			'shop-1':Shop1
		}
	}
</script>

<style>
	.all-shop-group{
		margin-bottom: 120px;
	}
</style>