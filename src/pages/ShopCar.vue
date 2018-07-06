<template>
	<div>
		<div class="all-shop" v-if="shopCarList && shopCarList.length>0">
			<div class="shop-car-title">
				<i class="iconfont icon-weixuanzhong" v-if="allSelect == false" @click="isAllSelect"></i>
				<i class="iconfont icon-xuanzhong" v-if="allSelect == true" style="color: #ff2132;" @click="isAllSelect"></i>
				<span>4s专卖店</span>
			</div>
			<shop-car-item v-for="(item,index) in shopCarList" :shopInfo="item" :key="index"></shop-car-item>
		</div>
		<div class="shop-total" v-if="shopCarList && shopCarList.length>0">
			<div class="left">
				<i class="iconfont icon-weixuanzhong" v-if="allSelect == false" @click="isAllSelect"></i>
				<i class="iconfont icon-xuanzhong" v-if="allSelect == true" style="color: #ff2132;" @click="isAllSelect"></i>
				<span>全选</span>
			</div>
			<p class="center">合计：<span :class="{'active':totalPrice > 0}">&yen;{{totalPrice | priceType}}万</span></p>
			<button class="right" :class="{'active':totalPrice > 0}" :disabled="totalPrice == 0">结算</button>
		</div>
		<div class="no-shop" v-if="!shopCarList || shopCarList.length == 0">
			<img src="../assets/image/no-shop.png" alt="">
			<p>购物车空空如也</p>
			<router-link to="/" class="toIndex">去逛逛商城</router-link>
		</div>
		<tab-bar :cur='cur'></tab-bar>
	</div>
</template>

<script>
	import TabBar from '../components/TabBar.vue'
	import ShopCarItem from '../components/ShopCarItem.vue'
	import shopCarData from '../assets/data/shopCarData'
	export default {
		name:'Index',
		data(){return{
			cur:'ShopCar'
		}},
		computed:{
			totalPrice:function(){
				console.log(this.shopCarList)
				var totalPrice=0;
				for(var i=0,l=this.shopCarList.length;i<l;i++){
					var item = this.shopCarList[i];
					if(item.select){
						totalPrice+=item.price*item.count;
					}
				}
				return totalPrice;
			},
			allSelect:function(){
				if(this.shopCarList && this.shopCarList.length>0){
					for(var i=0,l=this.shopCarList.length;i<l;i++){
						if(this.shopCarList[i].select == false){
							break;
						}
					}
					if(i == l){
						return true
					}else{
						return false;
					}
				}else{
					return false
				}
			},
			shopCarList:function(){
				var shopCarList = this.$store.state.shopCarList;
				return shopCarList;
			}

		},
		created:function(){
			this.$store.commit("shopCarList",shopCarData.shopCarList)
		},
		methods:{
			isAllSelect:function(){
				this.$store.commit("isAllSelect",!this.allSelect);
			}
		},
		components:{
			'tab-bar':TabBar,
			'shop-car-item':ShopCarItem
		}
	}
</script>

<style lang="less" scoped>
	.all-shop{
		width: 100%;
		background-color: #fff;
		.shop-car-title{
			height: 80px;
			line-height: 80px;
			text-align: left;
			width: 100%;
			box-sizing: border-box;
			padding-left: 25px;
			font-size: 26px;
			i{
				font-size: 40px;
				display: inline-block;
				margin-right: 30px;
			}
		}
	}
	.shop-total{
		height: 100px;
		width: 100%;
		display: flex;
		flex-wrap: nowrap;
		background-color: #fff;
		position: fixed;
		left: 0;
		bottom: 100px;
		line-height: 100px;
		box-sizing: border-box;
		padding-left: 25px;
		.left{
			font-size: 28px;
			width: 125px;
			i{
				font-size: 40px;
			}
		}
		.center{
			width: 400px;
			text-align: right;
			box-sizing: border-box;
			padding-right: 20px;
			font-size: 28px;
			color:#999;
			span{
				font-size: 24px;
			}
			span.active{
				color: #ff2132;
			}
		}
		.right{
			width: 200px;
			font-size: 28px;
			color: #999;
			background-color: #e5e5e5;
		}
		.right.active{
			color: #fff;
			background-color: #ff2132;
		}
	}
	.no-shop{
		margin-top: 200px;
		img{
			width: 200px;
			height: 200px;
		}
		p{
			font-size: 30px;
			color: #999;
			margin-top: 30px;
		}
		.toIndex{
			width: 270px;
			height: 66px;
			font-size: 32px;
			color: #fff;
			background-color: #ff2132;
			border-radius: 5px;
			line-height: 66px;
			text-align: center;
			display: inline-block;
			margin-top:30px;
		}

	}
</style>