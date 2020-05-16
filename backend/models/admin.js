const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
});

// 导出 Travel 模型
module.exports = mongoose.model("admins", AdminSchema);
