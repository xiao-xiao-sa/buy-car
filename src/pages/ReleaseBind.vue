<template>
	<div class="release">
		<div class="mask"></div>
		<div class="card" :class="{'red1':card.bankCode == 'ICBC' , 'blue':card.bankCode == 'CCB','green':card.bankCode=='ABC', 'red2':card.bankCode == 'BOC'}">
			<p class="bank">{{card.bankName}}{{card.cardTypeName}}</p>
			<p class="numer">{{card.accountNumber | cardNumberFormat}}</p>
			<p class="fgx"></p>
			<button class="jieband" @click="jieband">解除绑定</button>
		</div>
		
	</div>
</template>

<script>
  import Qs from 'qs'

  export default {
  name:'ReleaseBind',
  data(){return{
  card:null,
  }},
  created:function(){
  //从vuex中获取card的信息
  this.card = this.$store.state.card;

  },

  methods:{
  //解除绑定的函数
  jieband:function(){
  var accountNumber = this.card.accountNumber;
  var uid=localStorage.getItem('userID')
  console.log(uid)
  console.log(accountNumber)
  this.axios({
  url:'/api/SetBank.aspx',
  method:'post',
  data:Qs.stringify({       //需要引入qs插件，方便后台读取参数
  account:accountNumber,
  t:3,
  uid:uid
  }),
  headers: {
  'Content-Type': 'application/x-www-form-urlencoded' //请求头需要设置，axios默认 'application/json'
  }
  }).then(res=>{
  console.log(res);
  //如果删除成功就返回上一页
  this.$router.go(-1);
  }).catch(err=>{
  console.log(err);
  })

  }
  },
  filters:{
  cardNumberFormat:function(val){
  if(val.length<15){
					return "**** **** **** "+val.substring(12); 
				}else{
					return "**** **** **** "+val.substring(12,16)+" "+val.substring(16)
				}
				
			}
		},
	}
</script>

<style lang="less" scoped="">
	.release{
		.mask{
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background-color: #fff;
			z-index: -1;
		}
		.card{
			width: 650px;
			height: 300px;
			margin:24px auto;
			border-radius: 20px;
			background-color: rgba(146,92,180,0.5);
			position: relative;
			color:#fff;
			box-shadow: 0 5px 5px rgba(0,0,0,0.3);
			p.bank{
				position: absolute;
				top:50px;
				left:50px;
				font-size: 32px; /*px*/
			}
			p.numer{
				position: absolute;
				bottom: 150px;
				left:50px;
				font-size: 32px; /*px*/
			}
			p.fgx{
				border-bottom: 1px dashed #fff;
				position: absolute;
				width: 100%;
				bottom: 120px;
				left: 0;
			}
			.jieband{
				position: absolute;
				bottom:40px;
				color: #fff;
				font-size: 26px; /*px*/
				margin-top: 20px;
				padding:5px 10px;
				border-radius: 10px;
				border:1px solid #fff;
				background-color: transparent;
				right: 30px;
			}
		}
		
		.red1{
			background-color: rgba(255,0,0,0.5);
		}
		.red2{
			background-color: rgba(255,0,0,0.8);
		}
		.blue{
			background-color: rgba(50,143,213,0.5);
		}
		.green{
			background-color: rgba(43,116,22,0.5);
		}
		.logo{
			width: 200px;
			margin-top:200px;

		}
	}
</style>

