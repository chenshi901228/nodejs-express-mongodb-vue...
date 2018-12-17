<template>
    <div class="project">
        <el-form ref="addForm" :model="form" label-width="100px" label-position="left">
        <el-form-item label="项目类型" prop="type">
            <el-select v-model="form.type" placeholder="请选择">
            <el-option label="app开发" value="app开发"></el-option>
            <el-option label="网站建设" value="网站建设"></el-option>
            <el-option label="品牌设计" value="品牌设计"></el-option>
            <el-option label="整合营销" value="整合营销"></el-option>
            <el-option label="游戏开发" value="游戏开发"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="项目名称" prop="name">
            <el-col :span="12">
            <el-input v-model="form.name"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="项目类别" prop="sort">
            <el-col :span="12">
            <el-input v-model="form.sort" placeholder="例：APP开发/直播APP开发"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="项目介绍" prop="introduce">
            <el-input type="textarea" v-model="form.introduce" :rows="7" style="width: 80%;"></el-input>
        </el-form-item>
        <el-form-item label="项目图片">
            <el-upload
                class="upload-demo"
                ref="upload"
                drag
                action="http://39.104.121.78/upload/single"
                multiple
                :on-success="upload_success">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-form-item>
        <el-form-item label="项目地址" prop="link">
            <el-col :span="14">
            <el-input v-model="form.link"></el-input>
            </el-col>
            <el-col :span="1"> 或</el-col>
            <el-col :span="10">
                上传二维码
                <el-upload
                    class="avatar-uploader"
                    ref="upload1"
                    action="http://39.104.121.78/upload/single"
                    :limit=1
                    :on-success="code_success">
                    <img v-if="form.link_imageUrl" :src="form.link_imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-col>
        </el-form-item>
        <el-form-item label="项目完成时间" prop="date">
            <el-col :span="8">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">添加项目</el-button>
            <el-button @click="resetForm('addForm')">重置</el-button>
        </el-form-item>
        </el-form>
        <img src="" alt="">
    </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        type: "",
        name: "",
        sort: "",
        introduce: "",
        in_img: [],
        link: "",
        link_imageUrl: "",
        date: ""
      }
    };
  },
  methods: {
    onSubmit() {
      axios
        .post("http://39.104.121.78/addProject", this.form)
        .then(res => {
          if (res.data.status == "ok") {
            this.$alert("添加项目成功", "提示", {
              confirmButtonText: "确定",
              callback: () => {
                this.$refs.upload1.clearFiles();
                this.$refs.upload.clearFiles();
                this.$refs.addForm.resetFields();
                this.form.link_imageUrl = ""
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
      this.$refs.upload1.clearFiles();
      this.$refs.upload.clearFiles();
      this.$refs[formName].resetFields();
      this.form.link_imageUrl = ""
    },
    upload_success(res) {
      let t = this.form;
      t.in_img.push(res.imgId);
    },
    code_success(res) {
      let t = this.form;
      t.link_imageUrl = res.url;
    }
  }
};
</script>
<style>
.project {
  width: 50%;
  padding-left: 5%;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>


