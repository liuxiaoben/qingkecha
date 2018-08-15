
import Vue from "vue";

import VueResource from "vue-resource";
Vue.use(VueResource);  // 全局注册使用  vue-resource;

import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper);

import router from "./router";

import MintUI from "mint-ui";
Vue.use(MintUI);

import Head from "./components/head.vue";
Vue.component("Head",Head);



const vm  = new Vue({
    el:"#app",
    data:{
        transitionName:"slide-left"
    },
    router,  // 4. 挂载
   
   
});
