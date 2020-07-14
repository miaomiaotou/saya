<template>
   <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>帮助</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="desktop" />
          <span>上传</span>
        </a-menu-item>
         <a-menu-item key="3">
          <a-icon type="user" />
          <span>登陆</span>
        </a-menu-item>
         <a-menu-item key="4">
          <a-icon type="team" />
          <span>关于我们</span>
        </a-menu-item>
        <a-menu-item key="5">
          <a-icon type="file" />
          <span>已上传文档</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
</template>

<script>
export default {
data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
}
</script>

<style>

</style>