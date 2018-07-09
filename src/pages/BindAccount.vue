<template>
	<div class="bind-account">
		<div class="bind-row">
			<span class="label">账户类型</span>
			<div>
				<span>银行卡
					<i class="iconfont icon-weixuanzhong" v-if="accountType == 1"></i>
					<i class="iconfont icon-xuanzhong" v-if="accountType == 0"></i>
				</span>
				<span>支付宝
					<i class="iconfont icon-weixuanzhong" v-if="accountType == 0"></i>
					<i class="iconfont icon-xuanzhong" v-if="accountType == 1"></i>
				</span>
			</div>
		</div>
		<div class="bind-row">
			<label for="accountName">姓名</label>
			<input type="text" name="accountName" v-model="accountName" placeholder="请输入开户人姓名">
		</div>
		<div class="bind-row">
			<label for="accountPhone">手机号码</label>
			<input type="text" name="accountPhone" v-model="accountPhone" placeholder="请输入手机号">
		</div>
		<div class="bind-row">
			<label for="yzm">验证码</label>
			<input type="text" name="yzm" v-model="yzm" placeholder="请输入验证码">
			<button>获取验证码</button>
		</div>
		<div class="bind-row">
			<label for="accountNumber">账户/账号</label>
			<input type="text" name="accountNumber" v-model="accountNumber" placeholder="请输入账号/账户">
		</div>
		<div class="bind-row">
			<label for="testAccountNumber">确认账号</label>
			<input type="text" name="testAccountNumber" v-model="testAccountNumber" placeholder="请确认账户/账号">
		</div>
		<button>绑定</button>
	</div>
</template>

<script>
	export default {
		name:'BindAccount',
		data(){return{
			accountType:0 ,//0-银行卡，1-支付宝
			accountName:'',
			accountPhone:'',
			yzm:'',
			accountNumber:'',
			testAccountNumber:''
		}},
		watch:{
			accountName:function(){},
			accountPhone:function(){},
			yzm:function(){},
			accountNumber:function(){},
			testAccountNumber:function(){}
		}

	}
</script>

<style lang="less">
	.bind-account{
		margin-top:20px;
		width: 100%;
		.bind-row{
			height: 90px;
			width: 100%;
			padding:0 30px;
			box-sizing: border-box;
			text-align: left;
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			font-size: 32px;
			background-color: #fff;
			label,.label{
				width: 160px;
				line-height: 90px;
			}
			input{
				width:500px;
				height: 50px;
				border:2px solid #999;
				border-radius: 10px;
				box-sizing: border-box;
				padding:0 10px;
				margin-top:20px;
			}
		}
	}
</style>