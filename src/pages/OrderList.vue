<template>
	<div class="order-detail">
		<tab v-model='activeKey'>
			<pane  label='待付款'  name='0'>
				<order-item v-for="(item0,index0) in order0" v-if="order0.length>0" :order="item0" :key="index0">
					<order-shop-item v-for="(item00,index00) in item0.shopList" :shopInfo="item00" :key="index00"></order-shop-item>
				</order-item>
				<div v-if="order0.length == 0" class="no-order">
					<img src="../assets/image/no-order.png" alt="">
					<p>暂无待付款订单</p>
				</div>
			</pane>
			<pane label="已完成"  name="1">
				<order-item v-if="order1.length>0"  v-for="(item1,index1) in order1" :order="item1" :key="index1">
					<order-shop-item v-for="(item11,index11) in item1.shopList" :shopInfo="item11" :key="index11"></order-shop-item>
				</order-item>
				<div v-if="order1.length == 0" class="no-order">
					<img src="../assets/image/no-order.png" alt="">
					<p>暂无已完成订单</p>
				</div>
			</pane>
		</tab>
	</div>
</template>

<script>
	import tab from '../components/Tab.vue'
	import pane from '../components/Pane.vue'
	import OrderItem from '../components/OrderItem.vue'
	import OrderShopItem from '../components/OrderShopItem.vue'
	import orderData from '../assets/data/orderData'
	import Qs from 'qs'

	export default {
		name:'OrderDetail',
		data(){return{
			activeKey:0,
			order0:null,
			order1:null,
			userId:''
		}},
		created:function(){
			//var userId=this.userId;
			// this.axios({
			//    url:'/api/xxxxx/xxxx.xxx',
			//    method:'post',
			//    data:Qs.stringify({       //需要引入qs插件，方便后台读取参数
			//    			userId:userId
			// 		}),
			//    headers: {
			//      'Content-Type': 'application/x-www-form-urlencoded' //请求头需要设置，axios默认 'application/json'
			//    }
			// }).then(res=>{
			// 	console.log(res);
			// 	var orderList = res.orderList;
			// 	this.order0=[];this.order1=[];
			// 	for(var i=0,l=orderList.length;i<l;i++){
			// 		var p=orderList[i];
			// 		if(p.status==0){
			// 			this.order0.push(p);
			// 		}else if(p.status==1){
			// 			this.order1.push(p)
			// 		}
			// 	}
			// }).catch(err=>{
			// 	console.log(err);
			// })
			var orderList = orderData.orderList;
			this.order0=[];this.order1=[];
			for(var i=0,l=orderList.length;i<l;i++){
				var p=orderList[i];
				if(p.status==0){
					this.order0.push(p);
				}else if(p.status==1){
					this.order1.push(p)
				}
			}
		},
		components:{
			'tab':tab,
			'pane':pane,
			'order-item':OrderItem,
			'order-shop-item':OrderShopItem
		}
	}
</script>

<style lang="less">
.order-detail{
	.tabs{
		width: 750px;
	}
	.tabs-bar{
		width: 750px;
		box-sizing: border-box;
		padding:0 100px;
		background-color:#fff; 
		height: 72px;
		line-height: 72px;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-around;
	}
	.tabs-content{
		width: 100%;
	}
	.tabs-item{
		font-size: 32px; /*px*/
		color: #333;
	}
	.tabs-item-active{
		color: #ff2132;
		position: relative;
	}
	.tabs-item-active::after{
		content:'';
		width:120px;
		height: 2px;
		position: absolute;
		border-bottom: 2px solid #ff2132;
		bottom:0px;
		left:-10px;
	}
	.no-order{
		margin-top:100px;
		font-size: 30px; /*px*/
		color: #666;
		img{
			width: 200px;
			height: 200px;
			margin-bottom: 20px;
		}
	}
}
</style>