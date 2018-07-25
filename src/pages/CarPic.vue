<template>
	<div class="car-pic">
		<h2 class="title">{{title}}</h2>
		<tab v-model='activeKey'>
			<pane v-for="(item,index1) in picList" :label='item.type' :key="index1"  :name='index1'>
				<img v-for="(item,index2) in item.data" :src="item.src" alt="">
			</pane>
		</tab>
		<p class="pic-total">共{{picList[activeKey].data.length}}张图片</p>
	</div>
</template>

<script>
	import tab from '../components/Tab.vue'
	import pane from '../components/Pane.vue'
	import carPicData from '../assets/data/carPicData'

	export default {
		name:'CarPic',
		data(){return{
			activeKey:0,
			title:'',
			picList:null
		}},
		created:function(){
			var id = this.$store.state.carPicId;
			console.log(carPicData.carPic);
			this.title=carPicData.carPic.title;
			var picType1=carPicData.carPic.picList.filter(function(ele,index,arr){
				if(ele.type == "外观"){
					return ele;
				}
			});
			var picType2=carPicData.carPic.picList.filter(function(ele,index,arr){
				if(ele.type == "座椅"){
					return ele;
				}
			});
			var picType3=carPicData.carPic.picList.filter(function(ele,index,arr){
				if(ele.type == "中控"){
					return ele;
				}
			});
			var picType0=carPicData.carPic.picList;
			console.log(picType0,picType1,picType2,picType3);
			this.picList = [
				{"type":"全部","data":picType0},
				{"type":"外观","data":picType1},
				{"type":"座椅","data":picType2},
				{"type":"中控","data":picType3},
			]
			this.axios.get(url,{params:{id:id}})
				.then(res=>{
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})

		},
		components:{
			'tab':tab,
			'pane':pane
		}
	}
</script>

<style lang="less">
	.car-pic{
		.title{
			font-size: 32px; /*px*/
			width: 100%;
			box-sizing: border-box;
			height: 90px;
			padding:25px;
			text-align: left;
			font-weight: 600;
		}
		.tabs-bar{
			width: 100%;
			height: 70px;
			background-color: #fff;
			line-height: 70px;
			box-sizing: border-box;
			padding:0 25px;
			font-size: 28px; /*px*/
			margin-bottom: 20px;
			text-align: left;
			.tabs-item{
				margin-right: 50px;
			}
			.tabs-item-active{
				color: #ff2132;
			}			
		}
		.tabs-content{
			width: 100%;
			background-color: #fff;
			box-sizing: border-box;
			padding:25px 0 0 25px;
		}
		.pane{
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
		}
		.pane img{
			width: 210px;
			height: 150px;
			border:2px solid #999;
			margin-right:25px;
			margin-bottom: 25px;
		}
		.pic-total{
			margin-top: 50px;
			font-size: 24px; /*px*/
		}
	}
</style>