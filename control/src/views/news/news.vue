<template>
    <div class="news">
        <el-form ref="form" :model="form" label-width="100px" label-position="left">
        <el-form-item label="类型" prop="type">
            <el-select v-model="form.type" placeholder="请选择">
            <el-option label="动态" value="动态"></el-option>
            <el-option label="新闻" value="新闻"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="标题" prop="title">
            <el-col :span="12">
            <el-input v-model="form.title"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="内容" prop="introduce">
            <el-input type="textarea" v-model="form.introduce" :rows="7" style="width: 80%;"></el-input>
        </el-form-item>
        <el-form-item label="图片">
            <el-upload
                class="upload-demo"
                ref="upload"
                drag
                action="http://localhost:3000/upload/single"
                multiple
                :on-success="upload_success">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-form-item>
        <el-form-item label="时间" prop="date">
            <el-col :span="8">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">添加项目</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        type: "",
        title: "",
        introduce: "",
        in_img: [],
        date: ""
      }
    };
  },
  methods: {
    onSubmit() {
      axios
        .post("http://localhost:3000/news/addNews", this.form)
        .then(res => {
          if (res.data.status == "ok") {
            this.$alert("添加项目成功", "提示", {
              confirmButtonText: "确定",
              callback: () => {
                this.$refs.upload.clearFiles();
                this.$refs.form.resetFields();
                this.form.in_img.length = 0
              }
            });
          }
        })
        .catch(error => {
          if (error) {
            this.$alert("Error:" + error.message, "提示", {
              confirmButtonText: "确定"
            });
          }
        });
    },
    resetForm(formName) {
      this.$refs.upload.clearFiles();
      this.$refs[formName].resetFields();
      this.form.in_img.length = 0
    },
    upload_success(res) {
      let t = this.form;
      t.in_img.push(res.imgId);
    }
  }
};
</script>
<style>
.news {
  width: 50%;
  padding-left: 5%;
}
</style>
