<template>
  <div >
   <!-- <Baselayout></Baselayout> -->
     <a-upload
   
    :multiple="false"
    :default-file-list="defaultFileList"
    :customRequest="customRequest"
    @change="handleChange"
  >
    <a-button> <a-icon type="upload" /> Upload </a-button>
  </a-upload>
      <!-- <a-button @click="customRequest"> commit </a-button> -->

<!-- :customRequest="customRequest" -->
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
        token: "123"
      },
      
    };
    
  },
  created() {
    // this.getQiniuToken();
    this.gettoken(); 
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
    gettoken:function(){
       this.$axios
       .get('http://saya.signalping.com/webapi/storage/token')
       .then((res)=>{
          console.log(res)
          this.qiniuData.token = res.data.error_code
          console.log(res.data.error_code)
         }

       )
    },
  
    //  getQiniuToken: function() {
    //   const _this = this;
    //   this.$axios
    //     .post('http://yoursite.com/qiniu/uploadToken')
    //     .then(function(res) {
    //       console.log(res);
    //       if (res.data.success) {
    //         _this.qiniuData.token = res.data.result;
    //       } else {
    //         _this.$message({
    //           message: res.data.info,
    //           duration: 2000,
    //           type: "warning"
    //         });
    //       }
    //     });
    //     // this.axios.defaults.withCredentials = true;

    // },
    customRequest (data) {
      const formData = new FormData()
      formData.append('file', data.file)
      formData.append('token',data.qiniuData.token)
      this.saveFile(formData)
    },
    saveFile (formData) {
      this.form.validateFields((err, values) => {
      if (!err) {
        let _this  = this
        this.axios(
        {
          method: 'post',
          url: 'https://up-z1.qiniup.com',
          data: this.formData
        })
        
        .then((response) => {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
        }
      })
    },
  

  }
}
</script>

<style>

</style>