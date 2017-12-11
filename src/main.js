import Vue from 'vue';
import App from './App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store/store';
import echarts from 'echarts';


Vue.use(ElementUI)
// Vue.config.productionTip = false
Vue.use(router);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
// router.beforeEach((to, from, next) => {
//     iView.LoadingBar.start();
//     next();
// });

// router.afterEach(route => {
//     iView.LoadingBar.finish();
// });