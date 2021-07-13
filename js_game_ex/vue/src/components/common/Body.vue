<template>
  <div class="rows" style="background-color:#242f42">
    <el-row>
      <el-col >
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#242f42"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>员工管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">员工信息1</el-menu-item>
              <el-menu-item index="1-2">员工信息2</el-menu-item>
            </el-menu-item-group>
              <el-menu-item index="1-3">员工信息3</el-menu-item>
              <el-menu-item index="1-4-1">员工信息4</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">分组管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">福利中心</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">其他设置</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
    },
    handleClose(key, keyPath) {
    },
  },
};
</script>
<style scoped>
.rows{
    width: 200px;
    display: block;
    position: absolute;
    left: 8px;
    top: 78px;
    bottom: 0;
}
</style>