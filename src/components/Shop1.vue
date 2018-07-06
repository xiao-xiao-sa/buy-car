<template>
	<div class="shop-container">
		<router-link to="/">
			<img :src="shopInfo.src" alt="">
			<p class="title">{{shopInfo.title}}</p>
			<p class="conPrice">指导价：&yen;{{shopInfo.construcPrice | priceType}}万</p>
			<p class="price">&yen;{{shopInfo.price | priceType}}万</p>
			<button v-if="shopInfo.isPt == 1" class="pt-btn" @click="toPt(shopInfo.id)">拼团</button>
		</router-link>
	</div>
</template>

<script>
	export default {
		name:'shop1',
		props:['shopInfo'],
		methods:{
			toPt:function(val){
				console.log(val)
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
			font-size: 24px;
			background-color: #ff2132;
			color: #fff;
			line-height: 30px;
			position: absolute;
			bottom: 5px;
			right: 0;
			border-radius: 5px;
		}
		.title{
			font-size:26px;
			color: #333;
			font-weight: 600;
		}
		[data-dpr="2"] .title{
			font-size: 52px;
		}
		[data-dpr="3"] .title{
			font-size: 78px;
		}
		.conPrice{
			font-size: 24px;
			color: #666;
		}
		[data-dpr="2"] .conPrice{
			font-size: 48px;
		}
		[data-dpr="3"] .conPrice{
			font-size: 72px;
		}
		.price{
			font-size:30px;
			color: #ff2132;
			font-weight: 600;
		}
		[data-dpr="2"] .price{
			font-size: 60px;
		}
		[data-dpr="3"] .price{
			font-size: 90px;
		}
	}
</style>