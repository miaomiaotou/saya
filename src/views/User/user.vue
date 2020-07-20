<template>
  <div>
    <Baselayout></Baselayout>
     <router-view></router-view>
     
    
  </div>
</template>

<script>
import Baselayout from "../../layouts/Baselayout";
export default {
  name: "Baselayout",
    components: {
      Baselayout
      }

}
</script>

<style>

</style>