<template>
	<div class="publish-news">
		<input type="text" v-model="title" placeholder="标题">
		<textarea name="" id="" cols="30" rows="10" v-model="content" placeholder="正文"></textarea>
		<button @click="publish">发布</button>
	</div>
</template>

<script>
	import Qs from 'qs'

	export default {
		name:'PublishNews',
		data(){return{
			title:'',
			content:'',
			userId:''
		}},
		created:function(){
			//获取存在本地的用户id
		},
		methods:{
			publish:function(){
				var title = this.title,
					content = this.content,
					userId = this.userId;
				if(title.length>0 && content.length>0){
					this.axios({
					   url:'/api/xxxxx/xxxx.xxx',
					   method:'post',
					   data:Qs.stringify({       //需要引入qs插件，方便后台读取参数
					   			title:title,
					   			content:content,
					   			userId:userId
							}),
					   headers: {
					     'Content-Type': 'application/x-www-form-urlencoded' //请求头需要设置，axios默认 'application/json'
					   }
					}).then(res=>{
						console.log(res);
						this.$router.push({path:'/CarFriends'})
					}).catch(err=>{
						console.log(err);
					})

				}else{
					alert('标题和正文不能为空')
				}
			}
		}

	}
</script>

<style lang="less" scoped>
	.publish-news{
		padding:25px;
		width: 100%;
		box-sizing: border-box;
		background-color: #fff;
		input{
			width: 100%;
			height: 72px;
			border-radius: 5px;
			border:2px solid #999;
			box-sizing: border-box;
			padding:0 25px;
		}
		textarea{
			width: 100%;
			/*height: 315px;*/
			border-radius: 5px;
			border:2px solid #999;
			margin:30px auto;
			padding:25px;
			box-sizing: border-box;
		}
		button{
			width: 100%;
			height:72px;
			background-color: #ff2132;
			color: #fff;
			border-radius: 10px; 
		}
	}
</style>