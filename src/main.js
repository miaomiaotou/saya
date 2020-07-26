import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import router from "./router";
import store from "./store";

import RenderRouterView from "ant-design-vue";

import{Button,Layout,Menu,Upload} from "ant-design-vue";

import 'ant-design-vue/dist/antd.less';
// import{Layout} from "ant-design-vue"
// import vueConfig from "../vue.config";
import axios from 'axios';
import Baselayout from '../src/layouts/Baselayout';

Vue.config.productionTip = false;

Vue.component(Button.name, Button);

Vue.use(Antd);
Vue.use(Layout);
Vue.use(Button);
Vue.use(RenderRouterView);
Vue.use(Baselayout);
Vue.use(Menu);
Vue.use(Upload);
Vue.use(Baselayout);
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  Baselayout,
  Menu,
  Upload,

  
  // Layout,
  RenderRouterView,
  render: h => h(App)
}).$mount("#app");
