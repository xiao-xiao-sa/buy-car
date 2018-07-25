<template>
	<div class="car-friend">
		<div v-for="(item,index) in dataList" :key="index" class="item">
			<div class="top">
				<img :src="item.headimgurl" alt="">
				<span>{{item.nickname}}</span>
			</div>
			<div class="center">
				<h2>{{item.title}}</h2>
				<p>{{item.content}}</p>
				</div>
			<div class="bottom">
				<span>{{item.time | timestampToTime}}</span>
				<span @click="zan(item.id)"><i class="iconfont icon-xin" :class="{'red':item.zan>0}"></i><i v-if="item.zan>0">{{item.zan}}</i></span>
			</div>
		</div>
		<router-link to="/PublishNews" class="jia" @click="jia"><i class="iconfont icon-jia"></i></router-link>
	</div>
</template>

<script>
	import carFriendsData from '../assets/data/carFriendsData'
	import Qs from 'qs'
	export default {
		name:'CarFriends',
		data(){return{
			dataList:null,
			userId:''
		}},
		created:function(){
			//页面创建时就需要从本地存储中获取userId
			this.dataList = carFriendsData.dataList;
			this.axios.get(url)
				.then(res=>{
					console.log(res);
					this.dataList = res.dataList;
				}).catch(err=>{
					console.log(err)
				})
		},
		methods:{
			zan:function(val){
				console.log(val)
				var userId = this.userId;
				this.axios({
					url:'',
					method:'post',
					data:Qs.stringify({       //需要引入qs插件，方便后台读取参数
					   	id:id,
					   	userId:userId
					}),
					headers: {
					    'Content-Type': 'application/x-www-form-urlencoded' //请求头需要设置，axios默认 'application/json'
					}
				}).then(res=>{
					console.log(res)
					//提交成功后，修改对应的记录数
					for(var i=0,l=this.dataList.length;i<l;i++){
						if(this.dataList[i].id==val){
							this.dataList[i].zan+=1;
							return;
						}
					}
				}).catch(err=>{
					console.log(err)
				})
			}
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
	.car-friend{
		width: 100%;
		background-color: #fff;
		.item{
			width: 100%;
			padding:25px;
			box-sizing: border-box;
			border-bottom: 2px solid #efefef;
			.top{
				text-align: left;
				padding:5px 10px;
				box-sizing: border-box;
				img{
					width:74px;
					height: 74px;
					display: inline-block;
					border-radius: 50%;
					background-color: #ff2132;
					vertical-align: middle;
				}
				span{
					font-size: 28px;/*px*/;
					display: inline-block;
					margin-left: 20px;
				}
			}
			.center{
				text-align: left;
				h2{
					font-size: 32px; /*px*/
					font-weight: 600;
				}
				p{
					font-size: 26px;
					line-height: 30px;
					margin:10px auto;
				}
			}
			.bottom{
				display: flex;
				flex-wrap: nowrap;
				justify-content: space-between;
				margin-top:30px;
				.iconfont{
					font-size: 40px; /*px*/
				}
				.red{
					color: #ff2132;
				}
			}
		}
		.jia{
				display: inline-block;
				position: fixed;
				border-radius: 50%;
				width: 82px;
				height: 82px;
				text-align: center;
				line-height: 82px;
				background-color: #ff6c6c;
				right: 10px;
				bottom:160px;
				box-shadow: 0 0 10px rgba(0,0,0,0.5);
				.iconfont{
					font-size: 40px;
					color: #fff;
					
				}
			}
	}
</style>