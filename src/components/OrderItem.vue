<template>
	<div class="order-item">
		<div class="top">
			<span>订单编号：{{order.number}}</span>
			<span>{{order.time | timestampToTime}}</span>
		</div>
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name:'orderItem',
		props:['order'],
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

<style lang="less">
	.order-item{
		width: 750px;
		margin-top:20px;
		background-color: #fff;
		.top{
			width: 100%;
			height: 80px;
			font-size: 26px;
			color: #333;
			line-height: 80px;
			box-sizing: border-box;
			padding:0 25px;
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			border-bottom: 2px solid #efefef;
		}
	}
</style>