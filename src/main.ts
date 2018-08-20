import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Default from './layout/main.vue'

Vue.config.productionTip = false
Vue.use(Antd)

Vue.component('main-layout', Default)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
