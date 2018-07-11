<template>
	<div class="address">
		<div v-if="addressList.length > 0" v-for="(item,index) in addressList" :key="index" class="address-item" >
			<div class="top">
				<span>{{item.name}}</span>
				<span>{{item.phone}}</span>
			</div>
			<p class="middle">{{item.detail}}</p>
			<div class="bottom">
				<span>
					<i class="iconfont icon-xuanzhong" v-if="item.isSelect == true" style="color:#ff2132;"></i>
					<i class="iconfont icon-weixuanzhong" v-if="item.isSelect == false" @click="changeIsSelect(item.id)"></i>
					默认地址
				</span>
				<div class="right">
					<span @click="reviseAddress(item.id)">编辑</span>
					<span @click="deleteAddress(item.id)">删除</span>
				</div>
			</div>
		</div>
		<div v-if="addressList.length == 0" class="no-address">
			<img src="../assets/image/no-address.png" alt="" >
			<p>您还未添加地址</p>
		</div>
		<router-link class="add-btn"  to="/addAddress">新增地址</router-link>
	</div>
</template>

<script>
	import addressData from '../assets/data/addressData'

	export default {
		name:'Address',
		data(){return{
			addressList:null
		}},
		created:function(){
			//判断转态仓库中是否存在地址列表，如果不存在就从后台获取，存在的话就直接读取
			if(this.$store.state.addressList == null){
				this.addressList = addressData.addressList;
				this.$store.commit('addressList',this.addressList);
			}else{
				this.addressList = this.$store.state.addressList;
			}
		},
		methods:{
			deleteAddress:function(val){
				this.$store.dispatch('deleteAddress',val);
			},
			reviseAddress:function(val){
				var reviseAddress = this.addressList.filter(function(ele,index,arr){
					if(ele.id == val){
						return ele;
					}
				})[0];
				this.$store.commit('reviseAddress',reviseAddress );
				this.$router.push({path:'/addAddress'})
			},
			changeIsSelect:function(val){
				console.log(val);
				this.$store.dispatch('changeIsSelect',val);
			}
		}
	}
</script>

<style lang="less" scoped>
	.address{
		.address-item{
			box-sizing: border-box;
			padding:30px 0;
			width: 750px;
			height: 230px;
			background-color: #fff;
			margin-bottom: 20px;
			.top{
				width: 700px;
				margin:0 auto;
				display: flex;
				flex-wrap: nowrap;
				justify-content: space-between;
				font-size: 32px;
			}
			.middle{
				width: 700px;
				margin:20px auto;
				text-align: left;
				font-size: 28px;
			}
			.bottom{
				width: 700px;
				margin:0 auto;
				border-top: 2px solid #efefef;
				display: flex;
				flex-wrap: nowrap;
				justify-content: space-between;
				padding-top:10px;
				font-size: 30px;
				i{
					font-size: 40px;
				}
				.right span{
					display: inline-block;
					margin:0 20px;
				}
			}
		}
		.add-btn{
			display: block;
			text-align: center;
			line-height: 90px;
			position: fixed;
			bottom: 10px;
			left: 25px;
			width: 700px;
			height: 90px;
			background-color: #ff2132;
			color: #fff;
			font-size: 32px;
			border-radius: 10px;
		}
		.no-address{
			margin-top:100px;
			font-size: 30px;
			color: #666;
			img{
				width: 200px;
				height: 200px;
				margin-bottom: 20px;
			}
		}
	}
</style>