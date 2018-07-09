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

Vue.use(Router)

export default new Router({
  routes: [
    {
       	path: '/',
       	component: Index
    },
    {
    	path:'/SelectCar',
    	component:SelectCar
    },
    {
    	path:'/ShopCar',
    	component:ShopCar
    },
    {
    	path:'/My',
    	component:My
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
    }
  ]
})
