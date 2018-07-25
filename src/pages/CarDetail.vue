<template>
	<div class="car-detail">
		<h2 class="title">{{carDetail.title}}</h2>
		<p class="time"><span>发布日期:</span>{{carDetail.time | timestampToTime}}</p>
		<div class="content" v-html="carDetail.content"></div>
	</div>
</template>

<script>
	import carDetailData from '../assets/data/carDetailData'
	export default {
		name:'CarDetail',
		data(){return{
			carDetail:null
		}},
		created:function(){
			var id=this.$store.state.carDetailId;
			//获取id后去后台获取carDetail
			this.carDetail=carDetailData.carDetail;
			this.axios.get(url,{params:{id:id}})
				.then(res=>{
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
		},
		filters:{
			timestampToTime:function(val) {
				val = val + '';
				if(val.length<13){
					val=val*1000;
				}else{
					val=val*1;
				}
		        var date = new Date(val),//时间戳为10位需*1000，时间戳为13位的话不需乘1000
		        Y = date.getFullYear() + '-',
		        M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-',
		        D = date.getDate() < 10 ? '0'+date.getDate() : date.getDate();
		        return Y+M+D;
		    }
		}
	}
</script>

<style lang="less">
	.car-detail{
		padding:50px 25px;
		.title{
			width:100%;
			text-align: left;
			font-size: 32px; /*px*/
			font-weight: 500;
			color: #000;
			margin-bottom: 10px;
		}
		.time{
			font-size: 26px; /*px*/
			color: #666;
			width: 100%;
			text-align: left;
			box-sizing: border-box;
			padding-left: 10px;
			margin-bottom: 30px;
		}
		.content{
			width: 100%;
			img{
				width: 100%;
				margin:20px auto;
				display: block;
			}
			p{
				margin:20px auto;
				font-size: 32px; /*px*/
				text-align: left;
				width: 100%;
			}
		}
	}
</style>
