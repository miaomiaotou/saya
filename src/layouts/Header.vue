<template>
   <div class=" header">
   <!-- 对象存储 -->
     <div style="background-color: #F5F5F5; padding: 24px;">
    <a-page-header
      :ghost="false"
      title="用户"
      sub-title="This is a subtitle"
     
    >
      <template slot="extra">
        
        <!-- <a-button key="2">
          Operation
        </a-button> -->
        <a-button key="1" type="primary" @click="cimsInputClick">
          退出
        </a-button>
      </template>
      <a-descriptions size="small" :column="3">
        <a-descriptions-item label="Created">
          Lili Qu
        </a-descriptions-item>
        <a-descriptions-item label="Association">
          <a>421421</a>
        </a-descriptions-item>
        <a-descriptions-item label="Creation Time">
          2017-01-10
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
export default {
    data(){
        return
    },
   methods :{
       cimsInputClick () {
      window.location.href = 'https:\\www.mscims.com'
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