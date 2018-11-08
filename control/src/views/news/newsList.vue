<template>
    <div>
      <el-dropdown @command="handleCommand" split-button type="primary" style="margin-bottom:20px">
        {{default_type}}
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="全部">全部</el-dropdown-item>
          <el-dropdown-item command="动态">动态</el-dropdown-item>
          <el-dropdown-item command="新闻">新闻</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
        <el-table
        v-loading="loading"
        element-loading-text="操作中，请稍后..."
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.6)"
        :data="rows"
        style="width: 100%">
        <el-table-column
          label="标题"
          width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.title }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="内容"
          width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.introduce }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="图片"
          width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.title }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="时间"
          width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination style="text-align:center;margin-top:20px;"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("news");
export default {
  computed: {
    ...mapState([
      "rows",
      "default_type",
      "total",
      "currentPage",
      "pageSize",
      "loading"
    ])
  },
  mounted: function() {
    this.getData_async({
      default_type: this.default_type,
      currentPage: this.currentPage,
      pageSize: this.pageSize
    });
  },
  methods: {
    ...mapActions(["getData_async","delNews_async"]),
    handleCommand(command) {
      this.getData_async({
        default_type: command,
        currentPage: this.currentPage,
        pageSize: this.pageSize
      });
    },
    handleSizeChange(val) {
      this.getData_async({
        default_type: this.default_type,
        currentPage: this.currentPage,
        pageSize: val
      });
    },
    handleCurrentChange(val) {
      this.getData_async({
        default_type: this.default_type,
        currentPage: val,
        pageSize: this.pageSize
      });
    },
    handleDelete(index, row) {
      this.delNews_async({
        _id: row._id,
        default_type: this.default_type,
        currentPage: this.currentPage,
        pageSize: this.pageSize
      });
    }
  }
};
</script>

