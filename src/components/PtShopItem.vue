<template>
	<div class="pt-shop-item">
		<img :src="shopInfo.src" alt="">
		<div>
			<h2 class="title">{{shopInfo.title}}</h2>
			<p>
				<span class="price">&yen;{{shopInfo.price | priceType}}万</span>
				<span class="finish">已拼成{{shopInfo.finish}}件</span>
			</p>
		</div>
		<button >去开团</button>
	</div>
</template>

<script>
	export default {
		name:'ptShopItem',
		props:['shopInfo']
	}
</script>

<style lang="less" scoped>
	.pt-shop-item{
		width: 100%;
		height: 140px;
		box-sizing: border-box;
		padding:25px;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		background-color: #fff;
		border-bottom: 2px solid #efefef;
		img{
			width: 158px;
			height: 71px;
		}
		div{
			width:350px;
			text-align: left;
			margin-left:30px;
			.title{
				font-size:30px;
				font-weight: 500;
			}
			p{
				font-size: 26px;
				margin-top: 10px;
				width: 100%;
				position: relative;
				.price{
					color: #ff2132;
				}
				.finish{
					color: #999;
					position: absolute;
					right: 0;
				}
			}
		}
		button{
			width: 110px;
			height: 50px;
			background-color: #ff2132;
			color: #fff;
			margin-left: 30px;
			border-radius: 10px;
			margin-top:20px;
		}
	}
</style>