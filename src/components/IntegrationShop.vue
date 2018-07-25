<template>
	<div class="shop-container" @click="toJfShopDetail">
		<img :src="shopInfo.src" alt="">
		<p class="title">{{shopInfo.title | changeTextLength}}</p>
		<p class="integration">{{shopInfo.integration}}积分</p>
		<span class="mortar">剩余{{shopInfo.mortar}}</span>
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
			toJfShopDetail:function(){
				this.$store.commit('jfShopId',this.shopInfo.id);
				this.$router.push({path:'/JfShopDetail'})
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
		.title{
			font-size:28px; /*px*/
			color: #333;
			font-weight: 600;
			width: 240px;
		}
		.integration{
			font-size:30px; /*px*/
			color: #ff2132;
			margin-top: 10px; 
		}
		.mortar{
			position: absolute;
			bottom: 20px;
			right: 10px;
			color: #999;
			font-size: 24px; /*px*/
		}
	}
</style>