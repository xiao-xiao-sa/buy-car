<template>
	<div class="login">
		<div class="mask"></div>
		<div class="login-row">
			<label>手机号码</label>
			<input type="text" v-model="userPhone" placeholder="请输入手机号码">
		</div>
		<div class="login-row">
			<label>密码</label>
			<input type="text" v-model="userPwd" placeholder="请输入密码">
		</div>
		<div class="login-row-2">
			<router-link to="/Register" class="span">注册</router-link>
			<router-link to="/ForgetPwd" class="span">忘记密码?</router-link>
		</div>
		<button class="login-btn" @click="login">登录</button>
	</div>
</template>

<script>

	export default {
		name:'Login',
		data(){return{
			userPhone:'',
			userPwd:''
		}},
		watch:{
			userPhone:function(){},
			userPwd:function(){}
		},
		created:function(){
			document.title="登录";
		},
		methods:{
			login:function(){
				var userPhone=this.userPhone,
					userPwd=this.userPwd;
				if(!this.testPhone(userPhone)){
					alert("手机号码格式不正确");
					return;
				}
				if(userPwd.length==0){
					alert("请输入密码");
					return;
				}
				//发送请求登录验证，登录成功后将用户信息保存在本地，
			}

		}
	}
</script>

<style lang="less" scoped>
	.login{
		padding-top:100px;
		.mask{
			position: fixed;
			width: 100%;
			height: 100%;
			top:0;
			left: 0;
			background-color: #fff;
			z-index: -1;
		}
		.login-row{
			width: 660px;
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			margin:0 auto;
			height: 100px;
			line-height: 100px;
			font-size: 30px;
			input{
				width:500px;
				border:2px solid #999;
				height: 60px;
				line-height: 60px;
				margin-top:20px;
				border-radius: 10px;
				padding-left: 10px;
				box-sizing: border-box;
			}
		}
		.login-row-2{
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			width: 660px;
			margin:10px auto;
			color: #ff2132;
			font-size: 24px;
		}
		.login-btn{
			width: 660px;
			height: 90px;
			margin:20px auto;
			background-color: #ff2132;
			color: #fff;
			font-size: 30px;
			border-radius: 10px;
		}
	}
</style>