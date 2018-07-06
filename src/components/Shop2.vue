<template>
	<div class="shop-container">
		<img :src="shopInfo.src" alt="">
		<div class="right">
			<h2 class="title">{{shopInfo.title}}</h2>
			<h3 v-if="shopInfo.parameter != null" class="parameter">{{shopInfo.parameter}}</h3>
			<p class="price">&yen;{{shopInfo.price | priceType}}万</p>
		</div>
	</div>
</template>

<script>
	export default {
		name:'shop2',
		props:['shopInfo']
	}
</script>

<style lang="less" scoped>
	.shop-container{
		background-color:#fff;
		width: 100%;
		height: 150px;
		display: flex;
		flex-wrap: nowrap;
		justify-content: flex-start;
		padding:20px 25px;
		box-sizing: border-box;
		border-bottom: 1px solid #efefef;
		img{
			width:140px;
			height:100px;
			margin-right: 30px;
		}
		.right .title{
			font-size: 30px;
			font-weight: 580;
		}
		.right .parameter{
			font-size: 30px;
			font-weight: 500;
			color: #999;
		}
		.right .price{
			font-size: 26px;
			font-weight: 580;
			color: #ff2132;
			text-align: left;
		}
	}
</style>