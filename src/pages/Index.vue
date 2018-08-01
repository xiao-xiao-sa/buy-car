<template>
	<div>
		<swiper :swiper="bannerList"></swiper>
		<nav-list :navList="navList"></nav-list>
		<div class="all-shop-group">
			<shop-group v-for="(item,index1) in shopGroup" :key="index1" :group="item">
				<shop-1 v-for="(shop,index2) in item.shopList" :key="index2" :shopInfo="shop"></shop-1>
			</shop-group>
		</div>
		<tab-bar :cur='cur'></tab-bar>
	</div>
</template>

<script>
  import TabBar from '../components/TabBar.vue'
  import swiper from '../components/Banner.vue'
  import NavList from '../components/NavList.vue'
  import ShopGroup from '../components/ShopGroup.vue'
  import Shop1 from '../components/Shop1.vue'
  import indexData from '../assets/data/indexData'
  import Qs from 'qs'

  export default {
  name:'Index',
  data(){return{
  cur:'Index',
  bannerList: null,
  navList:null,
  shopGroup:null,
  shopList1:null,
  shopList2:null,
  shopList3:null
  }},
  created:function(){
  //this.bannerList=indexData.bannerList;
  this.navList = indexData.navList;
  //this.shopGroup = indexData.shopGroup;
  console.log(this.axios)
  
  //get请求，类似如下操作
  this.axios.get('/api/gettopimg.aspx')
  .then(res => {
  console.log( res.data)
  var bannerList=[];
  for (var i = 0; i < res.data.items.length; i++) {
      bannerList.push({
        "img": res.data.items[i].pic,
        url:''
      });
    }
    //成功回调
    this.bannerList = bannerList;
  }, res => {
    //失败回调
    console.log(res)
  })
  
  this.axios.get('/api/GetClass.aspx')
  .then(res => {
  console.log( res.data)
  var navList=[];
  for (var i = 0; i < res.data.items.length; i++) {
      navList.push({
        "src": res.data.items[i].ClassRemark,
        "title":res.data.items[i].ClassName,
        "url":''
      });
    }
    //成功回调
    //this.navList = navList;
  }).catch( res => {
    //失败回调
    console.log(res)
  })
  
  this.axios.get('/api/GetShopgroup.aspx')
  .then(res => {
  console.log( res.data)
       var shopList1=[];
  for (var i = 0; i < res.data.items.length; i++) {
      shopList1.push({
        "id": res.data.items[i].id,
        "src":res.data.items[i].simg,
        "title":res.data.items[i].name,
        "construcPrice":res.data.items[i].marktprice,
        "price":res.data.items[i].price
      });
    }
    
  var shopList2=[];
    for (var i = 0; i < res.data.items.length; i++) {
      shopList2.push({
        "id": res.data.items1[i].id,
        "src":res.data.items1[i].simg,
        "title":res.data.items1[i].name,
        "construcPrice":res.data.items1[i].marktprice,
        "price":res.data.items1[i].price
      });
    }
    
  var shopList3=[];
  for (var i = 0; i < res.data.items.length; i++) {
      shopList3.push({
        "id": res.data.items2[i].id,
        "src":res.data.items2[i].simg,
        "title":res.data.items2[i].name,
        "construcPrice":res.data.items2[i].marktprice,
        "price":res.data.items2[i].price
      });
    }

     var  shopGroup = [
	{
		"title":"好车推荐",
		"shopList":shopList1
	},
	{
		"title":"拼团活动",
		"shopList":shopList2
	},
	{
		"title":"新车推荐",
		"shopList":shopList3
	}
];
    //成功回调
    this.shopList1 = shopList1;
    this.shopList2 = shopList2;
    this.shopList3 = shopList3;
    console.log(this.shopList1)
   
this.shopGroup = shopGroup
console.log(this.shopGroup)
  }, res => {
    //失败回调
    console.log(res)
  })
  },
  components:{
  'tab-bar':TabBar,
  'swiper':swiper,
  'nav-list':NavList,
  'shop-group':ShopGroup,
  'shop-1':Shop1
  }
  }
</script>

<style>
	.all-shop-group{
		margin-bottom: 120px;
	}
</style>
