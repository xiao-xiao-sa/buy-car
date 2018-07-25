<template>
	<div class="shop-container" @click="toShopDetail">
		<img :src="shopInfo.src" alt="">
		<p class="title">{{shopInfo.title}}</p>
		<p class="conPrice">指导价：&yen;{{shopInfo.construcPrice | priceType}}万</p>
		<p class="price">&yen;{{shopInfo.price | priceType}}万</p>
		<button v-if="shopInfo.isPt == 1" class="pt-btn">拼团</button>
	</div>
</template>

<script>
	export default {
		name:'shop1',
		props:['shopInfo'],
		created:function(){
			console.log(this.shopInfo)
		},
		methods:{
			toShopDetail:function(){
				this.$store.commit('shopDetailId',this.shopInfo.id);
				this.$router.push({path:'/shopDetail'})
			}
		}
	}
</script>

<style lang="less" scoped>
	.shop-container{
		width: 340px;
		position: relative;
		background-color:#fff;
		padding-bottom:20px;
		margin-top:20px;
		img{
			width: 100%;
			height: 230px;
		}
		p{
			text-align: left;
			padding-left: 20px;
		}
		.pt-btn{
			width: 70px;
			height: 30px;
			font-size: 24px; /*px*/
			background-color: #ff2132;
			color: #fff;
			line-height: 30px;
			position: absolute;
			bottom: 5px;
			right: 0;
			border-radius: 5px;
		}
		.title{
			font-size:26px; /*px*/
			color: #333;
			font-weight: 600;
		}
		.conPrice{
			font-size: 24px; /*px*/
			color: #666;
		}
		.price{
			font-size:30px; /*px*/
			color: #ff2132;
			font-weight: 600;
		}
	}
</style>