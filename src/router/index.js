import Vue from "vue";
import VueRouter from "vue-router";

import Baselayout from "../layouts/Baselayout";
import Userlayout from "../layouts/Userlayout";
import register from "../layouts/Userlayout";
import user from "../views/User/user";
import About from "../views/About";


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
    name: "Baselayout",
    component: () =>
    import(/* webpackChunkName: "about" */ "../layouts/Baselayout")
  },
  {
    path: '/user',
    name: "user",
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
