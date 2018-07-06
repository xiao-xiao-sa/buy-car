<template>
	<div class="shop-container">
		<router-link to="/">
			<img :src="shopInfo.src" alt="">
			<p class="title">{{shopInfo.title | changeTextLength}}</p>
			<p class="integration">{{shopInfo.integration}}积分</p>
			<span class="mortar">剩余{{shopInfo.mortar}}</span>
		</router-link>
	</div>
</template>

<script>
	export default {
		name:'IntegrationShop',
		props:['shopInfo'],
		filters:{
			changeTextLength:function(value){
				console.log(value)
				if(value.length>13){
					return value.substr(0,14) + "...";
				}else{
					return value;
				}
				
			}
		},
		methods:{
			
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
		.title{
			font-size:28px;
			color: #333;
			font-weight: 600;
			width: 240px;
		}
		[data-dpr="2"] .title{
			font-size: 56px;
		}
		[data-dpr="3"] .title{
			font-size: 84px;
		}
		.integration{
			font-size:30px;
			color: #ff2132;
			margin-top: 10px; 
		}
		[dpr="2"] .integration{
			font-size: 60px;
		}
		[dpr="3"] .integration{
			font-size: 90px;
		}
		.mortar{
			position: absolute;
			bottom: 20px;
			right: 10px;
			color: #999;
			font-size: 24px;
		}
		[dpr="2"] .mortar{
			font-size: 48px;
		}
		[dpr="3"] .mortar{
			font-size: 72px;
		}
	}
</style>