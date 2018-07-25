<template>
	<div class="my-recommend">
		<ul>
			<li class="time">ID</li>
			<li class="model">姓名</li>
			<li class="count">车型号</li>
			<li class="kt">数量</li>
			<li class="ct">金额(元)</li>
		</ul>
		<ul v-for="(item,index) in recommendList" :key="index">
			<li class="time">{{item.id}}</li>
			<li class="model">{{item.name}}</li>
			<li class="count">{{item.title | changeTextLength}}</li>
			<li class="kt">{{item.count}}</li>
			<li class="ct">{{item.amount}}</li>
		</ul>
	</div>
</template>

<script>
	import recommendData from '../assets/data/recommendData'

	export default {
		name:'MyConsume',
		data(){return{
			recommendList:null,
			userId:''
		}},
		created:function(){
			this.recommendList = recommendData.recommendList;
			var userId=this.userId;
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
		    changeTextLength:function(val){
		    	if(val.length>6){
		    		return val.substr(0,6) + "...";
		    	}else{
		    		return val
		    	}
		    }
		}
	}
</script>

<style lang="less" scoped>
	.my-recommend{
		background-color: #fff;
		width: 100%;
		padding:0 25px;
		box-sizing: border-box;
		ul{
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			width: 100%;
			height: 60px;
			border-bottom: 2px solid #999;
			line-height: 60px;
			font-size: 24px; /*px*/
			color: #333;
			.time{
				width: 100px;
				text-align: center;
			}
			.model{
				width: 150px;
				text-align: center;
			}
			.count{
				width:200px;
				text-align: center;
			}
			.kt{
				width: 100px;
				text-align: center;
			}
			.ct{
				width: 150px;
				text-align: center;
			}
		}
		ul:first-child{
			height: 80px;
			line-height: 80px;
			font-size: 26px; /*px*/
			font-weight: 500;
		}
	}
</style>