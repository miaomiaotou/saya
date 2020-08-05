<template>
   <div class=" header">
   <!-- 对象存储 -->
     <div style="background-color: #F5F5F5; padding: 24px;">
    <a-page-header
      :ghost="false"
     
      sub-title="用户信息"
      :data="userlist"
     
    >
      <template slot="extra">
        
        <!-- <a-button key="2">
          Operation
        </a-button> -->
        <a-button key="1" type="primary" @click="reClick">
          登录
        </a-button>
      </template>
      
      <a-descriptions size="small" :column="3"  :data="userlist">
        <a-descriptions-item label="昵称" prop="nickname">{{nickname}}</a-descriptions-item>
        <a-descriptions-item label="用户id" prop ="uid">
         {{uid}}
        </a-descriptions-item>
        <a-descriptions-item label="用户身份" prop ="cred">
         {{cred}}
        </a-descriptions-item>
        <a-descriptions-item label="Effective Time">
          2017-10-10
        </a-descriptions-item>
        <a-descriptions-item label="Remarks">
          Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </a-descriptions-item>
      </a-descriptions>
    </a-page-header>
  </div>
   </div>
</template>


<script>
import axios from 'axios';
axios.defaults.withCredentials = true;
export default {
    data(){
        return{
          // 获取用户列表的参数
          userinfo:{
            name:'miaomiaotou',
            page:1
          },
          userlist :{

          },
          success:'',
        }


    },
    created(){
      this.getuserlist()

      },

    
   methods :{
       reClick () {
      // this.$axios.get('http://saya.signalping.com/webapi/user/github_login')
      // .then((res)=>{console.log(res)})
      // .catch(error => console.log(error))
    //   window.open('http://saya.signalping.com/webapi/user/github_login?redirect_uri=http://localhost:8080')
       window.location.href = "http://saya.signalping.com/webapi/user/github_login?redirect_uri=http://localhost:8080",
       axios.defaults.withCredentials = true;

    },
    getuserlist(){
      this.$axios.get(
        'http://saya.signalping.com/webapi/user/profile'
        // {
        //   params:{
        //     this.userinfo

        //   }
        // },
      ).then((res)=>{
        this.userlist=res.data.data;
        this.nickname = res.data.data.nickname;
        this.cred = res.data.data.cred;
        this.uid = res.data.data.uid;
        this.githubid = res.data.data.github_id;
        this.icon = res.data.data.avatar;
        this.createtime= res.data.data.create_time;
        this.update_time = res.data.data.update_time;



        console.log(res)

      }).catch(error => console.log(error))
    }


   }


}
</script>

<style scoped>
.header{
    float: right;
    
};
tr:last-child td {
  padding-bottom: 0;
}


</style>