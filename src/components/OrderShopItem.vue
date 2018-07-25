<template>
	<div class="order-shop-item">
		<img :src="shopInfo.src" alt="">
		<div class="right">
			<h2>{{shopInfo.title | changeTextLength}}</h2>
			<p>&yen;{{shopInfo.price | priceType}}万</p>
			<span>×{{shopInfo.count}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'orderShopItem',
		props:['shopInfo'],
		filters:{
			changeTextLength:function(value){
				if(value.length>23){
					return value.substr(0,24) + "...";
				}else{
					return value;
				}
				
			}
		}
	}
</script>

<style lang="less">
	.order-shop-item{
		width: 100%;
		height: 130px;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		box-sizing: border-box;
		padding:20px 25px;
		border-bottom: 2px solid #efefef;
		img{
			width: 148px;
			height: 88px;
		}
		.right{
			width:500px;
			text-align: left;
			font-size: 28px; /*px*/
			color: #333;
			position: relative;
			p{
				margin-top: 20px;
			}
			span{
				position: absolute;
				right: 0;
				bottom: 0;
				color: #999;
			}
		}
	}
</style>