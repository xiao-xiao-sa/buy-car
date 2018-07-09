<template>
	<div class="my-account">
		<div class="bg-mask"></div>
		<div class="account-item" v-if="accountList && accountList.length>0" v-for="(item,index) in accountList" :key="index">
			<p>{{item.accountNumber}}</p>
		</div>
		<router-link class="add-account" to="/BindAccount">
			<i class="iconfont icon-jia"></i>
			<p>添加账户</p>
		</router-link>

	</div>
</template>

<script>
	export default {
		name:'MyAccount',
		data(){return{
			accountList:null
		}},
		created:function(){
			this.accountList=[
				{"accountNumber":123456789}
			]
		}
	}
</script>

<style lang="less">
	.my-account{
		.bg-mask{
			position:fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background-color: #fff;
			z-index: -2;
		}
		.account-item{
			width: 650px;
			height: 200px;
			margin:24px auto;
			border-radius: 20px;
			background-color: #999;
			position: relative;
			p{
				position: absolute;
				bottom:50px;
				left:50px;
				font-size: 32px;
			}
			[dpr="2"] p{
				font-size: 64px;
			}
			[dpr="3"] p{
				font-size: 96px;
			}
		}
		.add-account{
			display: block;
			width: 650px;
			height: 200px;
			margin:24px auto;
			border:2px dashed #ff2132;
			border-radius: 20px;
			color: #ff2132;
			font-size: 32px;
			i{
				font-size: 60px;
				display: block;
				margin:30px auto 25px;
			}
		}
		[dpr="2"] .add-account{
			font-size: 64px;
			i{
				font-size: 120px;
			}
		}
		[dpr="3"] .add-account{
			font-size: 96px;
			i{
				font-size: 180px;
			}
		}
	}
</style>