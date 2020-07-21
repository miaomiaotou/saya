<template>
  <div>
    <Baselayout></Baselayout>
    
     <router-view></router-view>
     
    
  </div>
</template>

<script>
import Baselayout from "../../layouts/Baselayout";
export default {
  name: "user",
    components: {
      Baselayout
      }

}
</script>

<style>

</style>