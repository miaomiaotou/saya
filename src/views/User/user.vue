<template>
  <div>
    <Baselayout></Baselayout>
    
     <router-view></router-view>
     
    
  </div>
</template>

<script>
import Baselayout from "../../layouts/Baselayout";
import SideMenu from "../../layouts/SideMenu";
export default {
  name: "user",
    components: {
      Baselayout,
      SideMenu,


      }

}
</script>

<style>

</style>