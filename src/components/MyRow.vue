<template>
	<div class="my-row">
		<router-link :to="rowInfo.src" class="content">
			<i :class="['iconfont','left', rowInfo.icon]"></i>
			<span>{{rowInfo.title}}</span>
			<i class="iconfont icon-jiantou2 right"></i>
		</router-link>
	</div>
</template>

<script>
	export default {
		name:'row',
		props:['rowInfo'],
	}
</script>

<style lang="less" scoped>
	.my-row{
		width: 100%;
		height:88px;
		background-color: #fff;
		box-sizing: border-box;
		border-bottom: 2px solid #efefef;
		padding:0 25px;
		line-height: 88px;
		.content{
			display: block;
			width: 700px;
			position: relative;
			color: #333;
			.left{
				position: absolute;
				left: 0;
				font-size: 40px;
			}
			span{
				font-size: 30px;
				position: absolute;
				left: 80px;
			}
			.right{
				position: absolute;
				right: 0;
				font-size: 40px;
			}
		}
	}
</style>