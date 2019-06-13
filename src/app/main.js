import Vue from 'vue'
import VeeValidate from 'vee-validate'
import 'bulma'

import App from './App.vue'
import store from './state'

import '../assets/styles/index.scss'
import 'core/ui'

// config
Vue.config.productionTip = false

// plugins
Vue.use(VeeValidate)

// application
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
