import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// router.beforeEach((to, from, next) => {
//   console.log(to,'to');
//   console.log(from,'from');
//   if (to.path == '/about') { //  如果跳转/about则拒绝跳转，返回
//     console.log('拦截进入about');
//     next(false)
//   } else if(to.path == '/pages'){ //  如果跳转/pages则跳转到about页面去
//     console.log('点击pages希望进入about');
//     next({path:'/about'})
//     // next('/about')
//   }
// });
// router.beforeResolve((to, from, next) => {
//   console.log(to);
//   console.log(from);
//   next();
// });
// router.afterEach((to, from) => {
//   console.log(to);
//   console.log(from);
//   console.log('afterEach 全局后置钩子');
// });

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')