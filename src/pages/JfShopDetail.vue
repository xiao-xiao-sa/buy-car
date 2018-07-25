<template>
	<div class="jf-shop-detail">
		<swiper :swiper="jfShopInfo.bannerList"></swiper>
		<div class="detail-1">
			<h2 class="title">{{jfShopInfo.title | changeTextLength}}</h2>
			<p class="price">{{jfShopInfo.integration}}积分</p>
		</div>
		<div class="detail-2">
			<h2>商品详情</h2>
			<p>产地：{{jfShopInfo.origin}}</p>
			<p>品牌：{{jfShopInfo.brand}}</p>
			<p>扁平比：{{jfShopInfo.flatRatio}}</p>
			<p>轮播规格：{{jfShopInfo.specification}}</p>
			<p>速度级别：{{jfShopInfo.speed}}</p>
			<p>负荷指数：{{jfShopInfo.load}}</p>
			<p>轮辋直径：{{jfShopInfo.diameter}}</p>
			<p>胎面宽度：{{jfShopInfo.width}}</p>
		</div>
		<div class="detail-3">
			<img :src="jfShopInfo.detailImg" alt="">
		</div>
		<button class="exchange" @click="exchange">立即兑换</button>
	</div>
</template>

<script>
	import swiper from '../components/Banner.vue'
	import jfShopDetailData from '../assets/data/jfShopDetailData'
	export default {
		name:'ShopDetail',
		data(){return{
			jfShopInfo:null,
			colorId:0
		}},
		created:function(){
			this.jfShopInfo = jfShopDetailData.jfShopInfo;
			console.log(jfShopInfo)
			var id = this.$store.state.jfShopId;
			console.log(id)
			this.axios.get(url,{params:{id:id}})
				.then(res=>{
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
			
		},
		filters:{
			changeTextLength:function(value){
				if(value.length>30){
					return value.substr(0,31) + "...";
				}else{
					return value;
				}
				
			}
		},
		methods:{
			exchange:function(){
				//立即兑换，待完善
			}
		},
		components:{
			'swiper':swiper,
		}
	}

</script>

<style lang="less" scoped>
	.jf-shop-detail{
		.detail-1{
			width: 100%;
			height: 150px;
			background-color: #fff;
			border-top: 10px solid #000;
			margin-bottom: 20px;
			box-sizing: border-box;
			padding:30px 50px;
			text-align: left;
			.title{
				font-size: 30px; /*px*/
				font-weight: 700px;
				color: #000;
			}
			.price{
				font-size: 28px; /*px*/
				color: #ff2132;
				font-weight: 700;
				margin-top:20px;
			}
		}
		.detail-2{
			width: 100%;
			background-color: #fff;
			box-sizing: border-box;
			padding:30px 50px;
			text-align: left;
			font-size: 26px; /*px*/
			h2{
				width:100%;
				box-sizing: border-box;
				padding-left: 10px;
				border-left: 5px solid #ff2132;
				margin:20px 0;
				color: #000;
				font-size: 28px; /*px*/
			}	
		}
		.detail-3{
			width: 100%;
			box-sizing: border-box;
			padding:25px;
			background-color: #fff;
			margin-top:20px;
			margin-bottom: 120px;
			img{
				width: 700px;
				display: inline-block;
				margin:0 auto;
			}
		}
		.exchange{
			background-color: #ff2132;
			width: 100%;
			height: 100px;
			position: fixed;
			bottom: 0;
			left: 0;
			color: #fff;
			font-size: 28px;
		}
	}
</style>