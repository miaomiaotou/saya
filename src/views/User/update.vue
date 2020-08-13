<template>
  <div >
   <!-- <Baselayout></Baselayout> -->
   <router-view></router-view>
  
  </div>
</template>

<script>
import Baselayout from "../../layouts/Baselayout";
export default {
  name:"update",
  components:{
    Baselayout
  },
data() {
    return {};
  },
 methods: {
    handleChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
  

}
</script>

<style>

</style>