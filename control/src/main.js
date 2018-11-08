import Vue from 'vue'
import App from './views/index'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
