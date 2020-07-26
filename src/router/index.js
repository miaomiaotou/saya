import Vue from "vue";
import VueRouter from "vue-router";

import Baselayout from "../layouts/Baselayout";
import Userlayout from "../layouts/Userlayout";
import register from "../layouts/Userlayout";
import user from "../views/User/user";
import About from "../views/About";
import update from "../views/User/update";


import Home from "../views/Home.vue";

// import RenderRouterView from "./components/RenderRouterView";
Vue.use(VueRouter);
// Vue.use(RenderRouterView);

const routes = [
  {
    path: "/userlayout",
    component:  () =>
    import(/* webpackChunkName: "about" */ "../layouts/Userlayout"),
   
  //   children :[
  //     {
  //       path: "user",
  //       redirect: "User/login"
  //     },
  //     {
  //     path: "/user/login",
  //     name: "login",
  //      component: () =>
  //      import(/* webpackChunkName: "about" */ "../views/User/user")
      
  //   },
  //   {
  //     path: "/user/register",
  //     name: "register", 
  //     component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/User/register")
  //   }
  // ]
  },

  {
    path: '/',
    // hideinmenu:true,标志位
    name: "Baselayout",
    component: () =>
    import(/* webpackChunkName: "about" */ "../layouts/Baselayout"),
  //   children:[{path: '/update',
  //              component: () =>
  //              import(/* webpackChunkName: "about" */ "../views/User/update"),
  //             }]
  },
 
  {
    path: '/user',
    name: "user",
    // meta:{icon:"user",title :"仪表盘"},添加图标
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/User/user")
  },
  {
    path: '/register',
    name: "register",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/User/register")
  },
  {
    path: '/update',
    name: "update",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/User/update")
  },
  {
    path: '/about',
    name: "About",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/About")
  },
  {
    path: '/home',
    name: "home",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/Home")
  },
  // {
  //   path: "/",
  //   name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
