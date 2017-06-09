// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// process.env.NODE_ENV === 'development'
// import <%= camelCaseName %> from '../src/<%= name %>.js'

// process.env.NODE_ENV === 'production'
import <%= camelCaseName %> from '../dist/<%= name %>.js'

Vue.config.productionTip = false

// Using plugin
Vue.use(<%= camelCaseName %>)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
