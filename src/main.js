import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueOnsen from 'vue-onsenui'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

Vue.use(VueOnsen)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mounted() {
    this.$store.dispatch('fetchPosts', 1)
  },
  components: { App },
  template: '<App/>'
})
