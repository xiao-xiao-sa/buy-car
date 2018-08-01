<template>
	<div class="all-good-container">
		<shop-1 v-for="(item,index) in goodList" :shopInfo="item" :key="index"></shop-1>
		<p class="no-more">-没有更多商品了-</p>
		<!-- <tab-bar :cur='cur'></tab-bar> -->
	</div>
</template>

<script>
  import Shop1 from '../components/Shop1.vue'
  import TabBar from '../components/TabBar.vue'
  import recommendGoodData from '../assets/data/recommendGoodData'

  export default {
  name:'RecommendGood',
  data(){return{
  goodList:null
  }},
  created:function(){

  //get请求，类似如下操作
  this.axios.get('/api/GetCarClass.aspx',{params:{t:1}})
  .then(res => {
  console.log( res.data)
  var goodList=[];
  for (var i = 0; i < res.data.items.length; i++) {
      goodList.push({
        "id": res.data.items[i].id,
        "src":res.data.items[i].simg,
        "title":res.data.items[i].name,
        "construcPrice":res.data.items[i].marktprice,
        "price":res.data.items[i].price
      });
    }
    
  

    //成功回调
   
this.goodList = goodList
console.log(this.goodList)
  }, res => {
    //失败回调
    console.log(res)
  })
  },
		components:{
			'tab-bar':TabBar,
			'shop-1':Shop1
		}
	}
</script>

<style lang="less" scoped>
	.all-good-container{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 700px;
		margin:20px auto;
		.no-more{
			margin:35px auto 120px;
			font-size: 24px; /*px*/
			color: #999;
		}
	}
	
</style>
