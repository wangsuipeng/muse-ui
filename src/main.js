// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import store from './store'


import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})

Vue.use(Vuetify)
Vue.use(MuseUI);
Vue.config.productionTip = false

VueTouch.config.swipe = {
  threshold: 100 //手指左右滑动距离
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})