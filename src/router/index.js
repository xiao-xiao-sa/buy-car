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
    }
  ]
})
