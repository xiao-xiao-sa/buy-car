<template>
	<div class="maintenance-records">
		<div v-for="(item,index) in maintenanceList" class="maintenance-item">
			<img :src="item.src" alt="">
			<div class="right">
				<h2>{{item.title | changeTextLength}}</h2>
				<p>订单编号：{{item.number}}</p>
				<p>{{item.time | timestampToTime}}</p>
				<p>损耗：{{item.detail}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import maintenanceData from '../assets/data/maintenanceData'
	export default {
		name:'MaintenanceRecords',
		data(){return{
			maintenanceList:null,
			userId:''
		}},
		created:function(){
			this.maintenanceList=maintenanceData.maintenanceList;
			var userId = this.userId;
			this.axios({
			   url:'/api/xxxxx/xxxx.xxx',
			   method:'post',
			   data:Qs.stringify({       //需要引入qs插件，方便后台读取参数
			   			userId:userId
					}),
			   headers: {
			     'Content-Type': 'application/x-www-form-urlencoded' //请求头需要设置，axios默认 'application/json'
			   }
			}).then(res=>{
				console.log(res);
			}).catch(err=>{
				console.log(err);
			})
		},
		filters:{
			changeTextLength:function(value){
				if(value.length>23){
					return value.substr(0,24) + "...";
				}else{
					return value;
				}
			},
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
		        D = date.getDate() < 10 ? '0'+date.getDate() : date.getDate() + ' ',
		        h = date.getHours() + ':',
		        m = date.getMinutes(),
		        s = date.getSeconds();
		        return Y+M+D+h+m;
		    }
		}
	}
</script>

<style lang="less" scoped>
	.maintenance-item{
		width: 100%;
		height: 198px;
		background-color: #fff;
		border-top:2px solid #efefef;
		display: flex;
		flex-wrap: nowrap;
		justify-content: flex-start;
		box-sizing: border-box;
		padding:20px 25px;
		img{
			width: 210px;
			height: 130px;
		}
		.right{
			text-align: left;
			margin-left: 20px;
			h2{
				font-size: 28px; /*px*/
				color: #333;
			}
		}
	}
</style>