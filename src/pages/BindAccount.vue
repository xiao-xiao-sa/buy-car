<template>
	<div class="bind-account">
		<div class="bind-row">
			<span class="label">账户类型</span>
			<span class="right">银行卡</span>
		</div>
		<div>
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
				<input type="text" name="yzm" v-model="yzm" class="yzm" placeholder="请输入验证码">
				<button class="yzm-btn">获取验证码</button>
			</div>
			<div class="bind-row">
				<label for="accountNumber">账户/账号</label>
				<input type="text" name="accountNumber" v-model="accountNumber" placeholder="请输入账号/账户">
			</div>
			<div class="bind-row">
				<label for="testAccountNumber">确认账号</label>
				<input type="text" name="testAccountNumber" v-model="testAccountNumber" placeholder="请确认账户/账号">
			</div>
			<div class="bind-row">
				<label for="testAccountNumber">省市区</label>
				
			</div>
			<div class="bind-row">
				<label for="bankAccount">开户银行</label>
				<input type="text" name="bankAccount" v-model="bankAccount" placeholder="请输入开户银行">
			</div>
			<div class="bind-row">
				<label for="branchAccount">开户支行</label>
				<input type="text" name="branchAccount" v-model="branchAccount" placeholder="请确认账户/账号">
			</div>
		</div>
		<button class="bind-account-btn" @click="bindSub">绑定</button>
	</div>
</template>

<script>

	export default {
		name:'BindAccount',
		data(){return{
			showLinkage:false, //控制子组件的显示隐藏
        	result:'请选择所在省市',
			accountName:'',
			accountPhone:'',
			yzm:'',
			accountNumber:'',
			testAccountNumber:'',
			bankAccount:'',
			branchAccount:''
		}},
		watch:{
			accountName:function(){},
			accountPhone:function(){},
			yzm:function(){},
			accountNumber:function(){},
			testAccountNumber:function(){},
			bankAccount:function(){},
			branchAccount:function(){}
		},
		methods:{
		    bindSub:function(){
		    	var accountName=this.accountName;
		    	var accountPhone=this.accountPhone;
		    	var accountNumber=this.accountNumber;
		    	var testAccountNumber=this.testAccountNumber;
		    	var bankAccount=this.bankAccount;
		    	var branchAccount=this.branchAccount;
		    	var area=this.result;
		    	console.log(accountName,accountPhone,accountNumber,bankAccount,branchAccount,area);
		    	//需要对数据进行验证然后提交，未完善
		    }
		}
	}
</script>

<style lang="less" scoped>
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
			justify-content: flex-start;
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
				font-size: 26px  !important;
			}
			.right {
				box-sizing: border-box;
				padding-top:24px;
			}
			.yzm{
				width:300px;
			}
			.yzm-btn{
				border:2px solid #ff2132;
				height: 50px;
				width: 172px;
				margin:20px 0 0 20px;
				font-size: 26px;
				color: #ff2132;
				border-radius: 6px;
			}
			
		}
		.bind-account-btn{
			width:700px;
			height: 90px;
			background-color: #ff2132;
			color: #fff;
			font-size: 32px;
			border-radius: 20px;
			margin:60px auto;
		}
		.getCity{
			color: #333;
			width: 500px;
			height: 50px;
			border:2px solid #999;
			border-radius: 10px;
			box-sizing: border-box;
			padding:0 10px;
			line-height: 50px;
			margin-top:20px;
			font-size: 26px;
		}
	}
</style>