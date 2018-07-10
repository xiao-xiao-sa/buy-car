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
import OrderDetail from '@/pages/OrderDetail'
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

Vue.use(Router)

export default new Router({
  routes: [
    {
       	path: '/',
       	component: Index,
        meta: {allowBack: false}
    },
    {
    	path:'/SelectCar',
    	component:SelectCar,
      meta: {allowBack: false}
    },
    {
    	path:'/ShopCar',
    	component:ShopCar,
      meta: {allowBack: false}
    },
    {
    	path:'/My',
    	component:My,
      meta: {allowBack: false}
    },
    {
      path:'/RecommendGood',
      component:RecommendGood
    },
    {
      path:'/RecommendNew',
      component:RecommendNew
    },
    {
      path:'/IntegrationMarket',
      component:IntegrationMarket
    },
    {
      path:'/Repair',
      component:Repair
    },
    {
      path:'/Appointment',
      component:Appointment
    },
    {
      path:'/MoreShop',
      component:MoreShop
    },
    {
      path:'/Share',
      component:Share
    },
    {
      path:'/PtShop',
      component:PtShop
    },
    {
      path:'/OrderDetail',
      component:OrderDetail
    },
    {
      path:'/MyConsume',
      component:MyConsume
    },
    {
      path:'/MyWallet',
      component:MyWallet
    },
    {
      path:'/MyIntegration',
      component:MyIntegration
    },
    {
      path:'/MyAccount',
      component:MyAccount
    },
    {
      path:'/BindAccount',
      component:BindAccount
    },
    {
      path:'/MaintenanceRecords',
      component:MaintenanceRecords
    },
    {
      path:'/Setting',
      component:Setting
    },
    {
      path:'/Address',
      component:Address
    },
    {
      path:'/addAddress',
      component:addAddress
    },
    {
      path:'/Login',
      component:Login
    },
    {
      path:'/Register',
      component:Register
    },
    {
      path:'/ForgetPwd',
      component:ForgetPwd
    },
    {
      path:'/CarDetailList',
      component:CarDetailList
    },
    {
      path:'/CarPicList',
      component:CarPicList
    },
    {
      path:'/CarParameterList',
      component:CarParameterList
    },
    {
      path:'/CarDetail',
      component:CarDetail
    },
    {
      path:'/CarParameter',
      component:CarParameter
    },
    {
      path:'/CarPic',
      component:CarPic
    }
  ]
})
