const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TravelSchema = new Schema(
  {
    title: {type: String, required: true},
    img: {type: String, required: true},
    content: {type: String, required: true},
    sort: {type: Number, required: true},
  }
);


// 导出 Travel 模型
module.exports = mongoose.model('news', TravelSchema);