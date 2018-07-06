<template>
	<div class="group-container">
		<div class="title-container">
			<router-link :to="group.url" class="title">
				<h2>{{group.title}}</h2>
				<i class="iconfont icon-jiantou"></i>
			</router-link>
		</div>
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name:'ShopGroup',
		props:['group']
	}
</script>

<style lang="less" scoped>
	.group-container{
		margin-top:20px;
		width:100%;
		background-color: #fff;
		.title-container{
			width: 100%;
			height: 80px;
			line-height: 80px;
			border-bottom: 1px solid #bababa;
			padding:0 25px;
			box-sizing: border-box;
			.title{
				display: flex;
				flex-wrap: nowrap;
				justify-content: space-between;
				width:700px;
				h2{
					font-size: 32px;
					color: #333;
					font-weight: 600;
					padding-left:16px;
					box-sizing: border-box;
					position: relative;
					border-left: 5px solid #ff2132;
					height: 40px;
					position: relative;
					top:20px;
					line-height: 40px;
				}
				[dpr="2"] h2{
					font-size: 64px;
				}
				[dpr="3"] h2{
					font-size: 96px;
				}
			}
			
		}
		.content{
			padding:25px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}

	}
</style>