import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'

Vue.use(Router)
Router.prototype.goBack = function () {
  this.isBack = true
  this.go(-1)
}
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/HelloWorld'
    },
    {
      path: '/layout',
      component: Layout,
      redirect: '/layout/notice',
      children: [
        {
          path: 'notice',
          component: () => import('@/components/notice'),
        },
        {
          path: 'shoppingCart',
          component: () => import('@/components/shoppingCart'),
        },
        {
          path: 'myHome',
          component: () => import('@/components/myHome'),
        }
      ]
    },
    {
      path: '/HelloWorld',
      component: () => import('@/components/HelloWorld.vue'),
    },
    {
      path: '/personalCenter',
      component: () => import('@/components/personalCenter.vue'),
    }
  ]
})
