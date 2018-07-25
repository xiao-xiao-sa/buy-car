<template>
	<div class="my-consume">
		<ul>
			<li class="time">日期</li>
			<li class="model">车型号</li>
			<li class="count">数量</li>
			<li class="kt">开团(元)</li>
			<li class="ct">参团(元)</li>
		</ul>
		<ul v-for="(item,index) in consumeList" :key="index">
			<li class="time">{{item.time | timestampToTime}}</li>
			<li class="model">{{item.model | changeTextLength}}</li>
			<li class="count">{{item.count}}</li>
			<li class="kt">{{item.ktConsume | KtOrCt}}</li>
			<li class="ct">{{item.ctConsume | KtOrCt}}</li>
		</ul>
	</div>
</template>

<script>
	import consumeData from '../assets/data/consumeData'

	export default {
		name:'MyConsume',
		data(){return{
			consumeList:null,
			userId:''
		}},
		created:function(){
			this.consumeList = consumeData.consumeList;
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
			timestampToTime:function(val) {
				val = val + '';
				if(val.length<13){
					val=val*1000;
				}else{
					val=val*1;
				}
		        var date = new Date(val),//时间戳为10位需*1000，时间戳为13位的话不需乘1000
		        Y = date.getFullYear() + '\/',
		        M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '\/',
		        D = date.getDate() < 10 ? '0'+date.getDate() : date.getDate();
		        return Y+M+D;
		    },
		    KtOrCt:function(val){
		    	if(val>0){
		    		return val;
		    	}else{
		    		return '\/'
		    	}
		    },
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

<style lang="less">
	.my-consume{
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
				width: 150px;
				text-align: center;
			}
			.model{
				width: 150px;
				text-align: center;
			}
			.count{
				width:100px;
				text-align: center;
			}
			.kt{
				width: 150px;
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