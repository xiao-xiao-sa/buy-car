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
			consumeList:null
		}},
		created:function(){
			this.consumeList = consumeData.consumeList;
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
			font-size: 24px;
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
		[dpr="2"] ul{
			font-size: 48px;
		}
		[dpr="3"] ul{
			font-size: 72px;
		}
		ul:first-child{
			height: 80px;
			line-height: 80px;
			font-size: 26px;
			font-weight: 500;
		}
		[dpr="2"] ul:first-child{
			font-size: 52px;
		}
		[dpr="3"] ul:first-child{
			font-size: 78px;
		}
	}
</style>