

import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import './plugins/axios.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = true

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
