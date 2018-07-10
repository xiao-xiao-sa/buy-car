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
			<!-- 移动端地区选择组件 -->
			<p v-html="address.area"></p>
			<i class="iconfont icon-jiantou2"></i>
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
		<button class="save-submit" @click="saveAddress">保存</button>
	</div>
</template>

<script>
	export default {
		name:'addAddress',
		data(){return{
			address:{
				"id":'',
				"name":'',
				"phone":'',
				"area":'',
				'detail':"",
				"isSelect":false
			},
		}},
		watch:{
			address:function(){}
		},
		created:function(){
			if(this.$store.state.reviseAddress != null){
				this.address = this.$store.state.reviseAddress;
			}
		},
		methods:{
			saveAddress:function(){
				console.log(this.address);
				//提交数据，并返回所有的addressList,
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

<style lang="less" scoped>
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
			font-size: 28px;
			input{
				width: 550px;
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
			font-size: 40px;
		}
		.save-submit{
			width: 700px;
			height: 90px;
			background-color: #ff2132;
			color: #fff;
			font-size: 32px;
			border-radius: 10px;
			margin-top:20px;
		}
	}
</style>