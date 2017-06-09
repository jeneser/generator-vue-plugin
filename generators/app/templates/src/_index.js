/**
  * <%= name %>
  * (c) <%= year %> <%= author %>
  * @license <%= license %>
  */

const <%= camelCaseName %> = {}

/**
 * Plugin API
 */
<%= camelCaseName %>.install = function (Vue, options) {

  // Add global method or property
  Vue.myGlobalMethod = function () {
   // something logic ...
  }

  // Add a global asset
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
     // something logic ...
    }
  })

  // Inject some component options
  Vue.mixin({
    created: function () {
     // something logic ...
    }
  })

  // Add an instance method
  Vue.prototype.$myMethod = function (options) {
   // something logic ...
  }

}

/**
 * Auto install
 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(<%= camelCaseName %>)
}

export default <%= camelCaseName %>
