<template>
	<div class="add-address">
		<div class="add-row">
			<label>收货人</label>
			<input type="text" v-model="address.name" placeholder="请输入收货人姓名">
		</div>
		<div class="add-row">
			<label>手机号码</label>
			<input type="text" v-model="address.phone" placeholder="请输入收货人手机号码">
		</div>
		<div class="add-row">
			<label>所在地区</label>
			<div id="trigger5" class="area"><span>{{address.area}}</span><i class="iconfont icon-jiantou2"></i></div>
			
		</div>
		<div class="add-row detail-address">
			<label>详细地址</label>
			<textarea name="" id="" cols="30" rows="10" v-model="address.detail" placeholder="请输入详细的地址信息，如道路、门牌、小区、楼栋号、单元室等"></textarea>
		</div>
		<div class="add-row is-select">
			<label>设置默认</label>
			<i class="iconfont icon-weixuanzhong" v-if="address.isSelect == false" @click="isSelect"></i>
			<i class="iconfont icon-xuanzhong" v-if="address.isSelect == true" style="color:#ff2132" @click="isSelect"></i>
		</div>
    <input type="text" v-model="address.id" placeholder="">
		<button class="save-submit" @click="saveAddress">保存</button>
	</div>
</template>

<script>
  import MobileSelect from 'mobile-select'
  import cityData from '../assets/data/cityData'
  import Qs from 'qs'
  export default {
  name:'addAddress',
  data(){return{
  address:{
  "id":'',
  "uid":'',
  "name":'',
  "phone":'',
  "area":'选择省、市、区',
  'detail':"",
  "provincename":'',
  "cityname":'',
  "countyname":'',
  "isSelect":false
  },
  userId:'',
  isok:'0',
  chineseCities:null
  }},
  watch:{
  address:function(){}
  },
  created:function(){
  this.chineseCities=cityData.chineseCities;
  if(this.$store.state.reviseAddress != null){
  this.address = this.$store.state.reviseAddress;
  this.$store.commit('reviseAddress',null);
  }
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
                    that.address.area = area;
                    console.log(that.address.area);
                }
            });
		},
  methods:{
  saveAddress:function(){
  var that=this;
  console.log(this.address);
  if(!this.testPhone(this.address.phone)){
  alert("手机号码格式不正确");
  return;
  }
   if(this.address.name.length==0){
  alert("请输入姓名");
  return;
  }
  if(this.address.detail.length==0){
  alert("请输入详细地址");
  return;
  }
  //提交数据，并返回所有的addressList,
  var uid=localStorage.getItem('userID')
  if(this.address.isSelect==true){
   this.isok='1';}
 console.log(this.address.id);
  this.axios({
  url:'/api/SetAddress.aspx',
  method:'post',
  data:Qs.stringify({       //需要引入qs插件，方便后台读取参数
  uid:uid,
  Address:that.address.area,
  Realname:this.address.name,
  mobile:this.address.phone,
  t:2,
  isok:this.isok,
  detail:this.address.detail,
  id:this.address.id
  }),
  headers: {
  'Content-Type': 'application/x-www-form-urlencoded' //请求头需要设置，axios默认 'application/json'
  }
  }).then(res=>{
  console.log(res);
  //返回修改后所有的地址列表，存入vuex中，并且跳转到地址列表页面
  var reviseAddressList = res.reviseAddressList;
  this.$store.commit('reviseAddressList',reviseAddressList);
  this.$router.push({path:'/Address'});
  }).catch(err=>{
  console.log(err);
  })
  var reviseAddressList = [];
  this.$store.commit('reviseAddressList',reviseAddressList);
  this.$router.push({path:'/Address'});
  },
  isSelect:function(){
  this.address.isSelect = !this.address.isSelect;
  }
  }
  }
</script>

<style lang="less">
	.add-address{
		width: 100%;
		.add-row{
			width:100%;
			height: 90px;
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			box-sizing: border-box;
			padding:0 25px;
			line-height: 90px;
			background-color: #fff;
			border-top: 2px solid #efefef;
			font-size: 28px; /*px*/
			input{
				width: 550px;
			}
			.area{
				width: 550px;
				display: flex;
				flex-wrap: nowrap;
				justify-content: space-between;
				i{
					font-size: 40px; /*px*/
				}
			}
		}
		.detail-address{
			height: 150px;
			textarea{
				width: 550px;
				margin-top:20px;
			}
		}
		.is-select i{
			font-size: 40px; /*px*/
		}
		.save-submit{
			width: 700px;
			height: 90px;
			background-color: #ff2132;
			color: #fff;
			font-size: 32px; /*px*/
			border-radius: 10px;
			margin-top:20px;
		}
	}

</style>
