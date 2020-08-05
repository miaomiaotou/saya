<template>
  <div >
   <!-- <Baselayout></Baselayout> -->
     <a-upload
    action="https://up-z2.qiniup.com"
    :multiple="false"
    :default-file-list="defaultFileList"
    @change="handleChange"
  >
    <a-button> <a-icon type="upload" /> Upload </a-button>
  </a-upload>
    
     <router-view></router-view>
     
  </div>
</template>

<script>

import Baselayout from "../../layouts/Baselayout";
import SideMenu from "../../layouts/SideMenu";
export default {
  name: "update",
    components: {
      Baselayout,
      SideMenu,
      },
    data() {
    return {
      defaultFileList: [
        {
          uid: '1',
          name: 'xxx.png',
          status: 'done',
          response: 'Server Error 500', // custom error message to show
          url: 'http://www.baidu.com/xxx.png',
        },
      ],
       qiniuData: {
        key: "",
        token: ""
      },
      
    };
    
  },
  created() {
    this.getQiniuToken();
  },
  methods: {
    handleChange(info) {
      let fileList = [...info.fileList];

      // 1. Limit the number of uploaded files
      //    Only to show two recent uploaded files, and old ones will be replaced by the new
      // fileList = fileList.slice(-2);

      // 2. read from response and show file link
      // fileList = fileList.map(file => {
      //   if (file.response) {
      //     // Component will show file.url as link
      //     file.url = file.response.url;
      //   }
      //   return file;
      // });
      this.fileList = fileList;
    },
    
     getQiniuToken: function() {
      const _this = this;
      this.$axios
        .post('http://yoursite.com/qiniu/uploadToken')
        .then(function(res) {
          console.log(res);
          if (res.data.success) {
            _this.qiniuData.token = res.data.result;
          } else {
            _this.$message({
              message: res.data.info,
              duration: 2000,
              type: "warning"
            });
          }
        });
        // this.axios.defaults.withCredentials = true;

    },
  

  }
}
</script>

<style>

</style>