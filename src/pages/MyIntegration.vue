<template>
	<div class="my-integration">
		<div class="top">
			<div class="left">
				<p>当前积分</p>
				<p><span>{{myIntegration}}</span>分</p>
			</div>
			<div class="right">
				<p><button @click="isShow">积分说明</button></p>
				<p><button>积分提现</button></p>
			</div>
		</div>
		<div class="bottom">
			<tab v-model='activeKey'>
				<pane label='消费积分'  name='0'>
					<div class="jf-item" v-for="(item,index0) in integration0" :key="index0">
						<p class="type">消费</p>
						<p>
							<span class="time">{{item.time}}</span>
							<span class="num">-{{item.num}}分</span>
						</p>
					</div>
				</pane>
				<pane label="提现积分" name='1'>
					<div class="jf-item" v-for="(item,index1) in integration1" :key="index1">
						<p class="type">提现</p>
						<p>
							<span class="time">{{item.time}}</span>
							<span class="num">-{{item.num}}分</span>
						</p>
					</div>
				</pane>
				<pane label="获取积分" name='2'>
					<div class="jf-item" v-for="(item,index2) in integration2" :key="index2">
						<p class="type">获取</p>
						<p>
							<span class="time">{{item.time}}</span>
							<span class="num">+{{item.num}}分</span>
						</p>
					</div>
				</pane>
			</tab>
		</div>
		<div class="mask" v-if="show">
			<div class="hidden">
				<h2>积分说明</h2>
				<h3>如何获得积分</h3>
				<p>1.开团成功，团长可获得12000积分（注：团长需要向平台上交10000积分）</p>
				<p>2.推荐代理商，若代理商陈宫一笔订单，推荐人即可获得50积分</p>
				<p>3.邀请参团，即可获得6000积分</p>
				<h3>积分如何使用</h3>
				<p>积分可兑现（1积分=1元）</p>
				<span class="close" @click="isShow">关闭</span>
			</div>
		</div>
	</div>
</template>

<script>
	import tab from '../components/Tab.vue'
	import pane from '../components/Pane.vue'
	import myIntegrationData from '../assets/data/myIntegrationData'
	export default {
		name:'MyIntegration',
		data(){return{
			activeKey:0,
			show:false,
			myIntegration:1900,
			integration0:null,
			integration1:null,
			integration2:null
		}},
		created:function(){
			var myIntegrationList=myIntegrationData.myIntegrationList;
			this.integration0=[];this.integration1=[];this.integration2=[];
			for(var i=0,l=myIntegrationList.length;i<l;i++){
				var p=myIntegrationList[i];
				if(p.type=="消费"){
					this.integration0.push(p);
				}else if(p.type=="提现"){
					this.integration1.push(p);
				}else if(p.type=="获取"){
					this.integration2.push(p);
				}
			}
		},
		methods:{
			isShow:function(){
				this.show = !this.show;
			}
		},
		components:{
			'tab':tab,
			'pane':pane
		}
	}
</script>

<style lang="less">
	.my-integration{
		width: 750px;
		.top{
			width: 100%;
			height: 250px;
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			background-color: #fff;
			font-size: 32px;
			box-sizing: border-box;
			padding:40px 25px;
			div{
				width:350px;
				height: 170px;
			}
			.left{
				text-align: left;
				p:nth-child(2){
					margin-top:80px;
					span{
						font-size: 60px; /*px*/
						color: #ff2132;
					}
				}
			}
			.right{
				text-align: right;
				p:nth-child(2){
					margin-top:100px;
					button{
						width: 152px;
						height: 48px;
						color: #fff;
						background-color: #ff2132;
						border-radius: 10px;
					}
				}
			}
		}
		.bottom{
			margin-top:20px;
			.tabs{
				width: 750px;
			}
			.tabs-bar{
				width: 750px;
				box-sizing: border-box;
				background-color:#fff; 
				height: 72px;
				line-height: 72px;
				display: flex;
				flex-wrap: nowrap;
				justify-content: space-around;
			}
			.tabs-content{
				width: 100%;
			}
			.tabs-item{
				font-size: 32px; /*px*/
				color: #333;
			}
			.tabs-item-active{
				color: #ff2132;
				position: relative;
			}
			.tabs-item-active::after{
				content:'';
				width:120px;
				height: 2px;
				position: absolute;
				border-bottom: 2px solid #ff2132;
				bottom:0px;
				left:0;
			}
			.jf-item{
				width: 100%;
				height: 120px;
				background-color: #fff;
				font-size: 30px; /*px*/
				position: relative;
				text-align: left;
				border-top: 2px solid #efefef;
				box-sizing: border-box;
				padding:20px 25px;
				p:nth-child(2){
					width:100%;
					display: flex;
					flex-wrap: nowrap;
					justify-content: space-between;
				}
			}
		}
		.mask{
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background-color:rgba(0,0,0,0.3);
			z-index:10;

		}
		.hidden{
			width: 700px;
			height: 625px;
			border-radius: 20px;
			position: fixed;
			top:225px;
			left: 25px;
			background-color: #fff;
			box-sizing: border-box;
			padding:40px 30px;
			h2{
				font-size: 32px;
				text-align: left;
			}
			h3{
				font-size: 28px; /*px*/
				margin:50px 0 30px;
				text-align: left;
				color: #ffa91c;
			}
			p{
				font-size: 30px; /*px*/
				text-align: left;
				margin-bottom: 10px;
			}
			.close{
				position: absolute;
				top:40px;
				right: 30px;
				font-size: 32px;
			}
		}
	}
</style>