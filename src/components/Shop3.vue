<template>
	<div class="shop-container">
		<img :src="shopInfo.src" alt="">
		<div class="right">
			<h2 class="title">{{shopInfo.title}}</h2>
		</div>
	</div>
</template>

<script>
	export default {
		name:'shop3',
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
			font-size: 30px; /*px*/
			font-weight: 580;
			margin-top:20px;
		}
	}
</style>