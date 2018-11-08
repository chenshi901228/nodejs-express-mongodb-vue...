<template>
    <el-container>
        <el-header>首页</el-header>
        <el-container>
            <el-aside width="200px" >
                <el-menu
                    class="el-menu-vertical-demo"
                    :default-active="$route.path"
                    router>
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>产品项目</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/project">添加</el-menu-item>
                            <el-menu-item index="/projectList">列表</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>新闻相关</span>
                        </template>
                        <el-menu-item-group>    
                            <el-menu-item index="/news">添加</el-menu-item>
                            <el-menu-item index="/newsList">列表</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
export default {
  methods: {}
};
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  /* line-height: 200px; */
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  /* text-align: center; */
  /* line-height: 500px; */
}

body > .el-container {
  margin-bottom: 40px;
}
</style>


