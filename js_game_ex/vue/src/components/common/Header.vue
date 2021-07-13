<template>
  <div>
    <div class="header">
      <div class="collapse-btn" @click="collapseChage" slot="left">
        <i v-if="!collapse" class="el-icon-platform-eleme"></i>
        <i v-else icon="el-icon-eleme"></i>
      </div>
      <div class="logo">后台管理页面</div>
    </div>
   
  </div>
</template>
<script>
import bus from "../common/bus";
export default {
  data() {
    return {
      collapse: false,
    };
  },
  methods: {
    collapseChage() {
      this.collapse = !this.collapse;
      bus.$emit("collapse", this.collapse);
    },
    
  },
};
</script>
<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
  background-color: #242f42;
}
.collapse-btn {
  width: 20px;
  height: 50px;
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}
.logo {
  float: left;
  width: 250px;
  line-height: 70px;
}
</style>