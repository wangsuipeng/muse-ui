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
      redirect: '/login'
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
      path: '/login',
      component: () => import('@/components/login.vue'),
    },
    {
      path: '/personalCenter',
      component: () => import('@/components/personalCenter.vue'),
    },
    {
      path: '/upload',
      component: () => import('@/components/upload.vue'),
    }
  ]
})
