import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/home/HomePage'
import TemperaturePage from '@/pages/temperature/TemperaturePage'
import ManagePage from '@/pages/manage/Manage'
import DataPage from '@/pages/data/DataPage'
import MyPage from '@/pages/my/MyPage'
import CityPage from '@/pages/city/CityPage'
import LoginPage from '@/pages/login/LoginPage'
import MessagePage from '@/pages/message/MessagePage'
import Remove from "../pages/manage/Remove";
import Information from "../pages/manage/Information";
import Detail from "../pages/manage/Detail";
import Null from "../pages/home/Null"
import Search from "../pages/manage/Search";
Vue.use(Router)

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      // meta: {
      //   keepAlive: true
      // }
    },
    {
      path: '/temperature',
      name: 'TemperaturePage',
      component: TemperaturePage
    },
    {
      path: '/manage',
      name: 'ManagePage',
      component: ManagePage
    },
    {
      path: '/data',
      name: 'DataPage',
      component: DataPage
    },
    {
      path: '/my',
      name: 'MyPage',
      component: MyPage
    },
    {
      path: '/city',
      name: 'CityPage',
      component: CityPage,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/message',
      name: 'MessagePage',
      component: MessagePage
    },
    {
      path: '/remove',
      name: 'Remove',
      component: Remove
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/null',
      name: 'Null',
      component: Null
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
  ]
})
