import Vue from 'vue'
import App from './App.vue'
import {store} from './store.js'
import lightbox from 'vlightbox'

Vue.config.productionTip = false

Vue.use(lightbox)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

