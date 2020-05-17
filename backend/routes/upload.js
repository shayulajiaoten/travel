var express = require("express");
var router = express.Router();
const { SuccessModel, ErrorModel } = require("../model/resModel");

var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images"); // 保存的路径，备注：需要自己创建
  },
  filename: function (req, file, cb) {
    // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
    cb(null, file.originalname);
  },
});
var upload = multer({
  storage,
});

router.post("/", upload.single("file"), function (req, res, next) {
  const file = req.file;
  res.json(
    new SuccessModel(`http://localhost:3000/images/${file.originalname}`)
  );
});
module.exports = router;
