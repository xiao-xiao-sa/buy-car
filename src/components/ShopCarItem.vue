<template>
	<delete :id="shopInfo.id">
		<div class="shop-item-container">
			<div class="select">
				<i class="iconfont icon-weixuanzhong" v-if="shopInfo.select == false" @click.stop="changeSelect"></i>
				<i class="iconfont icon-xuanzhong" v-if="shopInfo.select == true" style="color:#ff2132 " @click.stop="changeSelect"></i>
			</div>
			<img :src="shopInfo.src" alt="">
			<div class="text">
				<h2>{{shopInfo.title}}</h2>
				<p>&yen;{{shopInfo.price | priceType}}万</p>
			</div>
			<change-count v-model="shopInfo.count" :min="1" :count="shopInfo.count" :id="shopInfo.id" class="count" @count='updateCount'></change-count>
		</div>
	</delete>
</template>

<script>
	import Delete from './Delete.vue'
	import ChangeCount from './ChangeCount.vue'
	export default {
		name:'shopCarItem',
		data(){return{
			cartItem:{
				id:this.shopInfo.id,
				select:this.shopInfo.select
			}
		}},
		props:['shopInfo'],
		created:function(){

		},
		components:{
			'delete':Delete,
			'change-count':ChangeCount
		},
		methods:{
			updateCount:function(data){
				console.log(data)
				this.$store.dispatch('updateCart',data);
			},
			changeSelect:function(){
				this.cartItem.select = !this.cartItem.select;
				this.$store.commit('changeSelect',this.cartItem);

			}
		}
	}
</script>

<style lang="less" scoped>
	.shop-item-container{
		width: 100%;
		box-sizing: border-box;
		padding-left: 25px;
		display: flex;
		flex-wrap: nowrap;
		justify-content: flex-start;
		height: 130px;
		.select{
			margin-right: 30px;
			i{
				font-size: 40px;
				height: 100%;
				line-height: 130px;
			}
		}
		 
		img{
			width: 150px;
			height: 100px;
			margin-top:15px;
			margin-right: 30px;
		}
		.text{
			margin-right: 80px;
		}
		.text h2{
			font-size: 28px;
			text-align: left;
			margin-top: 20px;
		}
		.text p{
			font-size: 28px;
			color:#ff2132;
			text-align: left;
			margin-top:20px;
		}
		.count{
			margin-top:40px;
		}
	}
</style>