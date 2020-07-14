import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import RenderRouterView from "./components/RenderRouterView";
Vue.use(VueRouter);
// Vue.use(RenderRouterView);

const routes = [
  {
    path: "/user",
    component:  () =>
    import(/* webpackChunkName: "about" */ "../layouts/Userlayout"),
   
    children :[
      {
        path: "user",
        redirect: "User/login"
      },
      {
      path: "/user/login",
      name: "login",
       component: () =>
       import(/* webpackChunkName: "about" */ "../views/User/user")
      
    },
    {
      path: "/user/register",
      name: "register", 
      component: () =>
      import(/* webpackChunkName: "about" */ "../views/User/register")
    }
  ]
  },
  {
    path: '/',
    name: "Baselayout",
    component: () =>
    import(/* webpackChunkName: "about" */ "../layouts/Baselayout")
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
