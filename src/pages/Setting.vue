<template>
	<div class="setting">
		<div class="set-row">
			<router-link to="/" class="set-row-a">
				<span class="left">姓名</span>
				<span class="right">{{userInfo.name}}</span>
				<i class="iconfont icon-jiantou2"></i>
			</router-link>
		</div>
		<div class="set-row">
			<router-link to="/" class="set-row-a">
				<span class="left">性别</span>
				<span class="right">{{userInfo.sex}}</span>
				<i class="iconfont icon-jiantou2"></i>
			</router-link>
		</div>
		<div class="set-row">
			<router-link to="/" class="set-row-a">
				<span class="left">生日</span>
				<span class="right">{{userInfo.birth}}</span>
				<i class="iconfont icon-jiantou2"></i>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name:'setting',
		data(){return{
			userInfo:{
				name:'王一',
				sex:'女',
				birth:'2007-01-12'
			}
		}}
	}
</script>

<style lang="less" scoped>
	.setting{
		background-color: #fff;
		width: 100%;
		.set-row{
			height: 90px;
			width: 100%;
			box-sizing: border-box;
			padding:0 25px;
			line-height: 90px;
			border-bottom: 2px solid #efefef;
			font-size: 32px;
			.set-row-a{
				display: block;
				width: 100%;
				display: flex;
				flex-wrap: nowrap;
				justify-content: space-between;
				color: #666;
				.right{
					width:560px;
					text-align: right;
				}
				i{
					font-size: 40px;
				}
			}
		}
		[dpr="2"] .set-row{
			font-size: 64px;
			i{
				font-size: 80px;
			}
		}
		[dpr="3"] .set-row{
			font-size: 96px;
			i{
				font-size: 120px;
			}
		}
	}
</style>