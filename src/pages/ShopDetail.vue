<template>
	<div class="shop-detail">
		<swiper :swiper="shopDetail.bannerList"></swiper>
		<div class="detail-1">
			<h2 class="title">{{shopDetail.title | changeTextLength}}</h2>
			<p class="cprice">指导价 &yen;{{shopDetail.construcPrice | priceType}}万</p>
			<p class="price">实际价 &yen;{{shopDetail.price | priceType}}万</p>
		</div>
		<div class="detail-2">
			<p>汽车品牌：{{shopDetail.brand}}</p>
			<p>规格型号：{{shopDetail.model}}</p>
			<p>生产地：{{shopDetail.origin}}</p>
			<p>排气量：{{shopDetail.displacement}}</p>
			<div class="color">
				<p>首选颜色：</p>
				<ul>
					<li v-for="(item,index) in shopDetail.colors" :key="index">
						<i class="iconfont icon-weixuanzhong" v-if="index != colorId" @click="changeColor(index)"></i>
						<i class="iconfont icon-xuanzhong" v-if="index == colorId" style="color:#ff2132;"></i>
						<span>{{item}}</span>
					</li>
				</ul>
			</div>
			<div >
				<p>其他参数：</p>
				<span @click="toParameter(shopDetail.id)" class="other">参数详情</span>
			</div>
		</div>
		<div class="bottom">
			<button class="kf">客服咨询</button>
			<button class="zf">
				<p v-if="shopDetail.isPt == 1">立即开团</p>
				<span>支付定金&yen;10000.00</span>
			</button>
		</div>
	</div>
</template>

<script>
	import swiper from '../components/Banner.vue'
	import shopDetailData from '../assets/data/shopDetailData'

	export default {
		name:'ShopDetail',
		data(){return{
			shopDetail:null,
			colorId:0
		}},
		created:function(){
			this.shopDetail=shopDetailData.shopDetail;
			var id = this.$store.state.shopDetailId;
			console.log(id);
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
			changeColor:function(val){
				this.colorId=val;
			},
			toParameter:function(val){
				console.log(val+'parameter');
				this.$store.commit('getCarParameter',val);
				this.$router.push({path:'/CarParameter'});
			}
		},
		components:{
			'swiper':swiper,
		}
	}

</script>

<style lang="less" scoped>
	.shop-detail{
		.detail-1{
			width: 100%;
			height: 228px;
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
			.cprice{
				font-size: 24px; /*px*/
				color: #999;
				margin-top: 20px;
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
			.color{
				margin-bottom: 20px;
				ul{
					margin:20px 0;
					display: flex;
					flex-wrap: wrap;
					justify-content: flex-start;
					li{
						margin-right: 20px;
						i{
							font-size: 40px;
						}
					}
				}
			}
			.other{
				display: block;
				margin-left: 20px;
				margin-top:20px;
				color: #ff2132;
			}
		}
		.detail-2>p{
			font-size: 26px; /*px*/
			color: #666;
			margin-bottom: 20px;
		}
		.bottom{
			position: fixed;
			width: 100%;
			bottom: 0;
			left: 0;
			height: 100px;
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			.kf{
				width: 50%;
				height: 100%;
				box-sizing: border-box;
				background-color: #fff;
				font-size: 32px;
			}
			.zf{
				width: 50%;
				height: 100%;
				box-sizing: border-box;
				background-color: #ff2132;
				color: #fff;
			}
		}
	}
</style>