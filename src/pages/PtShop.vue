<template>
	<div>
		<pt-shop-item v-for="(item,index) in shopList" :shopInfo="item" :key="index"></pt-shop-item>
	</div>
</template>

<script>
  import PtShopItem from '../components/PtShopItem.vue'
  import ptShopData from '../assets/data/ptShopData'

  export default {
  name:'PtShop',
  data(){return{
  shopList:null
  }},
  created:function(){
  //get请求，类似如下操作
  this.axios.get('/api/GetCarClass.aspx',{params:{t:2}})
  .then(res => {
  console.log( res.data)
  var shopList=[];
  for (var i = 0; i < res.data.items.length; i++) {
      shopList.push({
        "id": res.data.items[i].id,
        "src":res.data.items[i].simg,
        "title":res.data.items[i].name,
        "finish":115,
        "price":res.data.items[i].price
      });
    }
    
  

    //成功回调
   
this.shopList = shopList
console.log(this.newList)
  }, res => {
    //失败回调
    console.log(res)
  })
  },
		components:{
			'pt-shop-item':PtShopItem
		}
	}
</script>
