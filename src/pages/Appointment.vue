<template>
	<div class="appointment-container">
		<div class="top">
			<img :src="src" alt="">
		</div>
		<div class="bottom">
			<div class="row">
				<label for="userName">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</label>
				<input type="text" name="userName" v-model.trim="userName" placeholder="请输入姓名">
			</div>
			<div class="row">
				<label for="userPhone">手机号码</label>
				<input type="text" name="userPhone" v-model.trim="userPhone" placeholder="请输入手机号码">
			</div>
			<button @click="repairSubmit" class="sub-btn">提交</button>
		</div>
	</div>
</template>

<script>
  import Qs from 'qs'

  export default {
  name:'Repair',
  data(){return{
  src:require('../assets/image/123.jpg'),
  userName:'',
  userPhone:''
  }},
  watch:{
  userName:function(){},
  userPhone:function(){},
  detail:function(){}
  },
  methods:{
  repairSubmit:function(){
  var userName = this.userName;
  var userPhone = this.userPhone;
  var uid=localStorage.getItem('userID')
  if(userName == ''){
  alert("请输入姓名");
  return;
  }
  if(!this.testPhone(userPhone)){
  alert("手机号码为11位，请输入有效号码");
  return;
  }
  this.axios({
  url:'/api/feedback.aspx',
  method:'post',
  data:Qs.stringify({       //需要引入qs插件，方便后台读取参数
  userName:userName,
  userPhone:userPhone,
  t:1,
  uid:uid
  }),
  headers: {
  'Content-Type': 'application/x-www-form-urlencoded' //请求头需要设置，axios默认 'application/json'
  }
  }).then(res=>{
  console.log(res);
  }).catch(err=>{
  console.log(err);
  })
  }
  }

  }
</script>

<style lang="less">
	.appointment-container{
		position: fixed;
    	width: 100%;
    	height: 100%;
    	background-color: #fff;
    	top:0;
    	left: 0;
    	.top{
			width: 700px;
			margin:30px auto;
			img{
				width: 100%;
			}
		}
		.bottom .row{
			width: 550px;
			margin:70px auto 0;
			display:flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			input{
				width: 385px;
				height: 60px;
				border:2px solid #999;
				box-sizing: border-box;
				padding:0 10px;
				border-radius: 6px;
			}
			label{
				width: 130px;
				display: inline-block;
				font-size: 30px; /*px*/
			}
		}
		.sub-btn{
			width: 480px;
			height: 80px;
			background-color: #ff2132;
			color: #fff;
			font-size: 30px; /*px*/
			border-radius: 10px;
			margin:80px auto 0;
		}
	}
	
	
</style>
