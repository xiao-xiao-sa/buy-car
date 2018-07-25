<template>
	<div class="register">
		<div class="mask"></div>
		<div class="register-row">
			<label>手机号码</label>
			<input type="text" v-model="userPhone" placeholder="请输入手机号码">
		</div>
		<div class="register-row-2">
			<label>验证码</label>
			<input type="text" v-model="yzm" placeholder="请输入验证码">
			<button>获取验证码</button>
		</div>
		<div class="register-row">
			<label>密码</label>
			<input type="password" v-model="userPwd" placeholder="请设置密码">
		</div>
		<div class="register-row">
			<label>确认密码</label>
			<input type="password" v-model="userPwda" placeholder="请再次输入密码">
		</div>
		<button class="register-btn" @click="register">注册</button>
	</div>
</template>

<script>
	import Qs from 'qs'
	export default {
		name:'Register',
		data(){return{
			userPhone:'',
			userPwd:'',
			userPwda:'',
			yzm:''
		}},
		watch:{
			userPhone:function(){},
			userPwd:function(){},
			userPwda:function(){},
			yzm:function(){}
		},
		methods:{
			register:function(){
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.register{
		padding-top: 100px;
		.mask{
			position: fixed;
			width: 100%;
			height: 100%;
			top:0;
			left: 0;
			background-color: #fff;
			z-index: -1;
		}
		.register-row{
			width: 660px;
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			margin:0 auto;
			height: 100px;
			line-height: 100px;
			font-size: 30px; /*px*/
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
			label{
				display: inline-block;
				width: 160px;
			}
		}
		.register-row-2{
			font-size: 30px; /*px*/
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			width: 660px;
			margin:0 auto;
			height: 100px;
			line-height: 100px;
			label{
				display: inline-block;
				width: 160px;
			}
			input{
				height: 60px;
				line-height: 60px;
				margin-top:20px;
				border-radius: 10px;
				padding-left: 10px;
				box-sizing: border-box;
				border:2px solid #999;
				width:320px;
				margin-right: 30px;
			}
			button{
				height: 60px;
				line-height: 60px;
				border:2px solid #ff2132;
				border-radius: 10px;
				font-size: 20px; /*px*/
				display: inline-block;
				width:150px;
				margin-top:20px;
				color: #ff2132;
			}
		}
		.register-btn{
			width: 660px;
			height: 90px;
			margin:20px auto;
			background-color: #ff2132;
			color: #fff;
			font-size: 30px; /*px*/
			border-radius: 10px;
		}
	}
</style>