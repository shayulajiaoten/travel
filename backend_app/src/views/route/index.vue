<template>
  <div>
    <el-button style="margin:20px 5px;width:100px" type="success" @click="dialogVisible = true">新增</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="排序">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.sort }}</span>
        </template>
      </el-table-column>
      <el-table-column label="标题">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="图片">
        <template slot-scope="scope">
          <el-image style="width: 100px; height: 100px" :src="scope.row.img" />
        </template>
      </el-table-column>
      <el-table-column label="内容">
        <template slot-scope="scope">
          <p>{{ scope.row.content | ellipsis }}</p>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="新增酒店" :visible.sync="dialogVisible" width="30%">
      <el-form :model="form">
        <el-form-item label="排序" :label-width="formLabelWidth">
          <el-input v-model="form.sort" placeholder="请输入排序" autocomplete="off" />
        </el-form-item>
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="form.title" placeholder="请输入标题" autocomplete="off" />
        </el-form-item>
        <el-form-item label="图片上传" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            action="http://localhost:8080/api/upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="newImageUrl" :src="newImageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
        </el-form-item>
        <el-form-item label="内容" :label-width="formLabelWidth">
          <el-input v-model="form.content" type="textarea" :rows="2" placeholder="请输入内容" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleFoodNew">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="编辑酒店" :visible.sync="editDialog" width="30%">
      <el-form :model="editFrom">
        <el-form-item label="排序" :label-width="formLabelWidth">
          <el-input v-model="editFrom.sort" placeholder="请输入排序" autocomplete="off" />
        </el-form-item>
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="editFrom.title" placeholder="请输入标题" autocomplete="off" />
        </el-form-item>
        <el-form-item label="图片上传" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            action="http://localhost:8080/api/upload"
            :show-file-list="false"
            :on-success="handleAvatarEditSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="editFrom.img" :src="editFrom.img" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
        </el-form-item>
        <el-form-item label="内容" :label-width="formLabelWidth">
          <el-input v-model="editFrom.content" type="textarea" :rows="2" placeholder="请输入内容" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialog=false">取 消</el-button>
        <el-button type="primary" @click="confirmEdit ">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
      <span>你确定要删除吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmDelte">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { fetchList, newRoute, deleteRoute, editRoute } from '@/api/route'
export default {
  name: 'Message',

  filters: {
    ellipsis(value) {
      if (!value) return ''
      if (value.length > 50) {
        return value.slice(0, 50) + '.....'
      }
      return value
    }
  },
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      editDialog: false,
      centerDialogVisible: false,
      form: {},
      editFrom: {
        textarea: ''
      },
      formLabelWidth: '100px',
      imageUrl: '',
      newImageUrl: '',
      deleteId: ''
    }
  },

  created() {
    this.getList()
  },
  methods: {
    getList() {
      fetchList().then(res => {
        this.tableData = res.data.data
      })
    },

    handleEdit(index, row) {
      this.editDialog = !this.editDialog
      this.editFrom = row
      this.editFrom.id = row._id
      console.log(this.editFrom)
    },
    confirmEdit() {
      editRoute(this.editFrom).then(() => {
        this.editFrom = {}
        this.editDialog = !this.editDialog
        this.$message({
          message: '修改成功',
          type: 'success'
        })
        this.getList()
      })
    },
    handleFoodNew() {
      newRoute(this.form).then(() => {
        this.$message({
          message: '添加成功',
          type: 'success'
        })
        this.getList()
        this.dialogVisible = false
      })
    },
    handleDelete(index, row) {
      this.centerDialogVisible = true
      this.deleteId = row._id
    },
    handleAvatarSuccess(res, file) {
      this.newImageUrl = URL.createObjectURL(file.raw)
      this.form.img = res.msg
    },
    handleAvatarEditSuccess(res, file) {
      this.editFrom.img = res.msg
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    confirmDelte() {
      this.centerDialogVisible = false
      deleteRoute({ id: this.deleteId })
      this.getList()
    }
  }
}
</script>

<style scoped>
.tab-container {
  margin: 30px;
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
