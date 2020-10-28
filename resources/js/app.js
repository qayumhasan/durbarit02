
require('./bootstrap');




window.Vue = require('vue');
Vue.config.productionTip = false;

import iziToast from 'izitoast';

Vue.filter('striphtml', function (value) {
    var div = document.createElement("div");
    div.innerHTML = value;
    var text = div.textContent || div.innerText || "";
    return text;
  });






import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import VueMeta from 'vue-meta'
Vue.use(VueMeta)
Vue.prototype.$eventBus = new Vue();
Vue.prototype.$iziToast = iziToast;
// using filter
Vue.filter('sortlength',function (text,length,suffix) {
    return text.substring(0,length)+suffix;
})


import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)


import VueIziToast from 'vue-izitoast';
import 'izitoast/dist/css/iziToast.css';
Vue.use(VueIziToast);











// support router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import {routes} from './routes';





const router = new VueRouter({
    
    routes, 
    // mode: 'history',
    
})


Vue.component('main-component', require('./components/master-component').default);




// support vuex

import Vuex from 'vuex'
Vue.use(Vuex)
import storeData from "./store/index"
const store = new Vuex.Store(
    storeData
)

router.beforeEach((to, from, next) => {
  window.axios.defaults.headers.common['Authorization'] =localStorage.getItem('token'); 
  next()
})






const app = new Vue({
    el: '#app',
    router,
    store
});
