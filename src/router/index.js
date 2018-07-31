import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import SelectCar from '@/pages/SelectCar'
import ShopCar from '@/pages/ShopCar'
import My from '@/pages/My'
import RecommendGood from '@/pages/RecommendGood'
import RecommendNew from '@/pages/RecommendNew'
import IntegrationMarket from '@/pages/IntegrationMarket'
import Repair from '@/pages/Repair'
import Appointment from '@/pages/Appointment'
import MoreShop from '@/pages/MoreShop'
import Share from '@/pages/Share'
import PtShop from '@/pages/PtShop'
import OrderList from '@/pages/OrderList'
import MyConsume from '@/pages/MyConsume'
import MyWallet from '@/pages/MyWallet'
import MyIntegration from '@/pages/MyIntegration'
import MyAccount from '@/pages/MyAccount'
import BindAccount from '@/pages/BindAccount'
import MaintenanceRecords from '@/pages/MaintenanceRecords'
import Setting from '@/pages/Setting'
import Address from '@/pages/Address'
import addAddress from '@/pages/addAddress'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import ForgetPwd from '@/pages/ForgetPwd'
import CarDetailList from '@/pages/CarDetailList'
import CarParameterList from '@/pages/CarParameterList'
import CarPicList from '@/pages/CarPicList'
import CarDetail from '@/pages/CarDetail'
import CarParameter from '@/pages/CarParameter'
import CarPic from '@/pages/CarPic'
import ShopDetail from '@/pages/ShopDetail'
import CarFriends from '@/pages/CarFriends'
import PublishNews from '@/pages/PublishNews'
import MyRecommend from '@/pages/MyRecommend'
import JfShopDetail from '@/pages/JfShopDetail'
import ReleaseBind from '@/pages/ReleaseBind'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/ReleaseBind',
      component:ReleaseBind,
      meta:{
        title:'银行卡'
      }
    },
    {
       	path: '/',
       	component: Index,
        meta: {
          allowBack: false,
          title:'首页',
          keepAlive: true
        }
    },
    {
    	path:'/SelectCar',
    	component:SelectCar,
      meta: {
        allowBack: false,
        title:'选车',
        keepAlive: true
      }
    },
    {
    	path:'/ShopCar',
    	component:ShopCar,
      meta: {
        allowBack: false,
        title:'购物车',
        keepAlive: true
      }
    },
    {
    	path:'/My',
    	component:My,
      meta: {
        allowBack: false,
        title:'我的',
        keepAlive: true
      }
    },
    {
      path:'/RecommendGood',
      component:RecommendGood,
      meta:{
        title:'好车推荐'
      }
    },
    {
      path:'/RecommendNew',
      component:RecommendNew,
      meta:{
        title:'新车推荐'
      }
    },
    {
      path:'/IntegrationMarket',
      component:IntegrationMarket,
      meta:{
        title:'积分超市'
      }
    },
    {
      path:'/Repair',
      component:Repair,
      meta:{
        title:'故障维修'
      }
    },
    {
      path:'/Appointment',
      component:Appointment,
      meta:{
        title:'预约保养'
      }
    },
    {
      path:'/MoreShop',
      component:MoreShop,
      meta:{
        title:'更多产品'
      }
    },
    {
      path:'/Share',
      component:Share,
      meta:{
        title:'好友推荐'
      }
    },
    {
      path:'/PtShop',
      component:PtShop,
      meta:{
        title:'拼团活动'
      }
    },
    {
      path:'/OrderList',
      component:OrderList,
      meta:{
        title:'订单列表'
      }
    },
    {
      path:'/MyConsume',
      component:MyConsume,
      meta:{
        title:'我的消费'
      }
    },
    {
      path:'/MyWallet',
      component:MyWallet,
      meta:{
        title:'我的钱包'
      }
    },
    {
      path:'/MyIntegration',
      component:MyIntegration,
      meta:{
        title:'积分详情'
      }
    },
    {
      path:'/MyAccount',
      component:MyAccount,
      meta:{
        title:'我的账户'
      }
    },
    {
      path:'/BindAccount',
      component:BindAccount,
      meta:{
        title:'绑定账户'
      }
    },
    {
      path:'/MaintenanceRecords',
      component:MaintenanceRecords,
      meta:{
        title:'维修记录'
      }
    },
    {
      path:'/Setting',
      component:Setting,
      meta:{
        title:'设置中心'
      }
    },
    {
      path:'/Address',
      component:Address,
      meta:{
        title:'收货地址'
      }
    },
    {
      path:'/addAddress',
      component:addAddress,
      meta:{
        title:'添加地址'
      }
    },
    {
      path:'/Login',
      component:Login,
      meta:{
        title:'登录'
      }
    },
    {
      path:'/Register',
      component:Register,
      meta:{
        title:'注册'
      }
    },
    {
      path:'/ForgetPwd',
      component:ForgetPwd,
      meta:{
        title:'忘记密码'
      }
    },
    {
      path:'/CarDetailList',
      component:CarDetailList,
      meta:{
        title:'车辆详情列表'
      }
    },
    {
      path:'/CarPicList',
      component:CarPicList,
      meta:{
        title:'车辆图片列表'
      }
    },
    {
      path:'/CarParameterList',
      component:CarParameterList,
      meta:{
        title:'车辆参数列表'
      }
    },
    {
      path:'/CarDetail',
      component:CarDetail,
      meta:{
        title:'车辆详情'
      }
    },
    {
      path:'/CarParameter',
      component:CarParameter,
      meta:{
        title:'车辆参数'
      }
    },
    {
      path:'/CarPic',
      component:CarPic,
      meta:{
        title:'车辆图片'
      }
    },
    {
      path:'/ShopDetail',
      component:ShopDetail,
      meta:{
        title:'商品详情'
      }
    },
    {
      path:'/CarFriends',
      component:CarFriends,
      meta:{
        title:'车辆圈友'
      }
    },
    {
      path:'/PublishNews',
      component:PublishNews,
      meta:{
        title:'发布信息'
      }
    },
    {
      path:'/MyRecommend',
      component:MyRecommend,
      meta:{
        title:'我的推荐'
      }
    },
    {
      path:'/JfShopDetail',
      component:JfShopDetail,
      meta:{
        title:'积分商品详情'
      }
    }
    
  ]
})
