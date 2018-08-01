<template>
	<div class="my-account">
		<div class="bg-mask"></div>
		<div class="account-item" v-if="accountList && accountList.length>0" v-for="(item,index) in accountList" :key="index" @click="release(item)" :class="{'red1':item.bankCode == 'ICBC' , 'blue':item.bankCode == 'CCB','green':item.bankCode=='ABC', 'red2':item.bankCode == 'BOC'}">
			<p class="name">{{item.bankName}}</p>
			<p class="number">{{item.accountNumber | cardNumberFormat}}</p>
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
		filters:{
			cardNumberFormat:function(val){
				if(val.length<15){
					return "**** **** **** "+val.substring(12); 
				}else{
					return "**** **** **** "+val.substring(12,16)+" "+val.substring(16)
				}
				
			}
		},
		created:function(){
          var uid=localStorage.getItem('userID')
  console.log(uid)
   //get请求，类似如下操作
  this.axios.get('/api/SetBank.aspx',{params:{t:1,uid:uid}})
  .then(res => {
  console.log( res.data)
  var accountList=[];
  for (var i = 0; i < res.data.items.length; i++) {
      accountList.push({
        "accountNumber": res.data.items[i].account,
        "bankName":res.data.items[i].bank,
        "bankCode":'',
        "cardType":'DC',
        "cardTypeName":"储蓄卡"
      });
    }
    
  

    //成功回调
   
this.accountList = accountList
console.log(this.accountList)
  }, res => {
    //失败回调
    console.log(res)
  })
  },
		methods:{
			release:function(val){
				console.log(val)
				//将当前的card的信息保存在vuex中，
				this.$store.commit('card',val);
				console.log(this.$store.state.card)
				this.$router.push({path:'/ReleaseBind'})
			}
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
			height: 250px;
			margin:24px auto;
			border-radius: 20px;
			background-color: rgba(146,92,180,0.5);
			position: relative;
			color:#fff;
			p.number{
				position: absolute;
				bottom:50px;
				left:50px;
				font-size: 32px; /*px*/
			}
			p.name{
				position: absolute;
				top:50px;
				left:50px;
				font-size: 32px; /*px*/
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
			font-size: 32px; /*px*/
			i{
				font-size: 60px; /*px*/
				display: block;
				margin:30px auto 25px;
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
	}
</style>
