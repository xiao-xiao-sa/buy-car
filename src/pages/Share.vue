<template>
	<div >
		<div class="share-container" v-if="userInfo != null">
			<div class="top">
				<img :src="userInfo.ava" alt="">
				<span>姓名：{{userInfo.name}}</span>
			</div>
			<div>
				<img class="code" :src="QRCode" alt="">
			</div>
			<p>扫一扫识别图中二维码</p>
		</div>
		<button v-if="userInfo == null" class="no-authorize">用户授权</button>
	</div>
</template>

<script>
	export default {
		name:'Share',
		data(){return{
			userInfo:null,
			QRCode:require('../assets/image/share.jpg')
		}}
	}
</script>

<style lang="less" scoped>
	.share-container{
		width:660px;
		height: 880px;
		margin:165px auto 0;
		background-color: #fff; 
		overflow: hidden;
		padding:30px;
		box-sizing: border-box;
		.top{
			height: 130px;
			text-align: left;
			img{
				width: 130px;
				height: 130px;
				border-radius: 50%;
				background-color: #999;
				display: inline-block;
				vertical-align: middle;
				margin-right: 30px;
			}
			span{
				font-size: 28px; /*px*/
				color: #333;
			}
		}
		.code{
			width: 520px;
			height: 520px;
			margin:60px auto 80px;
		}
	}
	.no-authorize{
		background-color: #ff2132;
		width: 200px;
		height: 50px;
		font-size: 28px; /*px*/
		color: #fff;
		border-radius: 10px;
		margin-top:125px;
	}
	
</style>