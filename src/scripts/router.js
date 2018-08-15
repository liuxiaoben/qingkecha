
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//1.定义路由组件
import Guide from "./views/guide.vue";
import Layout from "./views/layout.vue";
import Login from "./views/login.vue";
import Register from "./views/register.vue";
import Home from "./views/home.vue";
import Group from "./views/group.vue";
import Car from "./views/car.vue";
import My from "./views/my.vue";
import Jieshao from "./views/jieshao.vue";
import Detail from "./views/detail.vue";
import Zixun from "./views/zixun.vue";
import Shoppingcar from "./views/shoppingcar.vue";


//2.定义路由
const routes = [
    {
        path:"/",
        component:Guide,
        name:"guide",
    },
    {
        path:"/logon",
        name:"login",
        component:Login
    },
    {
        path:"/register",
        name:"register",
        component:Register
    },
    {
        path:"/app",
        component:Layout,
        name:"app",
        children:[
            {path:"home",component:Home,name:'home'},
            {path:"group",component:Group,name:'group'},
            {path:"car",component:Car,name:'car'},
            {path:"my",component:My,name:'my'}
        ]
    },
    {
        path:"/jieshao",
        component:Jieshao,
        name:"jieshao",
    },
    {
        path:"/detail",
        component:Detail,
        name:"detail"
    },
    {
        path:"/zixun",
        component:Zixun,
        name:"zixun"
    },
    {
        path:"/shoppingcar",
        component:Shoppingcar,
        name:"shoppingcar"
    },
   
    {
        path:"*",
        redirect:"/app/home"
    }
]


//3.创建路由
const router = new VueRouter({
    routes,
    mode:"hash"
}) 


export default router;
