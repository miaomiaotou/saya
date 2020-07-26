<template>
  <div>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
       <SideMenu/>
    </a-layout-sider>
    <a-layout>
       <router-view></router-view>
      <a-layout-header style="background: #fff; padding: 0" >
         <Header/>
      </a-layout-header>
      
      <a-layout-content style="margin: 0 16px">
        <!-- router-view里是路由匹配过来的组件 -->
      <!-- <update/> -->
        <Userlayout/>        
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

 import update from "../views/User/update";
 
import SideMenu from "./SideMenu";
import Userlayout from "./Userlayout";
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
        Userlayout
    }
   
};


</script>

<style scoped>
.ant-layout-header {
    height: 182px;
}

</style>