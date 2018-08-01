<template>
	<div class="order-item">
		<div class="top">
			<span>订单编号：{{order.number}}</span>
			<span>{{order.time | timestampToTime}}</span>
		</div>
		<div>
			<slot></slot>
		</div>
		<div class='bottom' v-if="order.status == 0">
			<button class="cancel" @click="cancel">取消订单</button>
			<button class="pay" @click="pay">去付款</button>
		</div>
	</div>
</template>

<script>
	import Qs from 'qs'
	export default {
		name:'orderItem',
		props:['order'],
		methods:{
			cancel:function(){
				var number = this.order.number;
				this.axios({
				   url:'/api/xxxxx/xxxx.xxx',
				   method:'post',
				   data:Qs.stringify({       //需要引入qs插件，方便后台读取参数
				   			number:number
						}),
				   headers: {
				     'Content-Type': 'application/x-www-form-urlencoded' //请求头需要设置，axios默认 'application/json'
				   }
				}).then(res=>{
					console.log(res);
				}).catch(err=>{
					console.log(err);
				})

			},
			pay:function(){
				var number = this.order.number;
				console.log(this.order)
				//直接调用微信支付接口
			}
		},
		filters:{
			timestampToTime:function(val) {
				val = val + '';
				if(val.length<13){
					val=val*1000;
				}else{
					val=val*1;
				}
		        var date = new Date(val),//时间戳为10位需*1000，时间戳为13位的话不需乘1000
		        Y = date.getFullYear() + '-',
		        M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-',
		        D = date.getDate() < 10 ? '0'+date.getDate() : date.getDate() + ' ',
		        h = date.getHours() + ':',
		        m = date.getMinutes(),
		        s = date.getSeconds();
		        return Y+M+D+h+m;
		    }
		}
	}
</script>

<style lang="less" scoped>
	.order-item{
		width: 750px;
		margin-top:20px;
		background-color: #fff;
		.top{
			width: 100%;
			height: 80px;
			font-size: 26px; /*px*/
			color: #333;
			line-height: 80px;
			box-sizing: border-box;
			padding:0 25px;
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			border-bottom: 2px solid #efefef;
		}
		.bottom{
			height: 100px;
			width: 100%;
			background-color: #fff;
			text-align: right;
			box-sizing: border-box;
			padding-right: 50px;
			.cancel{
				width: 160px;
				height: 50px;
				border-radius: 25px;
				font-size: 26px;
				border:1px solid #999;
				margin-top:25px;
				margin-right: 50px;
			}
			.pay{
				width: 160px;
				height: 50px;
				border-radius: 25px;
				font-size: 26px;
				color: #ff2132;
				border:1px solid #ff2132;
				margin-top: 25px;
				
			}
		}
	}
</style>