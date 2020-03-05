import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import MintUI from 'mint-ui'
import VuePreview from 'vue-preview'

import 'mint-ui/lib/style.css' // 查看webpack配置简化

// 导入 MUI 的样式
import '@/lib/mui/css/mui.min.css'
// 导入扩展图标样式
import '@/lib/mui/css/icons-extra.css'

Vue.use(router)
Vue.use(MintUI)
Vue.use(VuePreview)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
