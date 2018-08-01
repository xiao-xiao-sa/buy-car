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
				<label for="">省市区</label>
				<div id="trigger5" class="area"><span>{{area}}</span><i class="iconfont icon-jiantou2"></i></div>
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
  import MobileSelect from 'mobile-select'
  import cityData from '../assets/data/cityData'
  import Qs from 'qs'
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
  area:'选择所在地区',
  bankAccount:'',
  branchAccount:'',
  chineseCities:null
  }},
  watch:{
  accountName:function(){},
  accountPhone:function(){},
  yzm:function(){},
  accountNumber:function(){},
  testAccountNumber:function(){},
  bankAccount:function(){},
  branchAccount:function(){},
  area:function(){
  console.log(this.area)
  }
  },
  created:function(){
  this.chineseCities=cityData.chineseCities;
  },
  mounted:function(){
  var that = this;
  var mobileSelect5 = new MobileSelect({
  trigger: '#trigger5',
  title: '所在地区',
  wheels: [
  {data:this.chineseCities}
  ],
  keyMap: {
  id:'id',
  value: 'name',
  childs :'city'
  },
  callback:function(indexArr, data){
  var area = '';
  Array.forEach(data,function(element,index,array){
  area += element.name;
  })
  that.area = area;
  console.log(that.area);
  }
  });
  },
  methods:{
  bindSub:function(){
  var that=this;
  if(!this.testPhone(this.accountPhone)){
  alert("手机号码格式不正确");
  return;
  }
  if(this.accountName.length==0){
  alert("请输入姓名");
  return;
  }
  if(this.accountNumber.length==0){
  alert("请输入账号");
  return;
  }
  if(this.accountNumber!=this.testAccountNumber){
  alert("两次输入账号不一致");
  return;
  }
  if(this.bankAccount.length==0){
  alert("两次输入开户银行");
  return;
  }
  if(this.branchAccount.length==0){
  alert("两次输入开户支行");
  return;
  }
  //提交数据，并返回所有的addressList,
  var uid=localStorage.getItem('userID')
  this.axios({
  url:'/api/SetBank.aspx',
  method:'post',
  data:Qs.stringify({       //需要引入qs插件，方便后台读取参数
  uid:uid,
  address:that.area,
  name:this.accountName,
  phone:this.accountPhone,
  t:2,
  account:this.accountNumber,
  bank:this.bankAccount,
  bankdetail:this.branchAccount
  }),
  headers: {
  'Content-Type': 'application/x-www-form-urlencoded' //请求头需要设置，axios默认 'application/json'
  }
  }).then(res=>{
  console.log(res);
  this.$router.push({path:'/MyAccount'});
  }).catch(err=>{
  console.log(err);
  })
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
			font-size: 32px; /*px*/
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
				font-size: 26px  !important; /*px*/
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
				font-size: 26px; /*px*/
				color: #ff2132;
				border-radius: 6px;
			}
			.area{
				height: 50px;
				width: 500px;
				margin-top:20px;
				border-radius: 10px;
				border:2px solid #999;
				box-sizing: border-box;
				padding:0 10px;
				position: relative;
				i{
					font-size: 40px; /*px*/
					position: absolute;
					right: 0;
				}
			}
			
		}
		.bind-account-btn{
			width:700px;
			height: 90px;
			background-color: #ff2132;
			color: #fff;
			font-size: 32px; /*px*/
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
			font-size: 26px; /*px*/
		}
	}
</style>
