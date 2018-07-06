<template>
	<div>
		<div v-if="userInfo != null" class="top">
			<img :src="userInfo.ava" alt="">
			<p>{{userInfo.name}}</p>
		</div>
		<div v-if="userInfo == null" class="top">
			<button>绑定账户</button>
		</div>
		<div class="row-list">
			<my-row v-for="(item,index1) in rowList1" :rowInfo="item" :key="index1"></my-row>
		</div>
		<div class="row-list">
			<my-row v-for="(item,index2) in rowList2" :rowInfo="item" :key="index2"></my-row>
		</div>
		<tab-bar :cur='cur'></tab-bar>
	</div>
</template>

<script>
	import TabBar from '../components/TabBar.vue'
	import MyRow from '../components/MyRow.vue'
	import myData from '../assets/data/myData'
	export default {
		name:'Index',
		data(){return{
			cur:'My',
			rowList1:null,
			rowList2:null,
			userInfo:null
		}},
		created:function(){
			this.rowList1 = myData.rowList1;
			this.rowList2 = myData.rowList2;
		},
		components:{
			'tab-bar':TabBar,
			'my-row':MyRow
		}
	}
</script>

<style lang="less" scoped>
	.row-list{
		margin-top:20px;
	}
	.top{
		height:  300px;
		width: 100%;
		background-color: #fff;
		img{
			width:165px;
			height: 165px;
			border-radius: 50%;
			background-color: #ff2132;
		}
		button{
			background-color: #ff2132;
			width: 200px;
			height: 50px;
			font-size: 28px;
			color: #fff;
			border-radius: 10px;
			margin-top:125px;
		}
	}
</style>