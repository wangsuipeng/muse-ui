// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import store from './store'
import { Uploader } from 'vant';
import { Icon } from 'vant';
import { Row, Col } from 'vant';

Vue.use(Row).use(Col);
Vue.use(Icon);

import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(Uploader);
Vue.use(Vuetify)
Vue.use(MuseUI); 
Vue.config.productionTip = false

Vue.prototype.$axios = axios;
// axios.defaults.baseURL = 'http://103.26.76.116:9999/';
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
