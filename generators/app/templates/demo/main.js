// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// process.env.NODE_ENV === 'development'
// import vueScrollBehavior from '../src/vue-scroll-behavior.js'

// process.env.NODE_ENV === 'production'
import vueScrollBehavior from '../dist/vue-scroll-behavior.js'

Vue.config.productionTip = false

// Using plugin
Vue.use(vueScrollBehavior)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
