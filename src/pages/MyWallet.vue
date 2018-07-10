<template>
	<div class="my-wallet">
		<router-link class="wallet" to="/MyIntegration">
			<span class="left">我的积分</span>
			<span class="center" style="color: #ff2132;">{{myIntegration}}分</span>
			<i class="iconfont icon-jiantou2 right"></i>
		</router-link>
		<router-link class="wallet" to="/MyAccount">
			<span class="left">提现账号</span>
			<span class="center">{{accountNumber | accountLength}}</span>
			<i class="iconfont icon-jiantou2 right"></i>
		</router-link>
	</div>
</template>

<script>
	export default {
		name:'MyWallet',
		data(){return{
			myIntegration:1900,
			accountNumber:null
		}},
		created:function(){
			document.title="我的钱包";
			//从后台获取账户信息
		},
		filters:{
			accountLength:function(val){
				console.log(val)
				if(val==null || val.length==0){
					return 0
				}else{
					return val.length;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.my-wallet{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: #fff;
		.wallet{
			display: block;
			color: #333;
			width: 100%;
			height: 90px;
			line-height: 90px;
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			box-sizing: border-box;
			padding:0 25px;
			border-bottom: 2px solid #efefef;
			.left{
				width: 300px;
				text-align: left;
				font-size: 32px;
			}
			[dpr="2"] .left{
				font-size: 64px;
			}
			[dpr="3"] .left{
				font-size: 96px;
			}
			.center{
				width: 320px;
				text-align: right;
				font-size:32px; 
			}
			[dpr="2"] .center{
				font-size: 64px;
			}
			[dpr="3"] .center{
				font-size: 96px;
			}
			.right{
				font-size: 40px;
				color: #666;
			}
			[dpr="2"] .right{
				font-size: 80px;
			}
			[dpr="3"] .right{
				font-size: 120px;
			}
		}
	}
</style>