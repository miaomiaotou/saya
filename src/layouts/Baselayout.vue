<template>
  <div>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
       <SideMenu/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" >
         <Header/>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <!-- router-view里是路由匹配过来的组件 -->
      <!-- <update/> -->
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        <Footer/>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</div>
</template>

<script>
import Footer from"./Footer";

import Header from "./Header";
 import SideMenu from "./SideMenu";
 import update from "../views/User/update";
 
export default {
  name:"Baselayout",
  data() {
    return {
      collapsed: false,
    }
  },
  components:{
        Header,
        Footer,
        SideMenu,
        update,
    }
   
};


</script>

<style scoped>

</style>