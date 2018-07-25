<template>
	<div class="nav-container">
		<ul class="nav-list">
			<li v-for="(item,index) in navList" :key='index' class="nav-item">
				<router-link :to="item.url">
					<img :src="item.src" alt="">
					<p>{{item.title}}</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'NavList',
		props:['navList']
	}
</script>

<style lang="less" scoped>
	.nav-container{
		background-color: #fff;
		width: 100%;
		padding-bottom: 20px;
		.nav-list{
			width: 700px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			margin:0 auto;
			.nav-item{
				width: 165px;
				margin-top:30px;
				img{
					width: 90px;
					height: 90px;
					border-radius: 50%;
					border-radius: 50%;
				}
				p{
					font-size: 24px; /*px*/
					color: #333;
				}
			}
		}
	}
</style>