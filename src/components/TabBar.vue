<template>
	<div class="tab-bar">
		<ul class="tab-list">
			<li class="tab-item" :class="{'active':cur==='Index'}">
				<router-link to="/">
					<i class="iconfont icon-home" ></i><br/>
					<span>首页</span>
				</router-link>
			</li>
			<li class="tab-item" :class="{'active':cur==='SelectCar'}">
				<router-link to="/SelectCar">
					<i class="iconfont icon-qiche"></i><br/>
					<span>选车</span>
				</router-link>
			</li>
			<li class="tab-item" :class="{'active':cur==='ShopCar'}">
				<router-link to="/ShopCar">
					<i class="iconfont icon-gouwuche"></i><br/>
					<span>购物车</span>
				</router-link>	
			</li>
			<li class="tab-item" :class="{'active':cur==='My'}">
				<router-link to="/My">
					<i class="iconfont icon-wode"></i><br/>
					<span>我的</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:{
			cur:{
				type:String,
				default:'Index'
			}
		},
		methods:{

		}
	}
</script>

<style scoped>
	.tab-bar{
		position: fixed;
		bottom:0;
		left: 0;
		width: 100%;
		height: 100px;
		border-top:1px solid #bababa;
		box-sizing: border-box;
		padding-top: 10px;
		background-color: #fff;
	}
	.tab-list{
		width:600px;
		margin:0 auto;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
	}
	
	.tab-item span{
		font-size: 24px; /*px*/
		color: #bababa;
	}
	.tab-item i{
		font-size: 50px; /*px*/
		color: #bababa;
	}
	.tab-item.active i{
		color: #ff2132;
	}
	.tab-item.active span{
		color: #ff2132;
	}
</style>