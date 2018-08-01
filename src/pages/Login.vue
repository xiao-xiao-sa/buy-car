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
  import Qs from 'qs'
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
  //post请求，类似如下操作
  this.axios({
  url:'/api/login.aspx',
  method:'post',
  data:Qs.stringify({       //需要引入qs插件，方便后台读取参数
  mobile:this.userPhone,
  code:this.userPwd
  }),
  headers: {
  'Content-Type': 'application/x-www-form-urlencoded' //请求头需要设置，axios默认 'application/json'
  }
  }).then(res=>{
  //console.log(res);
  if(res.data.resultcode==0)
  this.$router.push({path:'/My'})
  localStorage.setItem('userID', res.data.uid)
  }).catch(err=>{
  console.log(err);
  })
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
		}
		.login-row-2{
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			width: 660px;
			margin:10px auto;
			color: #ff2132;
			font-size: 24px; /*px*/
		}
		.login-btn{
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
